//array de objetos de la compra
let dataCompra = JSON.parse(localStorage.getItem("pedido")) || [];
// funcion que actualiza el nro de articulo que se va comprando
const updateCartItemCount = () => {
    let cartItemCount = document.getElementById("cartItemCount");
    cartItemCount.textContent = dataCompra.length;
}
//agrega los datos del nombre del producto y el precio a cada objeto
const addDataPedido = (productName, productPrice) => {
                let compra = {
                    productName,
                    productPrice
                    }
        dataCompra.push(compra);
        addClassHidden();
        localStorage.setItem("pedido", JSON.stringify(dataCompra));
        updateCartItemCount();
    };
// funcion captura los valores para agregar a los campos del objeto
/*const addProduct = () => {
    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");
    addDataPedido(productName.value, productPrice.value);

}*/
//remueve d-none de la clase del boton limpiar carrito
const addClassHidden = ()=>{
    let boton = document.getElementById("btnCleanCart").classList;
    boton.remove("d-none");

}
//limpia del localstorage los valores del array
const cleanCart = ()=>{
    localStorage.clear(dataCompra);
    location.reload();
}
