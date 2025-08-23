const quotes=[ "Believe in yourself and all that you are. 🌟",
  "Push yourself, because no one else is going to do it for you. 💪",
  "Failure is the stepping stone to success. 🚀",
  "Do something today that your future self will thank you for. 🔥",
  "Why don’t scientists trust atoms? Because they make up everything! 😂",
  "Your limitation—it’s only your imagination. ✨"];

  let quote=document.getElementById("quote")
  let quotebtn=document.getElementById("quote-btn")
  quotebtn.addEventListener("click",()=>{
 let randomIndex=Math.floor(Math.random()*quotes.length)
 quote.textContent=quotes[randomIndex]
  })