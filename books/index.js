// need to have express required
const express = require('express');
// create app for express
const app = express();
// server will need to be listening on a port
const port = 3000;
// require routers, follow path to the routes folder
const bookRouter = require('./routes/books');
// connect to the router
app.use('/books', bookRouter);
// express will be listening on this port
app.listen(port, () => {
    console.log(`running on port ${3000}`);
})