const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/get', sampleController.getRequest);
router.post('/post', sampleController.postRequest);

module.exports = router;
