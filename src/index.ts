import express from "express";
import winston from "winston"

const app = express();
const port = 8080; // default port to listen

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    logger.log({level: 'info', message: `server started at http://localhost:${ port }` });
});