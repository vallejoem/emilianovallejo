let dataPersona = JSON.parse(localStorage.getItem("usuarios"));

const addDataPersona = (firstName, lastName, user, pass) => {
                let person = {
                    firstName,
                    lastName,
                    user,
                    pass: hash 
        }
        dataPersona.push(person);
        localStorage.setItem("usuarios", JSON.stringify(dataPersona));

    };

const addFormPerson = () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    addDataPersona(firstName.value, lastName.value, user.value, pass.value);
    document.getElementById("formRegistry").reset();
}

let arrayusuarios = JSON.parse(localStorage.getItem("usuarios"));

const check = () => {
    let checkUser = document.getElementById("verifyUser").value.trim().toLowerCase();
    let checkPass = document.getElementById("verifyPass").value.trim().toLowerCase();
    
    let filterUser = filteDataPerson(checkUser, checkPass);

    if(filterUser){
        ocultar("logContainer");
        mostrar("welcome");
        mensaje(`Bienvenido ${filterUser.firstName}`);
    }
    else{
        mensaje("Usuario o contraseña invalido") ;
    }

    
}

const ocultar = (elementId)=>{
    const element = document.getElementById(elementId);
    if(element){
        element.setAttribute("class", "d-none");
    }
}

const mostrar = (elementId)=>{
    const element = document.getElementById(elementId);
    if(element){
        element.setAttribute("class", "col-6 bg-secondary text-center");
    }
}

const mensaje = (texto) => {
    const userFindElement = document.getElementById("userFind");
    if(userFindElement){
        userFindElement.textContent = texto;
    }
}

const filteDataPerson = (user, pass) => {
    return dataPersona.find((person) => {
        return person.user.toLowerCase() === user && person.pass.toLowerCase() === pass;
    });
}