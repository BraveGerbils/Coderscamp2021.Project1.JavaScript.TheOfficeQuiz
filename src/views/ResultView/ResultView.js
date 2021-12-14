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
                <p class="result-parag">Your playing time is: <span class="result-span">${data.time}</span></p>
                <p class="result-parag">In the chosen time you have got <span class="result-span">${data.points}</span> correct answers to <span class="result-span">${data.questions}</span> questions.</p>
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


    const escapeBtn = document.getElementById('result-escBtn').addEventListener('click', function () {
        element.style.display = "none";
        history.go();
    })

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
                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
            }

        }
    })
}

