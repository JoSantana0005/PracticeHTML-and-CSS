// funcion para aumentar los productos del carrito
let cuenta_products = document.getElementById('Products');
function aumentarCarrito(cont){
    let result = `(${cont})`
    return result
}

// Conexion al json
const Json = fetch("./Producto.json").then(
    respuesta =>{
        if(respuesta.ok){
            console.log("Se conecto exitosamente a la informacion del json")
            return respuesta.json()
        }else{
            console.log("Hubon un problema en la conexion")
        }
    }
).then(
    
    data =>{
        let productos = '';
        data.forEach(producto => {
            productos += `<div class="Description--product">
        <div>
            <img src="${producto.Imagen}" alt="Logo" id="Imagen--product">
            <div class="Add--car" id= "Add--car">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f40"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                <span>Add to Cart</span>
            </div>
        </div>
        <div class="details-product">
            <span id="Name--product">${producto.Titulo}</span>
            <p id="Description--product">${producto.Description}</p>
            <span id="cash--product">$${producto.Price__product}</span>
        </div>
    </div>`
        });
    
        const List__producto = document.getElementById('Product');
    
    if(List__producto){
        List__producto.innerHTML = productos;
    }else{
        console.log("No existen un contenedor que se llame product")
    }
    
    // Evento para agregar al carrito

    let cuenta = 0;
    
    let add_product = document.getElementsByClassName('Add--car');
    Array.from(add_product).forEach(element =>{
        element.addEventListener('click',()=>{
            cuenta++;
            let resultado = aumentarCarrito(cuenta)
            if(cuenta_products){
                cuenta_products.textContent = resultado
                
            }else{
                console.log("Hubo un error")
            }

        })
    })
}
)