import prisma from '../lib/prisma.js';

export async function getCourses(req, res) {
    const courses = await prisma.course.findMany();
    res.json(courses);
}

export async function getCourse(req, res) {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(course);
}

export async function createCourse(req, res) {
    const result = await prisma.course.create({
        data: {
            ...req.body,
            startDate: new Date(),
            endDate: new Date()
        },
    });
    res.json(result);
}

export async function deleteCourse(req, res) {
    const { id } = req.params;
    const course = await prisma.course.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(course);
}
