const express = require('express');
const { getSwags, createSwag, getSwag, updateSwag, deleteSwag } = require('../controllers/swags');
const router = express.Router();

router.get('/', getSwags);
router.post('/', createSwag);
router.get('/:id', getSwag);
router.put('/:id', updateSwag);
router.delete('/:id', deleteSwag);

module.exports = router;