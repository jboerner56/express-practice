const express = require('express');
const Router = express.Router;
const controller = require('../controllers/thinkpad');
// create the router
const thinkpadRoutes = Router();

const {
    create,
    retrieveAll,
    update,
    deleted
} = require('../controllers/thinkpad');
// add handlers for the routes

// GET
thinkpadRoutes.get('/', retrieveAll);
// POST
thinkpadRoutes.post('/', create);
// PUT
thinkpadRoutes.put('/',update);
// DELETE
thinkpadRoutes.delete('/', deleted);

module.exports = thinkpadRoutes;