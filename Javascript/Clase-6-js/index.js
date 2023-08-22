let dataPersona =[];

//Declaracion del objeto 
const addDataPersona = (firstName,lastName,edad,address,status,dni,condition=true) =>{
    let person ={
        dni,
        firstName,
        lastName,
        edad,
        address,
        status
    }
    if(condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }

}

//Funcion de agregar un registro al array
const addFormPerson = () =>{
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let edad = document.getElementById("edad");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    
    if(dataPersona.some(person => person.dni === dni.value.trim())){
        //Muestra un mesnsaje si ya existe el registro
        alert("Ya existe un registro con el mismo DNI.");
        return;
    }

    if (firstName.value === '' || lastName.value === '' || edad.value === '' || address.value === '' || status.value === '' || dni.value === '') {
        // Muestra un mensaje si hay alguna entrada vacía
        alert("Por favor completa todos los campos.");
        return;
    } 
    else{

    addDataPersona(firstName.value.toLowerCase().trim(),lastName.value.toLowerCase().trim(),edad.value.toLowerCase().trim(),address.value.toLowerCase().trim(),status.value.toLowerCase().trim(),dni.value.trim());
    firstName.value ='';
    lastName.value='';
    edad.value='';
    address.value='';
    status.value='';
    dni.value='';
    dni.focus();
    
    console.table(dataPersona);
 }
}


// Funcion de eliminar un registro por el nombre 
const eliminarPorNombre = () => {
    let name = prompt("Ingrese el nombre a eliminar: ");
    
    const index = dataPersona.length;

    dataPersona = dataPersona.filter(person => person.firstName.toLowerCase() !== name.toLowerCase());

    const indexFinal = dataPersona.length;

    if (indexFinal < index) {
        console.log(`Se eliminaron ${index - indexFinal} personas con nombre ${name}.`);
        console.table(dataPersona);
    } else {
        console.log(`No se encontró ninguna persona con nombre ${name}.`);
    }
    
    /*let index = dataPersona.findIndex(person => person.firstName.toLowerCase() === name.toLowerCase());

    if (index !== -1) {
        const eliminar = () => {
            if (index !== -1) {
            dataPersona.splice(index, 1);
            console.log(`Persona con nombre ${name} eliminada.`);
            console.table(dataPersona);
            }
        }
    } else {
        console.log(`No se encontró ninguna persona con nombre ${name}.`);
    }*/
}





