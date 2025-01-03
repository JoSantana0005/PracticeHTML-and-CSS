// Variables
let Height = document.getElementById('Height');
let Weight = document.getElementById('Weight');
let metric = document.getElementById('Metrical');
let imperial = document.getElementById('Imperial');
let result = document.getElementById('Result');
// Function que calcula el peso corporal en metrica
function CalculateMetric(weight,height){
    let metros = height / 100;
    console.log(metros)
    return weight / Math.pow(metros,2);
}
// Function que calcula el peso corporal en imperial
function CalculateImperial(weight,height){
    let pulga = height / 2.54;
    let libras = weight * 2.20;
    let resultMetrica = libras / Math.pow(pulga,2);
    let resultFinale = resultMetrica * 703;
    console.log(resultFinale);
    return resultFinale;
}
// Function para poner la informacion anterior
function ActaulizarContent(){
    result.innerHTML = `<span>Welcome!</span>
                        <p>Enter your height and weight and you´ll see your BMI result here</p>`
}
// Function que calcula la masa corporal de la persona
function BodyMass(){
    if(metric.checked){
        metric.addEventListener('change',()=>{
            if(imperial){
                imperial.checked = false;
            }else{
                console.log("No existen");
            }
        })
        if(Height.value !== '' && Weight.value !== ''){
            let resultMetrica = CalculateMetric(Weight.value,Height.value);
            result.innerHTML = '';
            if(resultMetrica <= 18.5){
                result.innerHTML = `<p>Your BMI is ${resultMetrica.toFixed(2)} and is underweight 18,5</p>`;
            }
            
            else if(resultMetrica >= 18.5 && resultMetrica <= 24.5){
                result.innerHTML = `<p>Your BMI is ${resultMetrica.toFixed(2)} and has a normal weight since it is 18.5- 24.5</p>`;
            }
            
            else if(resultMetrica >= 25 && resultMetrica <= 29.9){
                result.innerHTML = `<p>Your BMI is ${resultMetrica.toFixed(2)} and he is overweight since he is 25 - 29.9</p>`;
            }
            
            else{
                result.innerHTML = `<p>Your BMI is ${resultMetrica.toFixed(2)} and is obese since he is 30 or greater in weight</p>`;
            }
        }else{
            ActaulizarContent();
        }
    }else if(imperial.checked){
        imperial.addEventListener('change',()=>{
            if(metric){
                metric.checked = false
            }else{
                console.log("No existen");
            }
        })
        if(Height.value !== '' && Weight.value !== ''){
            let resultImperial = CalculateImperial(Weight.value,Height.value);
            result.innerHTML = '';
            if(resultImperial <= 18.5){
                result.innerHTML = `<p>Your BMI is ${resultImperial.toFixed(2)} and is underweight 18,5</p>`;
            }
            
            else if(resultImperial >= 18.5 && resultImperial <= 24.5){
                result.innerHTML = `<p>Your BMI is ${resultImperial.toFixed(2)} and has a normal weight since it is 18.5- 24.5</p>`;
            }
            
            else if(resultImperial >= 25 && resultImperial <= 29.9){
                result.innerHTML = `<p>Your BMI is ${resultImperial.toFixed(2)} and he is overweight since he is 25 - 29.9</p>`;
            }
            
            else{
                result.innerHTML = `<p>Your BMI is ${resultImperial.toFixed(2)} and is obese since he is 30 or greater in weight</p>`;
            }
        }else{
            ActaulizarContent();
        }
    }else{
        console.log("No esta marcando ningun checkbox");
    }
}
Height.addEventListener('input',BodyMass)
Weight.addEventListener('input',BodyMass)