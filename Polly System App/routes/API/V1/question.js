const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/questionControllers');

router.delete('/delete/:id', questionController.delete);
router.post('/update/:id', questionController.update);
router.post('/create', questionController.create);
router.get('/view/:id', questionController.showDetails);
router.use('/options', require('./option'));

module.exports = router;