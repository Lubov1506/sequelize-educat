const express = require('express');
const router = require('./routes');
const {STATIC_PATH} = require('./config')
const app = express();

app.use(express.json());
app.use(express.static(STATIC_PATH))
app.use('/api', router);

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).send({
    errors: [{ message: err.message || 'Server error' }]
  });
});

module.exports = app;
