import style from "./goodAnswer.styles.css"; 
import { elementFrom } from "../../shared/dom";


const templateHtml = ({data}) => {
    return ` 
        <div class="questions-view">
            <nav class="categories radius">
                <a class="categories-first" href="">${data.buttonCategory1}</a>
                <a class="categories-second" href="">${data.buttonCategory2}</a>
                <a class="categories-third" href="">${data.buttonCategory3}</a>
            </nav>
            <div class="questionAndAnswers">
                <div class="questionAndAnswers-left">
                    <div class="questions radius">
                        <p>${data.questionWindow}</p>
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
                <div class="questionAndAnswers-right">
                    <div class="question-image"></div>
                </div> 
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

