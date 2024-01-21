import express from 'express'
import { getCertifications, getCertifications, createCertification, deleteCertification } from '../controllers/certificationController.js'

const router = express.Router()

router.route('/')
    .get(getCertifications)
    .post(createCertification)

router.route('/:id')
    .get(getCertifications)
    .delete(deleteCertification)

export default router