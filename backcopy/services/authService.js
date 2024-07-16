const admin = require('firebase-admin');
const UserModel = require('../models/userModel');
const { validateSignup, validateLogin } = require('../utils/validation');
const { CustomError } = require('../utils/errorHandler');

class AuthService {
  static async signup(data) {
    const { error } = validateSignup(data);
    if (error) {
      throw new CustomError(400, error.details[0].message);
    }

    try {
      const userRecord = await admin.auth().createUser({
        email: data.email,
        password: data.password,
        displayName: data.displayName,
      });

      const user = {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        role: data.role,
      };

      await UserModel.createUser(user);
      return user;
    } catch (error) {
      console.log("Error in authService",error)
      throw new CustomError(500, 'Error creating user');
    }
  }

  static async login(data) {
    const { error } = validateLogin(data);
    if (error) {
      throw new CustomError(400, error.details[0].message);
    }

    try {
      const userRecord = await admin.auth().getUserByEmail(data.email);
      const user = await UserModel.getUserByUid(userRecord.uid);
      const token = await admin.auth().createCustomToken(user.uid);
      return {token,role:user.role};
    } catch (error) {
      throw new CustomError(401, 'Invalid login credentials');
    }
  }
}

module.exports = AuthService;
