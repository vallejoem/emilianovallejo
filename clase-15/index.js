const div1 = document.querySelector("#container");

const agregar = document.getElementById("agrega");

agregar.addEventListener("click", function(){
    const texto = document.getElementById("texto").value;
    const divRow = document.createElement("div");
    const elementoDiv = document.createElement("div");
    const elementoDiv1 = document.createElement("div");
    const btn = document.createElement("button");
    btn.innerHTML="Eliminar";
    const node =  document.createTextNode(texto);
    //const parrafo = document.createElement("p");
    //elementoDiv.textContent="texto";
    divRow.id="divrow";
    elementoDiv.id="elementId";
    elementoDiv1.id="elementId1";
    btn.id="btnId";
    //parrafo.id="parrafoid";
    //parrafo.textContent=texto;
    //parrafo.appendChild("parrafo");
    //div1.appendChild("texto");
    //div1.after("elementoDiv");
    divRow.appendChild(elementoDiv, elementoDiv1);
    document.body.appendChild(divRow);
    divRow.setAttribute("class", "row");
    elementoDiv.appendChild(node);
    divRow.appendChild(elementoDiv);
    elementoDiv.setAttribute("class", "bg-primary col-6 text-white text-center py-1 ");
    elementoDiv1.appendChild(btn);
    divRow.appendChild(elementoDiv1);
    elementoDiv1.setAttribute("class", "bg-primary col-6 text-center py-1");
    btn.setAttribute("class", "bg-dark text-white rounded px-3 py-1");
});




//const elementoDiv = document.createElement("div");
//elementoDiv.textContent="Agregando Items";
//elementoDiv.classList.add("classone");

