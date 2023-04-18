"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHorasToMinutos = void 0;
function convertHorasToMinutos(horas) {
    const [hora, minutos] = horas.split(':').map(Number);
    const minutosTotais = (hora * 60) + minutos;
    return minutosTotais;
}
exports.convertHorasToMinutos = convertHorasToMinutos;
