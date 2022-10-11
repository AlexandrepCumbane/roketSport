import express from 'express';
import {PrismaClient} from '@prisma/client'

const app = express();

// connect to prisma
const prisma = new PrismaClient({
    
})


// HTTP METHODS / API REST FULL / HTTP Codes

// List
app.get('/games',async (req, res)=>{
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select:{
                    ads:true,
                }
            }
        }
    })
    return res.status(201).json(games)
})

// create
app.post('/ads',(req, res)=>{
    return res.status(201).json([])
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;
    const ads = await prisma.ad.findMany({
        where: {
             gameId,
        }
    })
    return res.json(ads)
})

app.get('/ads/:id/discord ', (req, res) => {
    return res.json([])
})

app.listen(3001)