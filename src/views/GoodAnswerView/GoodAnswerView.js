import style from "./goodAnswer.styles.css"; 
import { quotesQuestion } from "../../modes/QuotesQuestion";
import { elementFrom } from "../../shared/dom";
import TimerView  from "../TimerView/TimerView";
import { fetchCharacters, fetchQuotes, fetchEpisodes} from "../../app/officeApi";

const templateHtml = ({data}) => {
    return ` 
        <div id="office-app" class="office-app goodAnswer">
                <div class="office-header">
                    <div class="office-logo">
                    </div>
                </div>
                <div class="office-content">
                    <div class="office-bar-left"></div>
                    <div id="gAView" class="office-main-body">
                        <div class="office-gamemode-bar-quiz">
                            <button class="office-bar-mode">Character</button>
                            <button class="office-bar-mode">Quote</button>
                            <button class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body-quiz">
                            <div class="office-gamemode-body-left">
                                <div class="office-who-quiz radius">
                                    <p>Who said that?</p>
                                </div>
                                <div class="office-gamemode-body-text-quiz-quotes">
                                    <p class="office-gamemode-body-text-quiz-question" id="question"></p>
                                </div>
                                <div class="answers">
                                    <div class="answers-grid">
                                        <button class="answers-question radius" id="answer1"></button>
                                        <button class="answers-question radius" id="answer2"></button>
                                        <button class="answers-question radius" id="answer3"></button>
                                        <button class="answers-question radius" id="answer4"></button>
                                    </div>
                                </div>
                            </div>    
                            <div id="dissapearToo" class="office-gamemode-body-right">
                                <div class="office-gamemode-character-template-img-quiz"></div>
                            </div>
                        </div>
                    </div>
                    <div class="office-bar-right"></div>
                </div>
            </div>`
}


export const GoodAnswerView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    document.querySelector(renderOn).appendChild(element);
      
    
    
    fetchQuotes().then(data => {
        const answersNode = document.querySelectorAll('.answers-grid button')
        const questionsArray = []; 
        
        let answers = Array.from(answersNode)
        let goodAnswers = 0;
        let badAnswers = 0;


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
            return quotesQuestion(data);
        }

        const getCorrectAnswer = (question) => {
            return question.rightAnswer
        }

        const displayData = (question) =>{
            const dataArray = question.answers;
            const questionParagraph = document.getElementById("question");
            const answer1 = document.getElementById("answer5");
            const answer2 = document.getElementById("answer6");
            const answer3 = document.getElementById("answer7");
            const answer4 = document.getElementById("answer8");

            questionParagraph.innerHTML = question.question;
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
                localStorage.setItem('goodAnswersKey', goodAnswers )
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
                localStorage.setItem('badAnswersKey', badAnswers ) 
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

