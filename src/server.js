const Happi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Happi.server({
    port: 5000,
    host: 'localhost',
    // Handle different url (CORS)
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
