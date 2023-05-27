const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const server = Hapi.server({
  port: 8000,
  host: 'localhost'
});

// Register routes
server.route(routes);

// Start the server
const start = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

start();
