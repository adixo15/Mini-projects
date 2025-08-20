let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const genCompchoice=()=>{
    const options=["scissors","rock","paper"]
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
};
const showWinner=(userWin)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        console.log("You win")
        msg.innerText=("You Win!")
        msg.style.backgroundColor="rgb(144, 238, 144)"
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        console.log("You Lose")
        msg.innerText=("You Lose")
        msg.style.backgroundColor="rgba(231, 145, 153, 1)";

    }
}
const drawGame=()=>{
    console.log("Game is Draw")
    msg.innerText="Game Drawn"
    msg.style.backgroundColor="rgb(221, 160, 221)";
    

}
const playGame=(userChoice)=>{
    console.log("User-choice", userChoice)
    const compChoice=genCompchoice();
    console.log("computer-choice",compChoice );
    if(userChoice===compChoice){
       drawGame()
    }
    else{
        let userWin=true
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        } else if (userChoice==="paper"){
          userWin=compChoice==="scissors"? true:false;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})