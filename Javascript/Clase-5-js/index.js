
const prompt = require("prompt-sync")(({sigint:true}));

let dataPersona =[];


const addDataPersona = (firstName,lastName,birthday,address,status,condition) =>{
    let person ={
        firstName,
        lastName,
        birthday,
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

addDataPersona("jorge","gomez",25,"MDP",4,true);
addDataPersona("juan","garcia",18,"CABA",2,true);
addDataPersona("ramiro","perez",13,"MDP",6,true);
addDataPersona("joaquin","fernandez",11,"CABA",1,true);
addDataPersona("rocio","moreno",18,"MDP",0,true);
addDataPersona("laura","gonzales",36,"CABA",9,true);
addDataPersona("sol","suarez",21,"MDZ",5,true);
addDataPersona("belen","martinez",19,"MDZ",1,true);
addDataPersona("maria","quintero",8,"CABA",4,true);
addDataPersona("analia","paez",16,"MDP",3,true);

console.table(dataPersona);

let buscar = prompt("Buscar: ");

let PersonaFilter = dataPersona.filter((element, filtro)=>{

    return (element.firstName == buscar);
});

console.table(PersonaFilter);

const ages = dataPersona.map((person) => person.birthday);

let suma=0;
for(i=0 ; i<dataPersona.length ; i++){
    suma += ages[i];
}

let promedio = suma / dataPersona.length;

console.log("El promedio de edades es: " + promedio);
