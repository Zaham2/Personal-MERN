import prisma from '../lib/prisma.js';

export async function getCertifications(req, res) {
    const certifications = await prisma.certification.findMany();
    res.json(certifications);
}

export async function getCertification(req, res) {
    const { id } = req.params;
    const certification = await prisma.certification.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(certification);
}

export async function createCertification(req, res) {
    const result = await prisma.certification.create({
        data: {
            ...req.body,
            startDate: new Date(),
            endDate: new Date()
        },
    });
    res.json(result);
}

export async function deleteCertification(req, res) {
    const { id } = req.params;
    const certification = await prisma.certification.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(certification);
}
