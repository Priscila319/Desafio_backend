const express = require('express');
const router = express.Router();
const cachorroController = require('../controllers/cachorroController');

router.get('/', cachorroController.listEntries);
router.get('/:id', cachorroController.getEntryById);
router.post('/', cachorroController.createEntry);
router.put('/:id', cachorroController.updateEntry);
router.delete('/:id', cachorroController.deleteEntry);

module.exports = router;
