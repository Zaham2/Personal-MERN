import express from 'express'
import { getImages, getImage, createImage, deleteImage } from '../controllers/imageController.js'

const router = express.Router()

router.route('/')
    .get(getImages)
    .post(createImage)

router.route('/:id')
    .get(getImage)
    .delete(deleteImage)

export default router