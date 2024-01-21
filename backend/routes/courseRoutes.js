import express from 'express'
import { getCourses, getCourse, createCourse, deleteCourse } from '../controllers/courseController.js'

const router = express.Router()

router.route('/')
    .get(getCourses)
    .post(createCourse)

router.route('/:id')
    .get(getCourse)
    .delete(deleteCourse)

export default router