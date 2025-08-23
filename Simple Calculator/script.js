const display=document.getElementById("display")
const buttons=document.querySelectorAll(".btn")
const equal=document.getElementById("equals")
const clear=document.getElementById("clear")
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        display.value+=button.textContent;
    })
})
clear.addEventListener("click",()=>{
    display.value=''
})
equal.addEventListener("click",()=>{
    try{
        display.value=eval(display.value);
    }catch{
        display.value="Syntax Error"
    }
})