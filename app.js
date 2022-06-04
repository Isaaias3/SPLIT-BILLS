const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// FUNCIONES PARA OBTENER EL RESULTADO Y ESCRIBIR //

const arr = [];
const List = document.getElementById("listResult")
const Result = document.getElementById("comments")
let newComment = document.createElement("p")

function tomoValores(){
    let names = document.getElementById("nombre").value
    let value = document.getElementById("dollar").value
    arr.push([names, parseFloat(value)])
    console.log(typeof(names))
}
function printList() {
    let newList = document.createElement("li")
    for (i of arr) {
        newList.innerHTML = '<li class="list-group-item" style="background-color: #D3DEDC">' + i[0] + ': $' + i[1] + '</li>' 
        List.appendChild(newList)
    }
}
function printComment() {
    newComment.innerHTML = '<p style="background-color: #D3DEDC; padding-left:16px;">Total: $' + suma + '<br> A cada uno le toca: $' + Valores +'</p>'
    List.appendChild(newComment)
}
function splitBills(Montos) {
    suma = 0;
        for (let Valor of Montos){
            suma = suma + Valor[1]  ;
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
    printList()
    printComment()
}