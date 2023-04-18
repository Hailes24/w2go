"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutosToHoras = void 0;
function convertMinutosToHoras(minutosAmout) {
    const horas = Math.floor(minutosAmout / 60);
    const minutos = minutosAmout % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
}
exports.convertMinutosToHoras = convertMinutosToHoras;
