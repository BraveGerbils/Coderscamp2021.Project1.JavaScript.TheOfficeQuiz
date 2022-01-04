import style from "./resultView.styles.css";
import { elementFrom } from "../../shared/dom";
import { ResultMichaelSays } from "./ResultMichaelSays";


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

    //button "X" - turn off result element
    const escapeBtn = document.getElementById('result-escBtn');
    escapeBtn.addEventListener('click', function () {
        element.style.display = "none";
        localStorage.removeItem("goodAnswersKey")
        localStorage.removeItem("badAnswersKey")
        history.go();
    });

    let hit;
    let missed;
    let questions;
    let userScore;
    let minutes;
    let secundes;
    let totalTime;
    const answerBoxes = document.querySelectorAll('.answers-question');//from GoodAnswerView
    const resultPoints = document.getElementById('result-points');
    const resultQuestions = document.getElementById('result-questions');
    const resultQuotes = document.getElementById('result-quote');

    //start element 
    const start = document.getElementById('start').addEventListener('click', function () {
    
        let countTimeInterval = setInterval(showResult, 1000);
       
        minutes = document.getElementById('clock-displayMin').innerText;
        secundes = document.getElementById('clock-displaySec').innerText;
        totalTime = Number(minutes * 60) + Number(secundes);

        if (secundes == 0 && totalTime == 0) {
            clearInterval(countTimeInterval);
        }

        function showResult() {
            totalTime--;
           
            //if time is up 
            if (totalTime <= 0) {
                answerBoxes.forEach(answer => { answer.style.filter = "blur(4px)"; answer.disabled = true })
                
                //if the user dont click for any answer, show 0 points 0 questions
                if (localStorage.goodAnswersKey == 0 && localStorage.badAnswersKey == 0) {
                    const resultParag = document.querySelector('.parag');
                    resultParag.innerHTML = "You don't gave any answers yet";
                    resultQuotes.innerHTML = "I know that it's hard to understand, but you must just answer the questions.";
                }

               // if the user click some answers - show them on result element
                hit = Number(localStorage.getItem("goodAnswersKey"))
                missed = Number(localStorage.getItem("badAnswersKey"))
                resultPoints.innerHTML = hit;
                questions = hit + missed
                resultQuestions.innerHTML = questions;

                //displaying result time in the result element 
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes + ".";

                ResultMichaelSays();

                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
                
            }
        
            
        }
       
  
    })
    
}
