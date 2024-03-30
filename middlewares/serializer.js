const serializer = (req, res, next) => {
    // Serialize resume data (e.g., read resume.json file)
    const resumeData = require('../../resume.json');
    res.locals.resume = resumeData;
    next();
};

module.exports = serializer;
