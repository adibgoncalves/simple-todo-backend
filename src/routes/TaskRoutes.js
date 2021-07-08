const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');


router.post('/new', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation,  TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all',   TaskController.all);
router.get('/filter/late',  TaskController.late);
router.get('/filter/today', TaskController.today);
router.get('/filter/week',  TaskController.week);
router.get('/filter/month', TaskController.month);
router.get('/filter/year',  TaskController.year);


module.exports = router;