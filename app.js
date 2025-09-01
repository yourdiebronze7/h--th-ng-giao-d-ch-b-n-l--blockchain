const express = require('express');
const productController = require('./productController');

const app = express();

app.get('/product/:id/origin', productController.getOrigin);

module.exports = app;