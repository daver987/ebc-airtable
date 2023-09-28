import express from 'express';
import serverless from 'serverless-http';

const app = express();
const { Noco } = require("nocodb");

// Initialize NocoDB
app.use(async (req, res, next) => {
  try {
    await Noco.init({}, req, res);
    next();
  } catch (e) {
    console.log(e);
  }
});

export const handler = serverless(app);
