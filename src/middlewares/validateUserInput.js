const validateUserInput = (request, h) => {
    // Extract the necessary data from the request, such as request payload or query parameters
    const { username, email, password } = request.payload;
  
    // Perform any validation logic on the input data
    if (!username || !email || !password) {
      // If any required field is missing, return an error response
      return h.response({ error: 'Missing required fields' }).code(400);
    }
  
    // If the input passes validation, proceed to the next handler or route
    return h.continue;
  };
  
  module.exports = validateUserInput;
  