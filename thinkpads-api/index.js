// need express
const express = require('express');
// express needs its own port
const port = 3000;
// require routers
const thinkpadRouter = require('./routes/thinkpad');

// need to create an app with express
const app = express();
// need to connect a router
app.use('/thinkpad', thinkpadRouter);
// need express to listen on that port
app.listen(port, () =>{
    console.log(`running on port ${port}`);
})