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
    divRow.id=texto;
    elementoDiv.id="elementId";
    elementoDiv1.id="elementId1";
    btn.id="btnId";
    divRow.appendChild(elementoDiv);
    divRow.appendChild(elementoDiv1);
    div1.appendChild(divRow);
    divRow.setAttribute("class", "row justify-content-center ");
    elementoDiv.appendChild(node);
    divRow.appendChild(elementoDiv);
    elementoDiv.setAttribute("class", "bg-primary col-4 text-white text-center py-1 border-end border-white items");
    elementoDiv1.appendChild(btn);
    divRow.appendChild(elementoDiv1);
    elementoDiv1.setAttribute("class", "bg-primary col-4 text-center py-1 items");
    btn.setAttribute("class", "bg-dark text-white rounded px-5 py-1");
    btn.addEventListener("click", function(){
        const deleteElement = document.getElementById(texto);
        div1.removeChild(deleteElement);
    });
    const divAll = document.querySelectorAll('.items');
    divAll[2].setAttribute('class', 'bg-primary-subtle col-4 text-primary-emphasis text-center py-1 border-end border-white items');
    divAll[3].setAttribute('class', 'bg-primary-subtle col-4 text-primary-emphasis text-center py-1 border-end border-white items');
    divAll[4].setAttribute('class', 'bg-primary-border-subtle col-4 text-primary-emphasis text-center py-1 border-end border-white items');
    divAll[5].setAttribute('class', 'bg-primary-border-subtle col-4 text-primary-emphasis text-center py-1 border-end border-white items');
  console.log(elementoDiv.getAttribute('class'));
});


