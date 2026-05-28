import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Event Planner API',
    description: 'CSE 341 - Project 2',
    version: '1.0.0',
  },
  host: '',
  schemes: ['http', 'https'],
  securityDefinitions: {
    github_auth: {
      type: 'oauth2',
      authorizationUrl: '/login',
      flow: 'implicit',
      scopes: {},
    },
  },
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen()(outputFile, routes, doc);
