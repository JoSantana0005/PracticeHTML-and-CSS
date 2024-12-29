// Variables 
const months ={
        "01": 31,
        "02": 28,
        "03": 31,
        "04": 30,
        "05": 31,
        "06": 30,
        "07": 31,
        "08": 31,
        "09": 30,
        "10": 31,
        "11": 30,
        "12": 31,
};

const days = document.getElementById('Days');
const month = document.getElementById('Months');
const year = document.getElementById('Years');
const result_years = document.getElementById('Results--years');
const result_month = document.getElementById('Results-month');
const result_days = document.getElementById('Results--days');

let fecha = new Date();

// Function que calcula tu edad
function CalculateYear(year){
    if(year > 0 && year <= 2024){
        return 2024 - year
    }else{
        alert('Sobrepaso el año actual');
    }
}
// function para calcular tu edad e meses
function calculateMonth(month){
    if(month > 0 && month <= 12){
        return 12 - month;
    }else{
        alert('El mes tiene que estar entre el mes 1 hasta el mes 12');
    }
}
// Fucntion para calcular tu edad e dias
function calculateDays(days,month){
    if (days > 0 && days <= months[month]){
        return months[month] - days;
    }
    else{
        alert(`El mes: ${month} no tiene tales dias`);
    }
}
const calculate = document.querySelector('button');
calculate.addEventListener('click',()=>{
    try{
        result_years.textContent = CalculateYear(year.value).toString();
        result_month.textContent = calculateMonth(month.value).toString();
        result_days.textContent = calculateDays(days.value,month.value).toString();
    }
    catch(err){
        console.log(`Hubo un error ${err}`);
    }
})
