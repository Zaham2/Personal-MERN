import express from 'express'
import { getTechnologys, getTechnology, createTechnology, deleteTechnology } from '../controllers/technologyController.js'

const router = express.Router()

router.route('/')
    .get(getTechnologys)
    .post(createTechnology)

router.route('/:id')
    .get(getTechnology)
    .delete(deleteTechnology)

export default router