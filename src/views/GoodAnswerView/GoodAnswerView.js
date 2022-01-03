import style from "./goodAnswer.styles.css"; 
import { elementFrom } from "../../shared/dom";
import TimerView  from "../TimerView/TimerView";

const templateHtml = ({data}) => {
    return ` 
        <div id="office-app" class="office-app">
                <div class="office-header">
                    <div class="office-logo">
                    </div>
                </div>
                <div class="office-content">
                    <div class="office-bar-left"></div>
                    <div class="office-main-body">
                        <div class="office-gamemode-bar-quiz">
                            <button class="office-bar-mode">Character</button>
                            <button class="office-bar-mode">Quote</button>
                            <button class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body">
                            <div class="office-gamemode-content">
                                <div class="office-gamemode-body-content-quiz">
                                    <div class="office-gamemode-body-text-quiz">
                                        <p class="office-gamemode-body-text-quiz-question">${data.questionWindow}</p>
                                    </div>
                                </div>
                                <div class="office-gamemode-character-template">
                                    <div class="office-gamemode-character-template-img"></div>
                                </div>
                            </div>
                            <div class="office-gamemode-buttons-quiz">
                                <div class="answers">
                                    <div class="answers-grid">
                                        <button class="answers-question radius">${data.buttonAnswer1}</button>
                                        <button class="answers-question radius">${data.buttonAnswer2}</button>
                                        <button class="answers-question radius">${data.buttonAnswer3}</button>
                                        <button class="answers-question radius">${data.buttonAnswer4}</button>
                                    </div>
                                </div>
                                <div class= "clock-position">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="office-bar-right"></div>
                </div>
            </div>`
}


// Good answer //

export const GoodAnswerView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    document.querySelector(renderOn).appendChild(element);
    
    const answersNode = document.querySelectorAll('.answers-grid button')
    let answers = Array.from(answersNode)
    let correctAnswer = 'answer 1' //temporarily 
    let goodAnswers = 0;
    let badAnswers= 0;

    const nextOne = () => {
        answers.forEach(answer => answer.classList.remove("answers-question-another", "answer-good", "answer-bad"))
    }    
     
    answers.forEach(answer => answer.addEventListener('click', () => {
        if(answer.textContent === correctAnswer){
            answer.classList.add("answer-good")
            goodAnswers++
            sessionStorage.setItem('goodAnswersKey', goodAnswers ) 
        }
        else{
            answer.classList.add("answer-bad")
            badAnswers++;
            sessionStorage.setItem('badAnswersKey', badAnswers ) 
        }
        answers.forEach(answer => answer.classList.add("answers-question-another"))
        setTimeout(function() { nextOne(); }, 500)
    }))     
}



