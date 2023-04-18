
export function convertMinutosToHoras(minutosAmout: number){ 
    const horas = Math.floor(minutosAmout / 60);
    const minutos = minutosAmout % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
} 