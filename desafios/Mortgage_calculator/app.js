// evento para borrar el contenido de los inputs
document.getElementById('Borrar').addEventListener('click',()=>{
    
    document.getElementById('Amount').value = '';
    document.getElementById('Term').value = '';
    document.getElementById('Interest--rate').value = '';
    document.getElementById('content--result').innerHTML = `<div>
                        <img src="../../query_stats_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="Logo">
                        <h3>Results shown here</h3>
                    </div>
                    <div>
                        <p>Complete the form and click "calculate repayments" to
                            see what your monthyl repayments would be
                        </p>
                    </div>`
    
    if(document.getElementById('Interest--only').checked && document.getElementById('Repayment').checked){
        document.getElementById('Interest--only').checked = false;
        document.getElementById('Repayment').checked = false;
    
    }else if(document.getElementById('Interest--only').checked){
        document.getElementById('Interest--only').checked = false;
    
    }else if(document.getElementById('Repayment').checked){
        document.getElementById('Repayment').checked = false;
    
    }else{
        console.log('No hay nada que borrar');
    }
})
// Funcion para calcular la hipoteca solo intereses
let calculateMortgage = (amount,interestRate) => {
    let Interest = interestRate / 100;
    let mothlyInterest = Interest / 12;
    let result;
    result = amount * mothlyInterest
    return result;
}
// funcion para calcular la hipoteca con intereses y capital
let calculateMortgageRepayment = (amount, term, interestRate) => {
    let Interest = interestRate / 100;
    let mothlyInterest = Interest / 12;
    let result;
    result = amount * (mothlyInterest / (1 - Math.pow((1 + mothlyInterest), -term)));
    console.log(result);
    return result;
}
let calculate
// Evento para calcular la hipoteca
let Repayment = document.getElementById('Repayment');
let InterestOnly = document.getElementById('Interest--only');
let Amount = document.getElementById('Amount');
let Term = document.getElementById('Term');
let InterestRate = document.getElementById('Interest--rate');

document.getElementsByTagName('button')[0].addEventListener('click',(event)=>{
    event.preventDefault();
    const amount = parseInt(document.getElementById('Amount').value);
    const term = parseInt(document.getElementById('Term').value);
    const interestRate = parseFloat(document.getElementById('Interest--rate').value);

    if(Amount.value === '' || Term.value === '' || InterestRate.value === ''){
        alert('Please complete all fields');
        return;
    }

    if(Repayment.checked){
        document.getElementById('content--result').innerHTML = '';
        let Monthly = calculateMortgage(amount, term, interestRate);
        let Total = calculateMortgageRepayment(amount, term, interestRate);
        document.getElementById('content--result').innerHTML = `<div class="results">
                        <h2>Your results</h2>
                        <p>Your results are shown below based on the information
                            you provided.To adjust the results,edit the form and click 
                            "Calculate Repayments" again
                        </p>
                    </div>
                    <div class="result">
                        <div>
                            <h3>Monthly Repayment</h3>
                            <p id="Monthly--repayment">${Monthly.toFixed(2)}</p>
                        </div>
                        <hr>
                        <div>
                            <h3>Total Repayment</h3>
                            <p id="Total--repayment">${Total.toFixed(2)}</p>
                        </div>
                    </div>`;
    }else if(InterestOnly.checked){
        document.getElementById('content--result').innerHTML = '';
        let result = calculateMortgage(amount, interestRate);
        document.getElementById('content--result').innerHTML = `<div class="results">
                        <h2>Your results</h2>
                        <p>Your results are shown below based on the information
                            you provided.To adjust the results,edit the form and click 
                            "Calculate Repayments" again
                        </p>
                    </div>
                    <div class="result">
                        <div>
                            <h3>Monthly Repayment</h3>
                            <p id="Monthly--repayment">${result.toFixed(2)}</p>
                        </div>
                    </div>`;
    }
})

