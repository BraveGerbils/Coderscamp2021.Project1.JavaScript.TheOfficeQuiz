import style from "./resultView.styles.css";
import { TimerView } from "../TimerView/TimerView";

import { elementFrom } from "../../shared/dom";
import { GoodAnswerView } from "../GoodAnswerView/GoodAnswerView";
import { ResultSaveDate } from "./ResultSaveDate";



const templateHtml = ({ data }) => {
    return `
    <div id="result" class="result"> 
        <button id="result-escBtn" class="result-esc">X</button>
        
        <h2 class="result-heading">GAME OVER!</h2>
        
        <div class="result-wrp">
            <img src="result-dwight.b97e6149.png" class="result-dwightImg">
            <div class="result-paragraphs">
                <p class="result-parag">Your playing time is: <span class="result-span" id="result-time"></span></p>
                <p class="result-parag parag">In the chosen time you have got 
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
        <input id="result-nameId" type="text" class="result-name" placeholder="Your name...">
        </label>
        <button type="submit" class="result-save" id="result-save" value="save your result">Save Your result!</button>
        </div>
</div>`
}

export const ResultView = ({ renderOn, data }) => {
    const element = elementFrom({ html: templateHtml({ data }) });
    document.querySelector(renderOn).appendChild(element);

    //arrays with sentences describing user score
    const resultArrayPerfect = ["Now that’s what I call a finejob.", "Couldn’t have done it better myself.",
        "That was first class work.", "You must have been practicing.", "Good remembering!", "Marvelous!"];
    const resultArrayMid = ["You managed somehow.", "If I were you, I wouldn't be happy.",
        "A result like a high school student.", "Maybe check The Office again.", "I have an idea for you: play again."];
    const resultArrayBad = ["It was amateurish.", "Try harder.", "Did you really watch The Office?",
        "That was easy to predict.", "Really?", "It was a failure."]

    //button "X" - turn off result element
    const escapeBtn = document.getElementById('result-escBtn');
    escapeBtn.addEventListener('click', function () {
        element.style.display = "none";
        history.go();
    });



    let hit;
    let missed;
    let questions;
    let userScore;
    let minutes;
    let secundes;
    let totalTime;
    let scoreArray;
    const answerBoxes = document.querySelectorAll('.answers-question');

    //start element 
    const start = document.getElementById('start').addEventListener('click', function () {
        let countTimeInterval = setInterval(showResult, 1000);
        sessionStorage.setItem('goodAnswersKey', 0)
        sessionStorage.setItem('badAnswersKey', 0)

        minutes = document.getElementById('clock-displayMin').innerText;
        secundes = document.getElementById('clock-displaySec').innerText;
        totalTime = Number(minutes * 60) + Number(secundes);

        if (secundes == 0 && totalTime == 0) {
            clearInterval(countTimeInterval);
        }

        function showResult() {
            totalTime--;
            const resultPoints = document.getElementById('result-points');
            const resultQuestions = document.getElementById('result-questions');
            const resultQuotes = document.getElementById('result-quote');
            let goodAnswers = sessionStorage.getItem("goodAnswersKey");
            let badAnswers = sessionStorage.getItem("badAnswersKey");
            
            //if time is up 
            if (totalTime <= 0) {
                answerBoxes.forEach(answer => { answer.style.filter = "blur(4px)"; answer.disabled = true })

                //if the user dont click for any answer, show 0 points 0 questions
                if (goodAnswers == 0 && badAnswers == 0) {
                    const resultParag = document.querySelector('.parag');
                    resultParag.innerHTML = "You don't have any answers yet";
                    resultQuotes.innerHTML = "I know that it's hard to understand, but you must just answer the questions.";
                }

                //if the user click some answers - show them on result element
                hit = Number(goodAnswers)
                missed = Number(badAnswers)
                resultPoints.innerHTML = goodAnswers;
                questions = hit + missed
                resultQuestions.innerHTML = questions;

                //displaying result time in the result element 
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes + ".";

                //Michael says - comment to user score
                userScore = (hit * 100) / questions;
                if (userScore <= 30) {
                    let random = Math.floor(Math.random() * resultArrayBad.length);
                    resultQuotes.innerHTML = resultArrayBad[random];
                } else if (userScore <= 70) {
                    let random = Math.floor(Math.random() * resultArrayMid.length)
                    resultQuotes.innerHTML = resultArrayMid[random];
                } else if (userScore > 70) {
                    let random = Math.floor(Math.random() * resultArrayPerfect.length)
                    resultQuotes.innerHTML = resultArrayPerfect[random];
                }
                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
            }
        }
    })

    const saveResult = document.getElementById('result-save').addEventListener('click', function () {
        let userName = document.getElementById('result-nameId').value
        let dateTime = ResultSaveDate()
        let score = `${dateTime}. Imię gracza: ${userName || "nieznane"}. Kategoria: cytaty.  Ilość punktów: ${hit}. Ilość pytań: ${questions}. 
        Wynik użytkownika: ${userScore || 0}%.`
        const arr = [];
        arr.push(score);
        element.style.display = "none";
        answerBoxes.forEach(answer => { answer.style.filter = "blur(0px)"; answer.disabled = false})
        console.log(arr)
        localStorage.setItem("userScore", arr)
    })
}


