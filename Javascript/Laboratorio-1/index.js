

// Declaro objeto
const objectPerson = {
    firstName:'',
    lastName:'',
    edad:'',
    status:''
}

//Declaro array de objetos con datos
const arrayPerson=[
    {
        firstName: "Emiliano",
        lastName:"Vallejo",
        edad: 43,
        status: true,
    
    },
    {
        firstName: "Maria",
        lastName:"Gomez",
        edad: 26,
        status: false,
    
    },
    {
        firstName: "Romina",
        lastName:"Perez",
        edad: 33,
        status: false,
    
    }
];


// Desestructuro objeto 
const {name,lastName,edad,status} = objectPerson

// Recorro el array 
arrayPerson.forEach((objectPerson)=>{
    console.log(`Nombre: ${objectPerson.firstName}  Apellido: ${objectPerson.lastName}  Edad: ${objectPerson.edad} Status: ${objectPerson.status} `);
});