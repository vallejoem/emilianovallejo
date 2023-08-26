//array de objetos de la compra
let dataCompra = JSON.parse(localStorage.getItem("pedido")) || [];
// funcion que actualiza el nro de articulo que se va comprando
const updateCartItemCount = () => {
    let cartItemCount = document.getElementById("cartItemCount");
    cartItemCount.textContent = dataCompra.length;
}
//agrega los valores del nombre del producto y el precio a cada objeto
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

//remueve d-none de la clase del boton limpiar carrito
const addClassHidden = ()=>{
    let boton = document.getElementById("btnCleanCart").classList;
    boton.remove("d-none");
}
//limpia del localstorage los valores del array pedido
const cleanCart = ()=>{
    localStorage.removeItem("pedido");
    location.reload();
}

// login
//registrar usuario

let dataPersona = JSON.parse(localStorage.getItem("usuarios")) || [];

const addDataPersona = (firstName, lastName, user, pass) => {
                let person = {
                    firstName,
                    lastName,
                    user,
                    pass 
        }
            dataPersona.push(person);
            localStorage.setItem("usuarios", JSON.stringify(dataPersona));
            alert("Usuario registrado correctamente");
        
    };

    const ocultar = (elementId)=>{
        const element = document.getElementById(elementId);
        if(element){
            element.classList.add("d-none");
        }
    }
    
    const mostrar = (elementId)=>{
        const element = document.getElementById(elementId);
        if(element){
            element.classList.remove("d-none");
        }
    }

    const enableButton = (elementId)=>{
        const elementos = document.querySelectorAll(elementId);
        elementos.forEach(elemento => {
            elemento.classList.remove("disabled");
        });
    }

    const disableButton = (elementId)=>{
        const elementos = document.querySelectorAll(elementId);
        elementos.forEach(elemento => {
            elemento.classList.add("d-none");
        });
    }

    const filterUser = (user) => {
        return dataPersona.find((person) => {
            return person.user.toLowerCase() === user;
        });
    }

const addFormPerson = () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    console.log(user);
    
    if (filterUser(user.value)){
        alert("El usuario ya esta registrado");
    }
    else{
    addDataPersona(firstName.value, lastName.value, user.value, pass.value);
    document.getElementById("registerForm").reset();
    }
}

//loguearse

const filterDataPerson = (user, pass) => {
    return dataPersona.find((person) => {
        return person.user.toLowerCase() === user && person.pass.toLowerCase() === pass;
    });
}

const check = () => {
    let checkUser = document.getElementById("username").value.trim().toLowerCase();
    let checkPass = document.getElementById("password").value.trim().toLowerCase();
    
    let filterUser = filterDataPerson(checkUser, checkPass);

    if(filterUser){
        ocultar("btnRegister");// Oculta el boton para registrarse
        mostrar("btnLogOut"); //mustra el boton de logout
        mostrar("btnLog"); // muestra el boton de login
        alert(`Bienvenido ${filterUser.firstName} a tu carrito de compras`);
        document.getElementById("btnLog").innerHTML = filterUser.firstName; // Añade el nombre al boton de login
        enableButton(".btnBuy"); //Habilita los boton para agregar productos
        localStorage.setItem("status", "1");
        localStorage.setItem("name", filterUser.firstName);
    }
    else{
        alert("Usuario o contraseña invalido") ;
    }
}

const logout = ()=>{
        //Remueve el status y name 
        localStorage.removeItem("status");
        localStorage.removeItem("name");
        ocultar("btnLogOut"); // Oculta botón de logout
        mostrar("btnRegister"); // Muestra botón de registro
        disableButton(".btnBuy"); // Deshabilita botones de compra
        document.getElementById("btnLog").innerHTML = "Log In";
        location.reload();
    
}

const verificarStatus = ()=>{
    if(localStorage.getItem("status")==1){
        ocultar("btnRegister");
        mostrar("btnLog");
        mostrar("btnLogOut");
        enableButton(".btnBuy");
        document.getElementById("btnLog").innerHTML = localStorage.getItem("name");
    }
}
verificarStatus();