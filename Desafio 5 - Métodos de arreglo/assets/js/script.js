//Constantes

const idTareas = document.querySelector("#id-tareas"); //Corresponde a la ul de ID
const listaDeTareas = document.querySelector("#t-body"); // Corresponde a la ul de tarea
const tareasInput = document.querySelector("#nueva-tarea"); //Corresponde al Input donde se anotan las tareas
const btnAgregarTarea = document.querySelector("#agregar-tarea"); //Corresponde al botón para agregar las tareas
const tareasRealizadas = document.querySelector("#total-realizadas"); //Corresponde al span del total de tareas realizadas
const tareasTotal = document.querySelector("#total-tareas"); //Corresponde al span del total de tareas


const tareaBorrar = document.querySelector("#tareaborrar");
const tareaRealizada = document.querySelector("#tareacheck");

const tareas = [];

//Arreglos

btnAgregarTarea.addEventListener("click", () => {
 const nuevaTarea = { id: Date.now(), nombre: tareasInput.value, completado: false };
 tareas.push(nuevaTarea);

 tareasInput.value = "";

 render();
});

// TODO: Pasar a Arrow
function render() {
 let html = "";
 for (const tarea of tareas) {
  html += `
    <tr>
      <td>${tarea.id}</td>
      <td>${tarea.nombre}</td>
      <td>
        <input type="checkbox" ${tarea.completado ? "checked" : "" } onchange="realizadas(${tarea.id})">
      </td>
      <td>
        <button id="tareaborrar" onclick="borrar(${tarea.id})">x</button> 
      </td>
      
    </tr>
  `;
 }

  listaDeTareas.innerHTML = html;
  tareasTotal.innerHTML = tareas.length
  tareasRealizadas.innerHTML = tareas.filter(({ completado }) => completado).length
}

//TODO: Modificar a algo similar a function realizadas
function borrar(id) {
 const index = tareas.findIndex(a => a.id == id);

 tareas.splice(index, 1);
 render();
}

function realizadas(id){
  const index = tareas.findIndex((tarea) => tarea.id == id)
  tareas[index].completado = !tareas[index].completado

  render();
}


function sumar(tareaRealizada) {
 tareaRealizada.addEventListener("change", () => {
  tareasRealizadas.innerHTML = +tareasRealizadas.innerHTML + 1;
 });
}
