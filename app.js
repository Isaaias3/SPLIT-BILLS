const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// FUNCIONES PARA OBTENER EL RESULTADO Y ESCRIBIR //

const arr = [];
const List = document.getElementById("listResult")
const Result = document.getElementById("comments")    
const nam = document.getElementById("nombre")
const mon = document.getElementById("dollar")
let newComment = document.createElement("p")

function tomoValores(){
    arr.push([nam.value, parseFloat(mon.value)])
}
function muestroUltimo() {
    let newList = document.createElement("li")
    newList.innerHTML = `<li class="list-group-item" style="background-color: #D3DEDC"> ${arr[arr.length - 1][0]} : $${arr[arr.length - 1][1]}</li>` 
    List.appendChild(newList)
}

function printComment() {
    newComment.innerHTML = `<p style="background-color: #D3DEDC; padding-left:16px;">Total: $ ${suma} <br> A cada uno le toca: $${Valores}</p>`
    List.appendChild(newComment)
}
function splitBills(Montos) {
    suma = 0;
        for (let Valor of Montos){
            suma += Valor[1]         ;
        }
        Valores = suma / (arr.length);
        return Valores, suma
}
function splitBills2(Montos) {
    suma = Montos[0][0]            ;
    Valores = suma / Montos[0][1]  ;
    return Valores, suma
}
function sumbit() {
    tomoValores()
    splitBills(arr)
    muestroUltimo()
    printComment()
}
