require('dotenv').config({ path: `${__dirname}/../.env` });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');

const databaseConfig = require('./app/config/database');
const schema = require('./app/schema/schema.js');

class AppController {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    databaseConfig.startConnection();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(helmet());

    this.express.use(cors({
      origin: process.env.APP_DOMAIN,
    }));
  }

  routes() {
    this.express.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
    }));
  }
}

module.exports = new AppController().express;
