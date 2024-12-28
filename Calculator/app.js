const result = document.getElementsByClassName('Result--display')[0];
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        if(button.id == 'AC'){
            result.textContent = '';
        }else if(button.id == 'CE'){
            result.textContent = result.textContent.slice(0,-1);
        
        }else if(button.id == '='){
            try{
                result.textContent = eval(result.textContent);
            }catch{
                result.textContent = 'Error';
            }
        }else if(button.id == '%'){
            result.textContent = eval(result.textContent)/100;
        }else{
            result.textContent += button.textContent;
        }
    })
})