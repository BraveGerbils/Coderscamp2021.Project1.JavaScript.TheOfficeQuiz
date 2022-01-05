import style from "./charactersGoodAnswerViews.css"; 
import { elementFrom } from "../../shared/dom";
import TimerView  from "../TimerView/TimerView";
import { charactersQuestion } from "../../modes/CharactersQuestion";
import { fetchCharacters } from "../../app/officeApi";

const templateHtml = ({data}) => {
    return ` 
        <div id="office-app" class="office-app charactersGoodAnswer">
                <div class="office-header">
                    <div class="office-logo">
                    </div>
                </div>
                <div class="office-content">
                    <div class="office-bar-left"></div>
                    <div id="charactersView" class="office-main-body">
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
    
    fetchCharacters().then(data => {
        const answersNode = document.querySelectorAll('.answers-grid button')
        let answers = Array.from(answersNode)
        const questionsArray = []; 

        let goodAnswers = 0;
        let badAnswers= 0;
        let start = document.querySelector('.clock-start')
        start.addEventListener('click', function(e) {
            if(e.target.id = "start") { 
                localStorage.removeItem("goodAnswersKey")
                localStorage.removeItem("badAnswersKey")
                goodAnswers = 0;
                badAnswers = 0;
            }
        })

        const nextOne = () => {
            answers.forEach(answer => answer.classList.remove("answers-question-another", "answer-good", "answer-bad"))
        }    

        const randomQuestion = (data) => {
            return charactersQuestion(data);
        }

        const getCorrectAnswer = (question) => {
            return question.rightAnswer
        }

        const displayData = (question) =>{
            const dataArray = question.answers;

            // const imgContainer = document.querySelector(".office-gamemode-character-template-img");
            // const imgContainer = document.getElementById("question-img");
            const answer1 = document.getElementById("answer1");
            const answer2 = document.getElementById("answer2");
            const answer3 = document.getElementById("answer3");
            const answer4 = document.getElementById("answer4");

            // imgContainer.style.zIndex = "1"
            // imgContainer.style.backgroundImage = `url(${question.question})`

            answer1.innerHTML = dataArray[0];
            answer2.innerHTML = dataArray[1];
            answer3.innerHTML = dataArray[2];
            answer4.innerHTML = dataArray[3];
        
        }
         
        let question = randomQuestion(data);
        questionsArray.push(question.question);

        displayData(question);
        let correctAnswer = getCorrectAnswer(question);
        
        answers.forEach(answer => answer.addEventListener('click', () => {
            if(answer.textContent === correctAnswer){
                answer.classList.add("answer-good")
                goodAnswers++
                sessionStorage.setItem('goodAnswersKey', goodAnswers ) 
                question = randomQuestion(data);

                while (questionsArray.includes(question)){
                    question = randomQuestion(data);
                }
                questionsArray.push(question.question);
                setTimeout(function() { displayData(question); }, 500);
                correctAnswer = getCorrectAnswer(question);
            }
            else{
                answer.classList.add("answer-bad")
                badAnswers++;
                sessionStorage.setItem('badAnswersKey', badAnswers ) 
                question = randomQuestion(data);

                while (questionsArray.includes(question)){
                    question = randomQuestion(data);
                }
                questionsArray.push(question.question);
                setTimeout(function() { displayData(question); }, 500);
                correctAnswer = getCorrectAnswer(question);

            }
            answers.forEach(answer => answer.classList.add("answers-question-another"))
            setTimeout(function() { nextOne(); }, 500)
        }))   
    })  
}