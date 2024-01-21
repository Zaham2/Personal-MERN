import prisma from '../lib/prisma.js';

export async function getImages(req, res) {
    const images = await prisma.image.findMany();
    res.json(images);
}

export async function getImage(req, res) {
    const { id } = req.params;
    const image = await prisma.image.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(image);
}

export async function createImage(req, res) {
    const result = await prisma.image.create({
        data: {
            ...req.body,
            startDate: new Date(),
            endDate: new Date()
        },
    });
    res.json(result);
}

export async function deleteImage(req, res) {
    const { id } = req.params;
    const image = await prisma.image.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(image);
}
