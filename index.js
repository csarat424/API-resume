const express = require('express');
const resumeRouter = require('./API-resume/routes/resume');
const errorHandler = require('./API-resume/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/resume', resumeRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
