import express from 'express'
import { getSkills, getSkill, createSkill, deleteSkill } from '../controllers/skillController.js'

const router = express.Router()

router.route('/')
    .get(getSkills)
    .post(createSkill)

router.route('/:id')
    .get(getSkill)
    .delete(deleteSkill)

export default router