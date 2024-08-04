let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usser=document.querySelector("#user-score");
const compr=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["Rock","Scissors","Paper"];
    const i=Math.floor(Math.random()*3);

    return options[i];
};

const drawGame=()=>{
    console.log("Game was draw!");
    msg.textContent="Game Draw!";
    msg.style.backgroundColor="#081b31";
    

};

const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        msg.textContent=`You Won! Your ${userChoice} beats ${compChoice}.`;
        usser.textContent=userScore;
        console.log("You Win!");
        msg.style.backgroundColor="green";
    }
    else 
    {
        compScore++;
        compr.textContent=compScore;
        msg.style.backgroundColor="red";

        msg.textContent=`You Lost. ${userChoice} beat ${compChoice}.`;

        console.log("Computer Won");
    }
};
const playGame=(userChoice)=>{
    console.log("User Choice = ", userChoice);
    const compChoice=genCompChoice();
    console.log("Comp Choice = ", compChoice );

    if(userChoice===compChoice)
    {
        // draw
        drawGame();
    }
    else
    {
        let userWon=true;
        if(userChoice==="Rock")
            {
                userWon=compChoice==="Paper" ? false:true;
            }
        else if(userChoice==="Paper")
        {
            userWon= compChoice==="Scissors"? false:true;
        }
        else 
            {
                userWon= compChoice==="Rock"? false:true;
            }

            showWinner(userWon, userChoice,compChoice);
    } 
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceID=choice.getAttribute("id");
        console.log( `${choiceID} Choice was clicked`);
        playGame(choiceID); 

    });
});