"use strict";
/**
 * maneira antiga e padrao
 * const express = require('express');
**/
//console.log('holla mundo')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const convert_horas_to_minuts_1 = require("./utils/convert-horas-to-minuts");
const convert_minutos_to_horas_1 = require("./utils/convert-minutos-to-horas");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient({
    log: ['query']
});
app.get('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany({
        include: {
            _count: {
            //ads: Int16Array,
            }
        }
    });
    return res.json(games);
}));
app.post('/games/:id/ads', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const gameid = req.params.id;
        const body = req.body;
        const ad = yield prisma.ad.create({
            data: {
                //gameId = g,
                gameId: gameid,
                name: body.name,
                yearsPlaying: body.yearsPlaying,
                discord: body.discord,
                weekDays: body.weekDays.join(','),
                hourStart: (0, convert_horas_to_minuts_1.convertHorasToMinutos)(body.hourStart),
                hourEnd: (0, convert_horas_to_minuts_1.convertHorasToMinutos)(body.hourEnd),
                useVoiceChannel: body.useVoiceChannel,
                //game: { }
            }
        });
        return res.status(201).json(ad);
    });
});
app.get('/games/:id/ads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = req.params.id;
    const ads = yield prisma.ad.findMany({
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
    });
    return res.json(ads.map(ad => {
        return Object.assign(Object.assign({}, ad), { weekDays: ad.weekDays.split(','), hourStart: (0, convert_minutos_to_horas_1.convertMinutosToHoras)(ad.hourStart), hourEnd: (0, convert_minutos_to_horas_1.convertMinutosToHoras)(ad.hourStart) });
    }));
}));
app.get('/ads/:id/discord', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adId = req.params.id;
    const ad = yield prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    });
    return res.json(ad);
}));
app.listen(3333);
