const Hapi = require('@hapi/hapi');
// import Hapi from '@hapi/hapi';
const routes = require('./routes');
// import routes  from './routes';
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        // options: {
        //     cors: true
        // },
        routes: {
            cors: { 
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});

init();

