const precio = 400000

precioSpan = document.querySelector(".precio-inicial"); //Creo variable y hago referencia al elemento con la clase precio-inicial*/
precioSpan.innerHTML = precio /*almacena la referencia a este elemento del DOM*/

/*Función para añadir unidades*/
function incrementQuantity() {
    let quantitySpan = document.querySelector(".cantidad"); //Creo variable "quantitySpan" que hace referencia (usando querySelector) al valor del elemento de clase ".cantidad". 
    let currentQuantity = parseInt(quantitySpan.innerHTML); //Creo variable "currentQuantity" que accede al contenido del elemento referenciado por "quantitySpan" con ".innerHTML" y lo convierte en numero entero.
    quantitySpan.innerHTML = currentQuantity + 1; //Le suma 1 al valor de la valiable "currentQuantity"

    // Llama a la función para actualizar el total (si es necesario)
    updateTotal();
}

/*Función para restar unidades*/
function decrementQuantity() {
    quantitySpan = document.querySelector(".cantidad");
    currentQuantity = parseInt(quantitySpan.innerHTML);
    if (currentQuantity > 0) { //Si la cantidad actual es mayor a 0
        quantitySpan.innerHTML = currentQuantity - 1; //Le resta 1 al valor de la valiable "currentQuantity"
    }

    // Llamo a la función para actualizar el total (si es necesario)
    updateTotal();
}

/*Función para calcular el total a pagar */
function updateTotal() {
    const quantity = parseInt(document.querySelector(".cantidad").innerHTML);
    const price = 400000;
    const totalPrice = quantity * price; 
    document.querySelector(".valor-total").innerHTML = totalPrice;
}
