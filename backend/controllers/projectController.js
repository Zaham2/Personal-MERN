import prisma from '../lib/prisma.js';

export async function getProjects(req, res) {
    const projects = await prisma.project.findMany();
    res.json(projects);
}

export async function getProject(req, res) {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(project);
}

export async function createProject(req, res) {
    const result = await prisma.project.create({
        data: {
            ...req.body,
        },
    });
    res.json(result);
}

export async function deleteProject(req, res) {
    const { id } = req.params;
    const project = await prisma.project.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(project);
}
