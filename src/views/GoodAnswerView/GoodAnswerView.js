import style from "./goodAnswer.styles.css"; 
import { elementFrom } from "../../shared/dom";


const templateHtml = ({data}) => {
    return ` <div class="whole-quiz">
        <div class="left-side">
            <img class="michael" src="" alt="Michael">
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



// Good answer //

export const GoodAnswerView = ({renderOn, data}) => {

    const element = elementFrom({html: templateHtml({data})});
    document.querySelector(renderOn).appendChild(element);
    
    const Answer1 = document.querySelector('.answer1')
    const Answer2 = document.querySelector('.answer2')
    const Answer3 = document.querySelector('.answer3')
    const Answer4 = document.querySelector('.answer4')

    let goodAnswers = 0;
    let badAnswers= 0;
    let answer = 'answer 1'
    
    const nextOne = () => {
        Answer1.classList.remove("answers-question-another")
        Answer2.classList.remove("answers-question-another")
        Answer3.classList.remove("answers-question-another")
        Answer4.classList.remove("answers-question-another") 
        Answer1.classList.remove("answer-good")
        Answer2.classList.remove("answer-good")
        Answer3.classList.remove("answer-good")
        Answer4.classList.remove("answer-good")
        Answer1.classList.remove("answer-bad")
        Answer2.classList.remove("answer-bad")
        Answer3.classList.remove("answer-bad")
        Answer4.classList.remove("answer-bad")
    }    

    const givenAnswer1 = () =>{
        let choosenAnswer1 = document.querySelector('.answer1').textContent
          
        if(answer === choosenAnswer1){
            Answer1.classList.add("answer-good")  
        
            goodAnswers++
            sessionStorage.setItem('goodAnswersKey', goodAnswers ) 

        }
        else{
            Answer1.classList.add("answer-bad")
            badAnswers++;
            sessionStorage.setItem('badAnswersKey', badAnswers ) 
            
        }  
            Answer2.classList.add("answers-question-another")
            Answer3.classList.add("answers-question-another")
            Answer4.classList.add("answers-question-another")
            setTimeout(function() { nextOne(); }, 500)
    }

    const givenAnswer2 = () =>{
        let choosenAnswer2 = document.querySelector('.answer2').textContent
        
        if(answer === choosenAnswer2){
            Answer2.classList.add("answer-good")
            goodAnswers++
            sessionStorage.setItem('goodAnswersKey', goodAnswers ) 
    
        }
        else{
            Answer2.classList.add("answer-bad");
            badAnswers++
            sessionStorage.setItem('badAnswersKey', badAnswers ) 
        }  
            Answer3.classList.add("answers-question-another")
            Answer4.classList.add("answers-question-another")
            Answer1.classList.add("answers-question-another")
            setTimeout(function() { nextOne(); }, 500)

    }

    const givenAnswer3 = () =>{
        let choosenAnswer3 = document.querySelector('.answer3').textContent
        
        if(answer === choosenAnswer3){
            Answer3.classList.add("answer-good")
            goodAnswers++
            sessionStorage.setItem('goodAnswersKey', goodAnswers ) 
        }
        else{
            Answer3.classList.add("answer-bad");
            badAnswers++
            sessionStorage.setItem('badAnswersKey', badAnswers ) 
        }  
            Answer1.classList.add("answers-question-another")
            Answer2.classList.add("answers-question-another")
            Answer4.classList.add("answers-question-another")
            setTimeout(function() { nextOne(); }, 500)
    }

    const givenAnswer4 = () =>{
        let choosenAnswer4 = document.querySelector('.answer4').textContent
        
        if(answer === choosenAnswer4){
            Answer4.classList.add("answer-good")
            goodAnswers++
            sessionStorage.setItem('goodAnswersKey', goodAnswers ) 
        }
        else{
            Answer4.classList.add("answer-bad")
            badAnswers++
            sessionStorage.setItem('badAnswersKey', badAnswers ) 
        }  
            Answer4.classList.add("answers-question-another")
            Answer3.classList.add("answers-question-another")
            Answer1.classList.add("answers-question-another")
            setTimeout(function() { nextOne(); }, 500)
    }
    Answer1.addEventListener('click', givenAnswer1)
    Answer2.addEventListener('click', givenAnswer2)
    Answer3.addEventListener('click', givenAnswer3)
    Answer4.addEventListener('click', givenAnswer4)
 

}

