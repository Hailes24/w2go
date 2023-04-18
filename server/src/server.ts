
/** 
 * maneira antiga e padrao
 * const express = require('express'); 
**/
//console.log('holla mundo')

import express, { response } from 'express';
import cors  from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHorasToMinutos } from './utils/convert-horas-to-minuts';
import { convertMinutosToHoras } from './utils/convert-minutos-to-horas';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                //ads: Int16Array,
            }
        }
    })
    return res.json(games);
});

app.post('/games/:id/ads', async function(req, res) {
    const gameid = req.params.id;
    const body: any = req.body;

    const ad = await prisma.ad.create({
        data: {
            //gameId = g,
            gameId: gameid,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),  
            hourStart: convertHorasToMinutos(body.hourStart),
            hourEnd: convertHorasToMinutos(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
            //game: { }
        } 
    });
    return res.status(201).json(ad);
});


app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true, 
        },
        where: {
            gameId
        },
        orderBy: {
            createdAd: 'desc'
        },
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutosToHoras(ad.hourStart),
            hourEnd: convertMinutosToHoras(ad.hourStart), 
        }
    }))
});

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })

    return res.json(ad)
});


app.listen(3333);