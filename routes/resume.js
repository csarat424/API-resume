const express = require('express');
const serializer = require('../middlewares/serializer');
const router = express.Router();

router.use(serializer);

router.get('/', (req, res) => {
    res.json(res.locals.resume);
});

module.exports = router;
