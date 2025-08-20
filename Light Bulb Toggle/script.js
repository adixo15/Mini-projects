const bulb=document.getElementById("bulb")
const togglebtn=document.getElementById("toggle-btn")
const darkmode=document.getElementById("darkmode")
isOn=false
togglebtn.addEventListener("click",()=>{
    if(isOn){
        bulb.src="https://www.w3schools.com/js/pic_bulboff.gif";
        togglebtn.textContent="Turn On"
        isOn=false;
    }
    else{
        bulb.src="https://www.w3schools.com/js/pic_bulbon.gif";
        togglebtn.textContent="Turn Off"
        isOn=true;
    }
})
darkmode.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
    darkmode.textContent = "Light Mode";
    darkmode.style.backgroundColor="white"
    darkmode.style.color="black"
  } else {
    darkmode.textContent = "Dark Mode";
    darkmode.style.backgroundColor="rgb(27, 16, 16)"
    darkmode.style.color="white"
    
  }
    
})