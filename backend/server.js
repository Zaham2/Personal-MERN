import express from 'express'
import jobRoutes from './routes/jobRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import skillRoutes from './routes/skillRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import certificationRoutes from './routes/certificationRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import technologyRoutes from './routes/technologyRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3005;

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/job', jobRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/skill', skillRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/certification', certificationRoutes)
app.use('/api/course', courseRoutes)
app.use('/api/technology', technologyRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))