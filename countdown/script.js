

// Variables 
const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Second = document.getElementById('Second');

// Funcion para colocar la fecha del contador

const FechaObjetivo = new Date("2025-02-14T00:00:00");
function actualizarTemporizador(){
    const ahora = new Date();
    const diferenciaFecha = FechaObjetivo - ahora;

    const DiferenciaDays = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));
    const DiferenciaHours = Math.floor(diferenciaFecha % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const DiferenciaMinutes = Math.floor(diferenciaFecha % (1000 * 60 * 60) / (1000 * 60));
    const DiferenciaSeconds = Math.floor(diferenciaFecha % (1000 * 60) / 1000);

    if(Days && Hours && Minutes && Second){
        Days.innerHTML = DiferenciaDays.toString();
        Hours.innerHTML = DiferenciaHours.toString();
        Minutes.innerHTML = DiferenciaMinutes.toString();
        Second.innerHTML = DiferenciaSeconds.toString();
    }else{
        console.log("No existen tales contenedores")
    }

    if(diferenciaFecha < 0){
        clearInterval(intervalo);
        console.log("Ha llegado la hora");
    }

}
const intervalo = setInterval(actualizarTemporizador,1000);
actualizarTemporizador();
