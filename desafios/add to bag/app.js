let buttons = Array.from(document.querySelectorAll('.opcion button'));
let currentlySelectedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentlySelectedButton) {
      currentlySelectedButton.style = "";
    }
    button.style = "background-color: #000; color: #fff"; 
    currentlySelectedButton = button; 
  });
});
let index = 0
let imagenes = Array.from(document.querySelectorAll('.Imagen img'))
let imagen_main = document.querySelector('.Imagen__main img')
imagenes.forEach(imagen =>{
    imagen.addEventListener('click',(e)=>{
        index = e.target.id;
        console.log(index)
        imagen_main.src = `${index}.jpeg`
    })
})
let lista = [
    {
        "Talla": null,
        "Camisa": "Polo"
    }
]
let submit = document.querySelector('.Buttom');
submit.addEventListener('click',()=>{
    if(currentlySelectedButton){
        alert("Se envio la solicitud")
        lista.forEach(element =>{
            if(element.Talla == null){
                element.Talla = document.querySelector('.opcion button').textContent
            }
        console.log(lista)
        })
    }else{
        alert("Tiene que elegir la talla de la camisa")
    }
})
