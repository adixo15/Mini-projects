const randomColor=function(){
    hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intvalid;
const startChangingColor=function(){
    if(!intvalid){
        intvalid=setInterval(changeBgcolor,1000)
    }
    function changeBgcolor(){
        document.body.style.backgroundColor=randomColor()
    }
};
const stopbgcolor=function(){
    clearInterval(intvalid)
    intvalid=null;
};
document.getElementById("start-btn").addEventListener("click",startChangingColor);
document.getElementById("stop-btn").addEventListener("click",stopbgcolor);