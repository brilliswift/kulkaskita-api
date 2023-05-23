const axios = require('axios');

server.route({
  method: 'GET',
  path: '/food',
  handler: async (request, h) => {
    try {
      const response = await axios.get('https://api.foodresources.com');
      const resources = response.data.resources;
      return { resources };
    } catch (error) {
      console.error(error);
      return h.response('Failed to retrieve food resources').code(500);
    }
  }
});
