<<<<<<< HEAD
const form = document.getElementById('numeros');

form.addEventListener("submit" , function(e){
    e.preventDefault();
    verificar();
});

function verificar(){
    let numA = document.getElementById('numA');
    let num1 = Number(numA.value);
    let numB = document.getElementById('numB');
    let num2 = Number(numB.value);
    let resp = document.getElementById('res')

    if (num1 > num2){
        alert('O valor é INVÁLIDO')
    } else{
        alert('O valor é VÁLIDO')
=======
const form = document.getElementById('numeros');

form.addEventListener("submit" , function(e){
    e.preventDefault();
    verificar();
});

function verificar(){
    let numA = document.getElementById('numA');
    let num1 = Number(numA.value);
    let numB = document.getElementById('numB');
    let num2 = Number(numB.value);
    let resp = document.getElementById('res')

    if (num1 > num2){
        alert('O valor é INVÁLIDO')
    } else{
        alert('O valor é VÁLIDO')
>>>>>>> 108f17d5a59e21dc02b566f7ba7f9064e34cff6b
}};