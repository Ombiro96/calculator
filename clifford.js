let a=2
let b=4

let inputEl=document.querySelector("#input-el")
let inputEl1=document.querySelector("#input-el1")
inputEl.textContent+="Clifford Ombiro Mwenda"
function equals(){
    addition()
    subtraction()
    division()
    multiplication()
}
function addition(){
    inputEl1.textContent=a+"+"+b+"="+(a+b)
}
function subtraction(){
    inputEl1.textContent=a+"-"+b+"="+(a-b)
}
function multiplication(){
    inputEl1.textContent=a+"*"+b+"="+(a*b)
}
function division(){
    inputEl1.textContent=a+"/"+b+"="+(a/b)
}