let dataCompra = JSON.parse(localStorage.getItem("pedido")) || [];

const updateCartItemCount = () => {
    let cartItemCount = document.getElementById("cartItemCount");
    cartItemCount.textContent = dataCompra.length;
};

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

const addProduct = () => {
    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");
    addDataPedido(productName.value, productPrice.value);

}

const addClassHidden = ()=>{
    let boton = document.getElementById("btnCleanCart").classList;
    boton.remove("d-none");

}

const cleanCart = ()=>{
    localStorage.clear(dataCompra);
    location.reload();
}
