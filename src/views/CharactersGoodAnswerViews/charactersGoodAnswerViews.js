import style from "./charactersGoodAnswerViews.css"; 
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
                            <div class="office-who radius">
                                <p>Who is this?</p>
                            </div>
                            <div class="office-gamemode-content-quiz">
                                <div class="office-gamemode-character-template-quiz">
                                    <div class="office-gamemode-character-template-img"></div>
                                </div>
                            </div>
                            <div class="answers">
                                <div class="answers-grid">
                                    <button class="answers-question radius">${data.buttonAnswer1}</button>
                                    <button class="answers-question radius">${data.buttonAnswer2}</button>
                                    <button class="answers-question radius">${data.buttonAnswer3}</button>
                                    <button class="answers-question radius">${data.buttonAnswer4}</button>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="office-bar-right"></div>
                </div>
            </div>`
}


export const CharactersGoodAnswerView = ({renderOn, data}) => {
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



