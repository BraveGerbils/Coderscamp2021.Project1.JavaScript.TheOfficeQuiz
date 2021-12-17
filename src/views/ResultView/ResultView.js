import style from "./resultView.styles.css";
import { TimerView } from "../TimerView/TimerView";

import { elementFrom } from "../../shared/dom";
import { GoodAnswerView } from "../GoodAnswerView/GoodAnswerView";



const templateHtml = ({ data }) => {
    return `
    <div id="result" class="result"> 
        <button id="result-escBtn" class="result-esc">X</button>
        
        <h2 class="result-heading">GAME OVER!</h2>
        
        <div class="result-wrp">
            <img src="result-dwight.b97e6149.png" class="result-dwightImg">
            <div class="result-paragraphs">
                <p class="result-parag">Your playing time is: <span class="result-span" id="result-time"></span></p>
                <p class="result-parag">In the chosen time you have got 
                <span class="result-span" id="result-points"></span> 
                correct answers for 
                <span class="result-span" id="result-questions"></span> 
                questions.
                </p>
            </div>
            
        </div>
        <p class="result-quote">Michael says: 
        <span id="result-quote"></span>
        <p>
        <div class="result-inputWrp">
        <label for="result-nameId" class="result-label">Enter Your name:
        <input id=result-nameId" type="text" class="result-name" placeholder="Your name...">
        </label>
        <button type="submit" class="result-save" id="result-save" value="save your result">Save Your result!</button>
        </div>
</div>`
}

export const ResultView = ({ renderOn, data }) => {
    const element = elementFrom({ html: templateHtml({ data }) });
    document.querySelector(renderOn).appendChild(element);

    //arrays with sentence describing user score
    const resultArrayPerfect = ["Now that’s what I call a finejob.", "Couldn’t have done it better myself.", 
        "That was first class work.", "You must have been practicing.", "Good remembering!", "Marvelous!"];
    const resultArrayMid  = ["You managed somehow.", "If I were you, I wouldn't be happy.",
        "A result like a high school student.","Maybe check The Office again.", "I have an idea for you: play again." ] ;             
    const resultArrayBad = ["It was amateurish.", "Try harder.", "Did you really watch The Office?", 
        "That was easy to predict.", "Really?", "It was a failure." ]

    //button "X" - turn off result element
    const escapeBtn = document.getElementById('result-escBtn').addEventListener('click', function () {
        element.style.display = "none";
        history.go();
    });

    let hit;
    let questions;
    let userScore; 

    //start element 
    const start = document.getElementById('start').addEventListener('click', function () {
        let countTimeInterval = setInterval(showResult, 1000);
        
        const minutes = document.getElementById('clock-displayMin').innerText;
        const secundes = document.getElementById('clock-displaySec').innerText;
        let totalTime = Number(minutes * 60) + Number(secundes);
    
        if (secundes == 0 && totalTime == 0) {
            clearInterval(countTimeInterval);
        }

        function showResult() {
            totalTime--;
            const resultPoints = document.getElementById('result-points');
            const resultQuestions = document.getElementById('result-questions');
            const getGoodAns = sessionStorage.getItem("goodAnswersKey");
            const getBadAns = sessionStorage.getItem("badAnswersKey");

            if (totalTime <= 0) {
                const goodAnsArr = [];
                const badAnsArr = [];
        
                if(badAnsArr.length == 0 && goodAnsArr.length == 0) {
                    resultPoints.innerHTML = 0; 
                    resultQuestions.innerHTML = 0;
                } 

                    goodAnsArr.push(getGoodAns)
                    let hited = goodAnsArr.toString().split(',')
                    hit = hited.reduce(function(a, b) {return a + b;}).length;
                    resultPoints.innerHTML = hit;

                    badAnsArr.push(getBadAns)
                    let missed = badAnsArr.toString().split(',')
                    let miss = missed.reduce(function(a, b) {return a + b;});
                    questions = hit + miss.length
                    resultQuestions.innerHTML = questions;
        
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes +".";
                
                //Michael says - comment to user score
                const resultQuotes = document.getElementById('result-quote');
                userScore = (hit * 100)/questions;
                console.log("to userscore " + userScore + "%")

                if(userScore<=30) {
                    let random = Math.floor(Math.random() * resultArrayBad.length);
                    resultQuotes.innerHTML = resultArrayBad[random]; 
                } else if (userScore<=70) {
                    let random = Math.floor(Math.random() * resultArrayMid.length)
                    resultQuotes.innerHTML = resultArrayMid[random];
                } else if (userScore>70) {
                    let random = Math.floor(Math.random() * resultArrayPerfect.length)
                    resultQuotes.innerHTML = resultArrayPerfect[random];
                }
                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
            }
        }
     
    })
    const saveResult = document.getElementById('result-save').addEventListener('click', function() {
      sessionStorage.setItem("questions", questions);
      sessionStorage.setItem("hited", hit);
      sessionStorage.setItem("userScore", userScore);
    })

}


