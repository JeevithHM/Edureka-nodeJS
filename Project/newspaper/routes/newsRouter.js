const express = require('express');
const router = express.Router();

const validator = require('../controllers/validators/adminValidator')
const newsController = require('../controllers/newsController');

//router.use(validator.authenticate);

router.post('/add', newsController.addNews);
router.get('/', newsController.getNews);
//router.put('/edit/:id', newsController.editNews);
router.delete('/delete/:id', newsController.deleteNews);

module.exports = router;