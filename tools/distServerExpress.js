// import historyApiFallback from 'connect-history-api-fallback';
import {chalkSuccess} from './chalkConfig';
import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import axios from 'axios';


// MONGOOSE
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/WaymarkTest001`
const mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`);
})

const app = express();
const server = http.createServer(app);
const port = (process.env.PORT || 4004);
console.log(chalkSuccess('Starting Express dist server...'));

// ROUTES
app.use('/api', require('./routes/api'));

app.use(express.static(path.join(__dirname, '../dist')));
// app.use(historyApiFallback());

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.use(express.static('dist/*.html'));

server.listen(port);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
