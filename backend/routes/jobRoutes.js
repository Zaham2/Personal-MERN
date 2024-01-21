import express from 'express'
import { getJobs, getJob, createJob, deleteJob } from '../controllers/jobController.js'

const router = express.Router()

router.route('/')
    .get(getJobs)
    .post(createJob)

router.route('/:id')
    .get(getJob)
    .delete(deleteJob)

export default router