import express from 'express'
import prisma from './lib/prisma.js';
const app = express()
const PORT = process.env.PORT || 3005;

app.get('/', async (req, res) => {
    const test = await prisma.test.create({
        data: {
            bio: 'someone\'s bio should go here',
            userId: 1
        }
    })

    console.log(test)
    res.send(test)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))