import express from 'express';
import next from 'next';
import mongoose from 'mongoose';
import castor from './castor';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Setup nextjs Server
app.prepare()
  .then(async () => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if(err) throw err;
      console.info(`> Ready on http://localhost:${port}`);
    });

    // Connect to mongodb
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/chromecastkiosk');
      console.info('Connected to mongodb.');
    } catch(error) {
      if(error.message.indexOf('connect ECONNREFUSED') !== -1) {
        console.error('Mongodb isn\'t running.');
        process.exit(1);
      }
      throw error;
    }

    // Bind the server to port 6969
    await new Promise(r => server.listen(6969, r));

    console.info('Server started on port 6969');

    castor.init();
  });
