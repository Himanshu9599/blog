export const errorHandler = (statusCode, message) => {
  const error = new Error();  // Create a new Error object
  error.statusCode = statusCode;  // Set the statusCode property of the Error object
  error.message = message;  // Set the message property of the Error object
  return error;  // Return the Error object
};