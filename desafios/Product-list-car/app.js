
let cuenta_products = document.getElementById('Products');
let cuenta = 0;
let add_product = document.getElementsByClassName('Add--car');
let Alert__product = document.getElementById('Alert--product');
let details = '';
// funcion para aumentar los productos del carrito
function aumentarCarrito(cont){
    let result = `(${cont})`
    return result
}

// Conexion al json
const Json = fetch("./Producto.json").then(
    respuesta => {
        if (respuesta.ok) {
            console.log("Se conectó exitosamente a la información del JSON");
            return respuesta.json();
        } else {
            console.log("Hubo un problema en la conexión");
        }
    }
).then(
    data => {
        let productos = '';
        data.forEach(producto => {
            productos += `<div class="Description--product">
                <div>
                    <img src="${producto.Imagen}" alt="Logo" id="Imagen--product">
                    <div class="Add--car" data-title="${producto.Titulo}" data-price="${producto.Price__product}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                        </svg>
                        <span>Add to Cart</span>
                    </div>
                </div>
                <div class="details-product">
                    <span id="Name--product">${producto.Titulo}</span>
                    <p id="Description--product">${producto.Description}</p>
                    <span id="cash--product">$${producto.Price__product}</span>
                </div>
            </div>`;
        });

        const List__producto = document.getElementById('Product');

        if (List__producto) {
            List__producto.innerHTML = productos;
        } else {
            console.log("No existe un contenedor que se llame Product");
        }

        // Evento para agregar al carrito
        
        const addButtons = document.querySelectorAll('.Add--car');

        addButtons.forEach(button => {
            button.addEventListener('click', () => {
                cuenta++;
                const title = button.getAttribute('data-title');
                const price = button.getAttribute('data-price');
                const resultado = aumentarCarrito(cuenta);
                
                const cuenta_products = document.getElementById('Products');
                if (cuenta_products) {
                    cuenta_products.textContent = resultado;
                } else {
                    console.log("Hubo un error");
                }
                details += `<div class="Product--details">
                    <div class="details">
                        <h3 id="title">${title}</h3>
                        <div>
                            <span id="cant--product">1X</span>
                            <span id="price">$${price}</span>
                            <span id="Total"></span>
                        </div>
                    </div>
                    <div class="Delete--product">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000">
                            <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/>
                        </svg>
                    </div>
                </div>`;

                let Alert__product = document.getElementById('Alert--product');
                if (Alert__product) {
                    Alert__product.innerHTML = details + `<button id="Confirm--orden">Confirm order</button>`;
                    let Delete_product = document.querySelectorAll('.Delete--product')
                    //borrar elementos del carrito
                    Delete_product.forEach(element =>{
                        element.addEventListener('click', ()=>{
                            element.parentElement.remove()
                            cuenta--
                            if(cuenta == 0){
                                Alert__product.innerHTML = `<svg id="Car" xmlns="http://www.w3.org/2000/svg" height="105px" viewBox="0 -960 960 960" width="105px" fill="#E90"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                    <p>Your added items will appear here</p>`
                                cuenta_products.textContent = `(${cuenta})`
                                details = ''
                            }else if(cuenta > 0){
                                cuenta_products.textContent = cuenta
                            }
                        })
                    })
                    let Confirm__orden = document.getElementById('Confirm--orden');
                    //evento para abrir un dialog


                    if(Confirm__orden){
                        console.log("Si existen")
                        Confirm__orden.addEventListener('click',() =>{
                            
                        })
                    }else{
                        console.log("No existen tal boton")
                    }
                } else {
                    console.log("No existe tal contenedor");
                }
            });
        });
        console.log(details)
    }
);