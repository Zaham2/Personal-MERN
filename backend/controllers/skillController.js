import prisma from '../lib/prisma.js';

export async function getSkills(req, res) {
    const skills = await prisma.skill.findMany();
    res.json(skills);
}

export async function getSkill(req, res) {
    const { id } = req.params;
    const skill = await prisma.skill.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(skill);
}

export async function createSkill(req, res) {
    const result = await prisma.skill.create({
        data: {
            ...req.body,
        },
    });
    res.json(result);
}

export async function deleteSkill(req, res) {
    const { id } = req.params;
    const skill = await prisma.skill.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(skill);
}
