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
                <p class="result-quote" id="result-quote"><p>
            </div>
        </div>
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

    const resultQuotesArray = ["I am running away from my responsibilities. And it feels good.” – Michael Scott, Season 4, “Money”", 
    "“I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.” – Kevin Malone, Season 3, “Beach Games”",
    "“And I knew exactly what to do. But in a much more real sense, I had no idea what to do.” – Michael Scott, Season 5, “Stress Relief”",
    "“The worst thing about prison was the dementors.” – Michael “Prison Mike” Scott, Season 3, “The Convict”", 
    "“If I don’t have some cake soon, I might die.” – Stanley Hudson, Season 4, “Survivor Man”", 
    "“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.” – Michael Scott, Season 2, “The Fight”",
    "“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” – Michael Scott, Season 5, “The Duel”",
    "“Oh my God it’s happening! Everybody stay calm. Stay f*cking calm!” – Michael Scott, Season 5, “Stress Relief: Part. 1”",
    "“If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.” – Michael Scott, Season 6, “The Chump”"

];
    
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
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes +".";
                // const resultPoints = document.getElementById('result-points');
                // const resultQuestions = document.getElementById('result-questions');
                // const resultQuotes = document.getElementById('result-quotes');
                // const resultQuotesChange = resultQuotes.innerHTML;
                // for(let i = 0; i<resultQuotesArray.length; i++) {

                // }
                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
            }
        }
    })
}

