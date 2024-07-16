const authService = require('../services/authService');

exports.signup = async (req, res, next) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const {token,role} = await authService.login(req.body);
    res.status(200).json({ token,role });
  } catch (error) {
    next(error);
  }
};
