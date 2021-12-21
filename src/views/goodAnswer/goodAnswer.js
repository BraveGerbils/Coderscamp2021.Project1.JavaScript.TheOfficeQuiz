import style from "./goodAnswer.css";
import { elementFrom } from "../../shared/dom";


const templateHtml = ({data}) => {
    return ` <div class="whole-quiz">
        <div class="left-side">
            <img class="michael" src="https://bi.im-g.pl/im/16/7e/19/z26733078V,Steve-Carell-w-serialu--The-Office-.jpg" alt="Michael">
        </div>
        <div class="questions-view">
            <nav class="categories radius">
                <a class="categories-first" href="">${data.buttonCategory1}</a>
                <a class="categories-second" href="">${data.buttonCategory2}</a>
                <a class="categories-third" href="">${data.buttonCategory3}</a>
            </nav>

            <div class="questions radius">
                <p>${data.questionWindow}</p>
            </div>
            
            <div class="answers">
                <div class="answers-grid">
                    <button class="answer1 answers-question radius">${data.buttonAnswer1}</button>
                    <button class="answer2 answers-question radius">${data.buttonAnswer2}</button>
                    <button class="answer3 answers-question radius">${data.buttonAnswer3}</button>
                    <button class="answer4 answers-question radius">${data.buttonAnswer4}</button>
                </div>
            </div>
        </div>
    </div> `
}


export const goodAnswer = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    console.log(element)

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn)
    
    const answersNode = document.querySelectorAll('.answers-grid button')
    let answers = Array.from(answersNode)
    let correctAnswer = 'answer 1' //temporarily 
    
    const nextOne = () => {
        answers.forEach(answer => answer.classList.remove("answers-question-another", "answer-good", "answer-bad"))
    }    
     
    answers.forEach(answer => answer.addEventListener('click', () => {
        if(answer.textContent === correctAnswer){
            answer.classList.add("answer-good")
        }
        else{
            answer.classList.add("answer-bad")
        }
        answers.forEach(answer => answer.classList.add("answers-question-another"))
        setTimeout(function() { nextOne(); }, 500)
    }))     
}

