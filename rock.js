let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const computerscorepara=document.querySelector("#computerscore");
const gencomputerchoice=()=>{
    const options=["rock","paper","scisoor"];
    const randomindex=Math.floor(Math.random() *3);
    return options[randomindex];
 }
 const showwinner=(userwin,userchoice,computerchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("you win");
    msg.innerText=`you win! your ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor="green";
}
else{
    computerscore++;
    computerscorepara.innerText=computerscore;
    console.log("you lose");
 msg.innerText=`you lost! ${computerchoice} beats ${userchoice}`;
 msg.style.backgroundColor="red";
}

 }
 const drawgame=()=>{
    console.log("the game was draw");
    msg.innerText="game was draw .play again"; 
    msg.style.backgroundColor="#081b31"
 }
 const playgame=(userchoice)=>{
console.log("user choice=",userchoice);
const computerchoice=gencomputerchoice();
console.log("computer choice= ",computerchoice);
if(userchoice===computerchoice){
    drawgame();

}
else{
    let userwin=true;
    if(userchoice==="rock"){
       userwin= computerchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin= computerchoice==="scissor"? false : true ;
    }
    else{
        userwin= computerchoice==="rock" ? false : true ;
    }
    showwinner(userwin,userchoice,computerchoice);
}
 }
 
 choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
playgame(userchoice);
});
 });

 
