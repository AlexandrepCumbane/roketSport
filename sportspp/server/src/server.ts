import express from 'express';
import {PrismaClient} from '@prisma/client'

const app = express();
app.use(express.json()) 

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
app.post('/games/:id/ads', async(req, res)=>{

    const gameId = req.params.id
    const body = req.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name:body.name,
            weekDay:body.weekDay,
            useVoiceChannel:body.useVoiceChannel,
            yearsPlaying:body.yearsPlaying,
            hourStart:body.hourStart,
            hourEnd:body.hourEnd,
            discord:body.discord, 
        }
    })

    return res.status(201).json(body)
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;
    const ads = await prisma.ad.findMany({
        select:{
            id:true,
            name:true,
            weekDay:true,
            useVoiceChannel:true,
            yearsPlaying:true,
            hourStart:true,
            hourEnd:true,
        },
        where: {
             gameId,
        },
        orderBy: {
            createdAt:'desc'
        }
    })
    return res.json(ads.map(ad =>{
        return {
            ...ad,
            weekDay:ad.weekDay.split(','),
        }
    }))
})

app.get('/ads/:id/discord  ', async (req, res) => {
    const adId = req.params.id;
    const ad = await prisma.ad.findUniqueOrThrow  ({
        select:{
            discord:true,
        },
        where: {
            id:adId,
        }
    })

    return res.json({
        discord:ad.discord
    })
})

app.listen(3001)