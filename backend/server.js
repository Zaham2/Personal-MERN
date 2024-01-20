import express from 'express'
import prisma from './lib/prisma.js';
const app = express()
const PORT = process.env.PORT || 3005;

app.get('/', async (req, res) => {

})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))