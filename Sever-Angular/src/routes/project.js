import express from 'express';
import { createProject, deleteProject, getAllProject, updateProject, getOneProject } from '../controllers/project';
import { isAdmin, isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/project', getAllProject);
router.get('/project/:id', getOneProject);
router.post('/project', createProject);
router.patch('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
module.exports = router;