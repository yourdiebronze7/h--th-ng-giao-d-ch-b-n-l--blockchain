const express = require('express');
const productController = require('./productController');

const app = express();

app.get('/product/:id/origin', productController.getOrigin);
app.get('/product/:id/summary', productController.getSummary);

module.exports = app;