import prisma from '../lib/prisma.js';

export async function getJobs(req, res) {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
}

export async function getJob(req, res) {
    const { id } = req.params;
    const job = await prisma.job.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(job);
}

export async function createJob(req, res) {
    const result = await prisma.job.create({
        data: {
            ...req.body,
            startDate: new Date(),
            endDate: new Date()
        },
    });
    res.json(result);
}

export async function deleteJob(req, res) {
    const { id } = req.params;
    const job = await prisma.job.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(job);
}
