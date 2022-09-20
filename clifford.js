let a=2
let b=4

let inputEl=document.querySelector("#input-el")
let inputEl1=document.querySelector(".input-el1")
let buttonEl=document.querySelectorAll(".button-el")
inputEl.textContent+="Clifford Ombiro Mwenda"
function addition(){
    inputEl1.textContent+=a+b
}
function subtraction(){
    inputEl1.textContent+=a-b
}
function multiplication(){
    inputEl1.textContent+=a*b
}
function division(){
    inputEl1.textContent+=a/b
}
function remainder(){
    inputEl1.textContent+=a%b
}