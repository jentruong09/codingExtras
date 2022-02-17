const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route

const PORT = process.env.PORT || 3001


const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;