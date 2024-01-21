import express from 'express'
import prisma from './lib/prisma.js';
import jobRoutes from './routes/jobRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3005;

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use('/api/job', jobRoutes)
app.use('/api/project', projectRoutes)




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))