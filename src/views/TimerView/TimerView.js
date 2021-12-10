

import style from "./timerView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `
    <div class="clock">
    <button class="clock-start" id="start-BTN">${data.buttonStart}</button>
    <button class="clock-end" title="restart time">${data.buttonEnd}</button>
    <div class="clock-display">
        <div class="clock-displayWrap">
            <div class="clock-displayMin">${data.displayMin}</div>
            <div class="clock-displaySec">${data.displaySec}</div>
        </div>
        <div class="clock-displayWrap">
            <p class="clock-paragraphMin clock-paragraph">${data.paragraphMin}</p>
            <p class="clock-paragraphSec clock-paragraph">${data.paragraphSec}</p>
        </div>
    </div>
    <div class="clock-btnWrap">
        <button class="clock-btn clock-plusMin">${data.plusBtn}</button>
        <button class="clock-btn clock-remMin">${data.minBtn}</button>
        <button class="clock-btn clock-plusSec">${data.plusBtn}</button>
        <button class="clock-btn clock-remSec" >${data.minBtn}</button>
    </div>
    <div class="clock-bckg"></div>
</div>`

}


export const TimerView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    console.log(element)

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn)

    //display elements
    const displayMin = document.querySelector('.clock-displayMin');
    const displaySec = document.querySelector('.clock-displaySec');
    
    //background-change element
    const clockBckg = document.querySelector('.clock-bckg');

    //buttons queryselectors
    const plusMin = document.querySelector('.clock-plusMin');
    const remMin = document.querySelector('.clock-remMin');
    const plusSec = document.querySelector('.clock-plusSec');
    const remSec = document.querySelector('.clock-remSec');
    const start = document.querySelector('.clock-start');
    const end = document.querySelector('.clock-end');
    const buttons = document.querySelector('.clock-btnWrap');

    //adding function makeNumber for buttons
    plusMin.addEventListener('click', makeNumber);
    plusSec.addEventListener('click', makeNumber);
    remMin.addEventListener('click', makeNumber);
    remSec.addEventListener('click', makeNumber);
    start.addEventListener('click', makeNumber);
    end.addEventListener('click', makeNumber);

    // Adding/Removing/Displaying/Ending function
    let secundeArr = [];
    let minuteArr = [];
    let minute = minuteArr.length;
    let secunde = secundeArr.length;
    let i = 0;

    function makeNumber(e) {

        function adding(i, array, variable, display, number) {
            i++;
            array.push(i);
            variable = array.length;
            display.innerText = variable.toString().padStart(2, '0');
            if (variable >= number) {
                display.innerText = "00";
                array.length = 0;
            }
        }
        function removing(i, array, variable, display, a, b) {
            if (display.innerText == "00") {
                array.length = a;
            }
            if (variable >= b) {
                display.innerText = variable.toString().padStart(2, '0');
            }
            i--
            array.pop()
            variable = array.length;
            display.innerText = variable.toString().padStart(2, '0');
        }
        let classes = e.target.className;

       //buttons and their behaviors
        if (classes == "clock-btn clock-plusMin") {
            adding(i, minuteArr, minute, displayMin, 100);
        }else if (classes == 'clock-btn clock-remMin') {
            removing(i, minuteArr, minute, displayMin, 100, 99)
        }else if (classes == 'clock-btn clock-plusSec') {
            adding(i, secundeArr, secunde, displaySec, 60);
        }else if (classes == 'clock-btn clock-remSec') {
            removing(i, secundeArr, secunde, displaySec, 60, 99)
        }else if (classes == "clock-end") {
            history.go();
        }

        //Start counting down and change background
        else if (classes == 'clock-start') {
            start.style.visibility = "hidden"
            buttons.style.visibility = "hidden";
            let totalTime = secundeArr.length + (minuteArr.length * 60);
            let countTime = secundeArr.length + (minuteArr.length * 60);
            let currentTime = 0;
            let interval = setInterval(timeUpdate, 1000)

            function timeUpdate() {
                if (totalTime > 0) {
                    totalTime--;
                    secundeArr.pop();
                    displaySec.innerText = secundeArr.length.toString().padStart(2, '0');
                    currentTime++;
                    let progressTime = (currentTime * 100) / countTime;
                    let progressPerc = `${progressTime}%`
                    clockBckg.style.height = progressPerc;
                }

                if (displayMin.innerText != "00" && displaySec.innerText == "00") {
                    secundeArr.length = 61;
                    secundeArr.pop();
                }

                if (displaySec.innerText == "59") {
                    let minutes = displayMin.innerText;
                    let substraction = Number(minutes) - 1;
                    displayMin.innerText = substraction.toString().padStart(2, '0');
                }

                if (totalTime == 0) {
                    setTimeout(() => { 
                        clockBckg.style.height = "0%"; 
                        start.style.visibility = "visible"
                        buttons.style.visibility = "visible" 
                    }, 2000);
                    totalTime == 0
                    clockBckg.style.height = "100%";
                    clearInterval(interval);
                    console.log("Czas minął"); 
                }
                if (totalTime == 0) {    
                    
                }
                    

                    
                
            }
        }
    }
}

