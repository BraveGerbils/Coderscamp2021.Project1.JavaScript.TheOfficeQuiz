import style from "./resultView.styles.css";
import { TimerView } from "../TimerView/TimerView";
import { elementFrom } from "../../shared/dom";
//src\assets\img\result-dwight.png
const templateHtml = ({ data }) => {
    return `
    <div id="result" class="result"> 
        <button id="result-escBtn" class="result-esc">X</button>
        
        <h2 class="result-heading">GRATS BOSS!</h2>
        
        <div class="result-wrp">
            <img src="result-dwight.b97e6149.png" class="result-dwightImg">
            <div class="result-paragraphs">
                <p class="result-parag">Your playing time is: <span class="result-span" id="result-time">${data.time}</span></p>
                <p class="result-parag">In the chosen time you have got 
                <span class="result-span" id="result-points">${data.points}</span> 
                correct answers to 
                <span class="result-span id="result-questions"">${data.questions}</span> 
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
        <button class="result-save">Save Your result!</button>
        </div>
</div>`
}


export const ResultView = ({ renderOn, data }) => {
    const element = elementFrom({ html: templateHtml({ data }) });
    console.log(element);

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn);

    const resultArrayPerfect = ["Now that’s what I call a finejob.", "Couldn’t have done it better myself.", 
                                "That was first class work.", "You must have been practicing.", 
                                "Good remembering!", "Marvelous!"];
    const resultArrayMid  = ["You managed somehow.", "If I were you, I wouldn't be happy.","A result like a high school student.",
                               "Maybe check the office again.", "I have an idea for you. Play again." ] ;             
    const resultArrayBad = ["It was amateurish.", "Try harder.", "Did you really watch The Office?", 
                            "That was easy to predict.", "Really?", "It was a failure." ]

    
    const escapeBtn = document.getElementById('result-escBtn').addEventListener('click', function () {
        element.style.display = "none";
        history.go();
    });

    const start = document.getElementById('start').addEventListener('click', function () {
        const minutes = document.getElementById('clock-displayMin').innerText;
        const secundes = document.getElementById('clock-displaySec').innerText;
        let totalTime = Number(minutes * 60) + Number(secundes);
        let countTimeInterval = setInterval(countTime, 1000);
        if (secundes == 0 && totalTime == 0) {
            clearInterval(countTimeInterval);
        }

        function countTime() {
            totalTime--;
            console.log(totalTime);
            
            if (totalTime <= 0) {
                let result = 29;
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes +".";
                const resultPoints = document.getElementById('result-points');
                const resultQuestions = document.getElementById('result-questions');
                
                const resultQuotes = document.getElementById('result-quote');
                  
                if(result<30) {
                    let random = Math.floor(Math.random() * resultArrayBad.length);
                    resultQuotes.innerHTML = resultArrayBad[random]; 
                } else if (result>=30) {
                    let random = Math.floor(Math.random() * resultArrayMid.length)
                    resultQuotes.innerHTML = resultArrayMid[random];
                } else if (result>70) {
                    let random = Math.floor(Math.random() * resultArrayPerfect.length)
                    resultQuotes.innerHTML = resultArrayPerfect[random];
                }
            
                 
                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
            }
        }
    })
}

