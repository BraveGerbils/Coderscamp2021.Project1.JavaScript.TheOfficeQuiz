

import style from "./timerView.styles.css";
import { ResultView } from "../ResultView/ResultView";
import { GoodAnswerView } from "../GoodAnswerView/GoodAnswerView";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `
    <div>
  
    <div class="clock">
    
    <button class="clock-end" title="restart time">${data.buttonEnd}</button>
    <div class="clock-display">
        <div class="clock-displayWrap">
            <div class="clock-displayMin" id="clock-displayMin">${data.displayMin}</div>
            <div class="clock-displaySec" id="clock-displaySec">${data.displaySec}</div>
        </div>
        <div class="clock-displayWrap">
            <p class="clock-paragraphMin clock-paragraph">${data.paragraphMin}</p>
            <p class="clock-paragraphSec clock-paragraph">${data.paragraphSec}</p>
        </div>
    </div>
    <div class="clock-btnWrap">
        <button class="clock-btn clock-addMin">${data.plusBtn}</button>
        <button class="clock-btn clock-remMin">${data.minBtn}</button>
        <button class="clock-btn clock-addSec">${data.plusBtn}</button>
        <button class="clock-btn clock-remSec" >${data.minBtn}</button>
    </div>
    <div class="clock-bckg"></div>
</div>
</div>`
}


    export const TimerView = ({renderOn, data}) => {
        const element = elementFrom({html: templateHtml({data})});
        document.querySelector(renderOn).appendChild(element);
    
        //display elements
        const displayMin = document.querySelector('.clock-displayMin');
        const displaySec = document.querySelector('.clock-displaySec');
        const clockBckg = document.querySelector('.clock-bckg');
        const buttons = document.querySelectorAll('.clock-btnWrap');
    
        let minutes = 0;
        let secundes = 0;
    
        const plusMin = document.querySelector('.clock-addMin').addEventListener('click', function() {
            minutes++;
            displayMin.innerText = minutes.toString().padStart(2, '0');
            if (minutes >= 100) {
                minutes = 0;
                displayMin.innerText = minutes.toString().padStart(2, '0');
            }
        });;
    
        const remMin = document.querySelector('.clock-remMin').addEventListener('click', function() {
            minutes--;
            displayMin.innerText = minutes.toString().padStart(2, '0');
            if(minutes < 0){
                minutes = 99;
                displayMin.innerText = minutes.toString().padStart(2, '0');
            }
        });;
        const plusSec = document.querySelector('.clock-addSec').addEventListener('click', function() {
            secundes++;
            displaySec.innerText = secundes.toString().padStart(2, '0');
            if (secundes >= 60) {
                secundes = 0;
                displaySec.innerText = secundes.toString().padStart(2, '0');
            }
        });;
    
        const remSec = document.querySelector('.clock-remSec').addEventListener('click', function() {
            secundes--;
            displaySec.innerText = secundes.toString().padStart(2, '0');
            if(secundes < 0) {
                secundes = 59;
                displaySec.innerText = secundes.toString().padStart(2, '0');
            }
        });;
        
        const end = document.querySelector('.clock-end').addEventListener('click', function() {
            history.go();
        });;

        const start = document.querySelector('.clock-start').addEventListener('click', function(e) {
            e.target.style.visibility = "hidden";
            buttons.forEach(button=> {button.style.visibility = "hidden"});
            sessionStorage.setItem("minutes", minutes);
            sessionStorage.setItem("secundes",secundes);
            let totalTime = secundes + (minutes * 60);
            let countTime = secundes + (minutes * 60);
            let currentTime = 0;
            let displayInterval= setInterval(displayUpdate, 1000);

            function displayUpdate() {
                if (minutes > 0 && secundes == 0) {
                    minutes--
                    displayMin.innerText = minutes.toString().padStart(2, '0');
                    secundes= 61;
                    displaySec.innerText = secundes.toString().padStart(2, '0');
                    secundes--
                }

                if (totalTime > 0) {
                    totalTime--;
                    secundes--
                    currentTime++;
                    displaySec.innerText = secundes.toString().padStart(2, '0');
                    let progressTime = (currentTime * 100) / countTime;
                    let progressPerc = `${progressTime}%`
                    clockBckg.style.height = progressPerc;
                }

                if (totalTime == 0) {
                    setTimeout(() => { 
                        clockBckg.style.height = "0%"; 
                        e.target.style.visibility = "visible";
                        buttons.forEach(button=> {button.style.visibility = "visible"}) }, 2000);
                        totalTime == 0;
                        clockBckg.style.height = "100%";
                        clearInterval(displayInterval);
                }
        
        }
       
    });

}


    
