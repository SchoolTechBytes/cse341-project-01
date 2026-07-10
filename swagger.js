import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Contact API',
        description: 'This API is for CSE341 learning project'
    },
    host: 'cse341-project-01-y1yj.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./src/routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);