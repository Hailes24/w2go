

export function convertHorasToMinutos(horas: string){
    const [hora, minutos] = horas.split(':').map(Number);
    const minutosTotais = (hora * 60) + minutos;
    return minutosTotais;
} 