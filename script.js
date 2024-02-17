let container=document.querySelector(".quiz-container");
let qu=document.querySelector(".question-box");
let optionContainer=document.querySelector(".option-container")
let start=document.querySelector("#start");
let next=document.querySelector(".next");
let scoreCard=document.querySelector(".score");
let displayAlert=document.querySelector(".display-alert")



let currentIndex=0;
let score = 0;
let quizOver = false;
const showQuestion = () => {
  let currentQuestion=questions[currentIndex];
  qu.innerHTML=currentQuestion.question;
optionContainer.textContent='';
  for(let i=0;i<currentQuestion.answers.length;i++){
    const currentChoice=currentQuestion.answers[i];
    const choiceDiv=document.createElement("div");
    choiceDiv.classList.add("option");
    choiceDiv.innerHTML=currentChoice;
    optionContainer.appendChild(choiceDiv);
    choiceDiv.addEventListener("click",function(){
      if(choiceDiv.classList.contains("selected")){
        choiceDiv.classList.remove("selected");       
        
      }
      
      else{
        choiceDiv.classList.add("selected");
      }
      console.log(choiceDiv)
    })
  }
  
}

const showScore = () =>{
  qu.textContent = "";
  optionContainer.textContent = "";
       scoreCard.textContent=`Your score is ${score} out of ${questions.length}`;
       next.textContent="Play Again";
       displayAlert.style.display="flex";
     displayAlert.textContent="Yor score screen has been displayed"
     quizOver=true;
}


const checkAnswer =()=>{
  let selectAns=document.querySelector(".option.selected");
  if(selectAns.textContent === questions[currentIndex].correctAnswer){
   displayAlert.style.display="flex";
   displayAlert.textContent="Correct Answer"
   displayAlert.style.backgroundColor=" #5d9b63"
    score++;
  }
 else{
  displayAlert.style.display="flex";
  displayAlert.textContent="Wrong Answer";
    if(displayAlert.textContent === "Wrong Answer"){
      displayAlert.style.backgroundColor="red"
    }
    else{
      displayAlert.style.backgroundColor=" #5d9b63"
    }
 }
 currentIndex++;
 if(currentIndex < questions.length){
  showQuestion();
}
else{
  showScore();
}
}
showQuestion();
next.addEventListener("click",function(){
  let selectAns=document.querySelector(".option.selected");
 
  if(!selectAns && next.textContent === "Next"){
     displayAlert.style.display="flex";
     displayAlert.textContent="Please select Your Answer"
  }
  if(quizOver){
    next.textContent="Next";
    currentIndex =0;
    score =0;
    scoreCard.textContent="";
    showQuestion();
    quizOver=false;
  }
  else{
    checkAnswer();
  }
})

