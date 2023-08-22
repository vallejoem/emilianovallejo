let dataPersona = [];
const addDataPersona = (firstName, lastName, birthday, address, status, dni, condition = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }

}

const addFormPerson = () => {
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if (findDniOne(dni.value) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        dni.focus();
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos Guardados");
    }
    else {
        dni.focus();
        messageAlert("ERROR, EL DNI YA SE ENCUENTRA REGISTRADO", "error");
    }
}



const listPerson = (dataArray) => {
    let list = '';
    if (dataArray.length > 0) {
        dataArray.forEach((person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td><button type="button" onclick="deleteRegisterPerson(${person.dni})" class="btn btn-danger"><i class="fa-solid fa-trash-can fa-xl"></i></button> 
                    <button type="button" onclick="modifyDataPerson(${person.dni})" class="btn btn-danger"><i class="fa-solid fa-pen-to-square fa-xl"></i></button></td>
                    </tr>`;
        });
    }
    else {
        list = `<tr>
                    <td class="text-center" colspan="6">NO HAY REGISTRO FILTRADOS</td>
                </tr>`;
    }
    return list;
}

const findDniOne = (dni) => {
    return dataPersona.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}

const searchInput = () => {
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    let filterData = filteDataPerson(search);

    document.getElementById("listPerson").innerHTML = listPerson(filterData);

}

const filteDataPerson = (search) => {
    return dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
}

const deleteRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
}

const messageAlert = (title, icon = 'success') => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}

//actualiza los datos en esa posicion del array
const updatePersonData = (newData) => {
    const updatePersonData = (dni, newData) => {
        let position = findDniOne(dni);
        if (position !== -1) {
            dataPersona[position] = { ...dataPersona[position], ...newData };
        }
    }
}
const modifyDataPerson = (dni , dataArray)=>{
    let person = dataPersona[findDniOne(dni)];
    let position = findDniOne(dni);
    console.log(person);
    console.log(position);
    //Muestra los valores del array en cada campo del formulario para ser editado
    document.getElementById("fistName").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("birthday").value = person.birthday;
    document.getElementById("address").value = person.address;
    document.getElementById("status").value = person.status;
    document.getElementById("dni").value = person.dni;
    //reemplaza el boton de agregar con el boton editar
    const contenedor = document.querySelector(".boton");
    const btn_editar = document.createElement("button"); 
    const btn_agregar = document.querySelector(".btn");
    btn_editar.innerHTML ="Editar";
    btn_editar.setAttribute("class" , "btn btn-primary");
    btn_editar.setAttribute("type" , "submit");
    btn_editar.id = "editButton";
    contenedor.replaceChild(btn_editar, btn_agregar);
    btn_editar.addEventListener("click", () => {
        const newData = {
            dni: document.getElementById("dni"),
            firstName: document.getElementById("fistName").value,
            lastName: document.getElementById("lastName").value,
            birthday: document.getElementById("birthday").value,
            address: document.getElementById("address").value,
            status: document.getElementById("status").value
        };

        updatePersonData(position,newData);

         //actualiza la lista de personas y muestra una alerta
         document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
         messageAlert("Datos Actualizados", "info");

    });
    
    


}

