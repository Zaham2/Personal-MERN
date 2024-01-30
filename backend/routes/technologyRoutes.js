import express from 'express'
import { getTechnologies, getTechnology, createTechnology, deleteTechnology } from '../controllers/technologyController.js'

const router = express.Router()

router.route('/')
    .get(getTechnologies)
    .post(createTechnology)

router.route('/:id')
    .get(getTechnology)
    .delete(deleteTechnology)

export default router