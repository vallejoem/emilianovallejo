


const objectPerson = {
    firstName:'',
    lastName:'',
    edad:'',
    status:''
}

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

const {name,lastName,edad,status} = objectPerson

arrayPerson.forEach((objectPerson)=>{
    console.log(`Nombre: ${objectPerson.firstName}  Apellido: ${objectPerson.lastName}  Edad: ${objectPerson.edad} Status: ${objectPerson.status} `);
});