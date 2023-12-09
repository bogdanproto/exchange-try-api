const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { handleLibraresError } = require('./helpers');
const {
  usersRouter,
  sportsRouter,
  spotRouter,
  eqptRouter,
} = require('./routes/api');

const {
  pathUsers,
  pathSports,
  pathSpots,
  status,
  pathEqpt,
} = require('./consts');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(pathUsers.ROOT, usersRouter);
app.use(pathSports.ROOT, sportsRouter);
app.use(pathSpots.ROOT, spotRouter);
app.use(pathEqpt.ROOT, eqptRouter);

app.use((req, res) => {
  res.status(status.NOT_FOUND.status).json(status.NOT_FOUND);
});

app.use((err, req, res, next) => {
  const error = handleLibraresError(err);

  const {
    status = 500,
    message = 'Internal Server Error',
    code = '500',
  } = error;
  res.status(status).json({ status, message, code });
});

module.exports = app;
