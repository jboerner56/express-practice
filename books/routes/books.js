// require express
const express = require('express');
const router = express.Router;
const controller = require('../controllers/books');
// create the router
const bookRoutes = router();
// create the router in the routes folder

const {
    create,
    retrieve,
    update,
    deleted
} = require('../controllers/books');

// add handlers for the routes
// GET
bookRoutes.get('/', retrieve);
// POST
bookRoutes.post('/', create);
// PUT
bookRoutes.put('/',update);
// DELETE
bookRoutes.delete('/', deleted);

module.exports = bookRoutes;
