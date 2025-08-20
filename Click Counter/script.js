let  count=0
resetbtn=document.querySelector("#reset-btn")

body=document.querySelector('body')
console.log(body);
button=document.querySelector('.button')
console.log(button);
const clicks=document.querySelector('#click-count');
console.log(clicks);
const noofCount=(clicked)=>{
    if(clicked){
        count++
      clicks.innerText=count;
    }
}
button.addEventListener("click",noofCount)
resetbtn.addEventListener("click",()=>{
    count=0
    clicks.innerText=count;
})
