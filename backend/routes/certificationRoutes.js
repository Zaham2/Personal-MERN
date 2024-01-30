import express from 'express'
import { getCertifications, getCertification, createCertification, deleteCertification } from '../controllers/certificationController.js'

const router = express.Router()

router.route('/')
    .get(getCertifications)
    .post(createCertification)

router.route('/:id')
    .get(getCertification)
    .delete(deleteCertification)

export default router