import express from 'express'
import { getProjects, getProject, createProject, deleteProject } from '../controllers/projectController.js'

const router = express.Router()

router.route('/')
    .get(getProjects)
    .post(createProject)

router.route('/:id')
    .get(getProject)
    .delete(deleteProject)

export default router