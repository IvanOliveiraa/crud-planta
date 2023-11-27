import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import {z} from 'zod'

const app = fastify()
const prisma = new PrismaClient()

app.post('/users', async (request, reply) => {
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

const {name, email, password} = createUserSchema.parse(request.body)

await prisma.user.create({
  data:{
    name,
    email,
    password,
  }
})
return reply.status(201).send()
})

app.listen({
host: '0.0.0.0',
port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
console.log('HTTP server Running')
})