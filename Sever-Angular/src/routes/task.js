import express from 'express';
import { createTask, deleteTask, getAllTask, getOneTask, updateTask } from '../controllers/task';
import { isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/task', getAllTask);
router.post('/task',  createTask);
router.put('/task/:id',  updateTask);
router.delete('/task/:id',  deleteTask);
router.get('/task/:id', getOneTask);
module.exports = router;