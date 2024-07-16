const admin = require('firebase-admin');

// Custom error class to standardize error objects
class CustomError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// Function to log errors (this can be expanded to log to files, external services, etc.)
const logError = (error) => {
  console.error(error);
};

const handleFirebaseError = (error) => {
  switch (error.code) {
    case 'auth/email-already-exists':
      return new CustomError(400, 'Email already exists');
    case 'auth/invalid-email':
      return new CustomError(400, 'Invalid email');
    case 'auth/user-not-found':
      return new CustomError(404, 'User not found');
    case 'auth/invalid-password':
      return new CustomError(400, 'Invalid password');
    default:
      return new CustomError(500, 'Internal Server Error');
  }
};

const handleError = (error, req, res, next) => {
  let customError = error;

  // Check if it's a Firebase error
  if (error.code && error.code.startsWith('auth/')) {
    customError = handleFirebaseError(error);
  }

  logError(customError);

  res.status(customError.statusCode || 500).json({
    error: customError.message || 'Internal Server Error',
  });
};

module.exports = {
  handleError,
  CustomError,
};
