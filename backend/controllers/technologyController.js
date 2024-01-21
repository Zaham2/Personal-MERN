import prisma from '../lib/prisma.js';

export async function getTechnologyies(req, res) {
    const technologyies = await prisma.technology.findMany();
    res.json(technologyies);
}

export async function getTechnology(req, res) {
    const { id } = req.params;
    const technology = await prisma.technology.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(technology);
}

export async function createTechnology(req, res) {
    const result = await prisma.technology.create({
        data: {
            ...req.body,
        },
    });
    res.json(result);
}

export async function deleteTechnology(req, res) {
    const { id } = req.params;
    const technology = await prisma.technology.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(technology);
}
