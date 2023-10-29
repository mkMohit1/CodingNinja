const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    return res.json({
        message: "API is working"
    });
})
router.use('/API', require('./API'));

module.exports = router;