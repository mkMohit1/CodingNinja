const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/optionControllers');

router.delete('/delete/:id', optionController.delete);
router.get('/:id/add_vote/', optionController.add_vote);
router.post('/:id/create', optionController.create);
module.exports = router;