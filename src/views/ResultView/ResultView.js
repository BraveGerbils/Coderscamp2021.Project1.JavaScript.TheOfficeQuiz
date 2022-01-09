import style from "./resultView.styles.css";
import { elementFrom } from "../../shared/dom";
import { ResultMichaelSays } from "./ResultMichaelSays";
//nieużywany import
import { TimerView } from "../TimerView/TimerView";


const templateHtml = ({ data }) => {
    return `
    <div id="result" class="result"> 
        <button id="result-escBtn" class="result-esc">X</button>
        
        <h2 class="result-heading">GAME OVER!</h2>
        
        <div class="result-wrp">
            <img class="result-dwightImg">
            <div class="result-paragraphs">
                <p class="result-parag">Your playing time is: <span class="result-span" id="result-time"></span></p>
                <p class="result-parag parag">In the chosen time you have got 
                <span class="result-span" id="result-points"></span> 
                correct answers for 
                <span class="result-span" id="result-questions"></span> 
                questions.
                </p>
            </div>
            
        </div>
        <p class="result-quote">Michael says: 
        <span id="result-quote"></span>
</div>`
}

export const ResultView = ({ renderOn, data }) => {
    const element = elementFrom({ html: templateHtml({ data }) });
    document.querySelector(renderOn).appendChild(element);

    //button "X" - turn off result element
    const escapeBtn = document.getElementById('result-escBtn');
    escapeBtn.addEventListener('click', function () {
        element.style.display = "none";
        localStorage.removeItem("goodAnswersKey")
        localStorage.removeItem("badAnswersKey")
        history.go();
    });

    let hit;
    let missed;
    let questions;
    //nieużywana zmienna
    let userScore;
    let minutes;
    let secundes;
    let totalTime;
    const answerBoxes = document.querySelectorAll('.answers-question');//from GoodAnswerView
    const resultPoints = document.getElementById('result-points');
    const resultQuestions = document.getElementById('result-questions');
    const resultQuotes = document.getElementById('result-quote');

    //obie zmienne start nieużywane i generalnie słabe nazwy, lepiej byłoby startCountingCharacters i startCountingQuotes
    //start element 
    const start = document.getElementById('start').addEventListener('click', counting)
    const start2= document.getElementById('startQuotes').addEventListener('click', counting)

     function counting () {
    
        let countTimeInterval = setInterval(showResult, 1000);
       
        minutes = document.getElementById('clock-displayMin').innerText;
        secundes = document.getElementById('clock-displaySec').innerText;
        totalTime = Number(minutes * 60) + Number(secundes);

        if (secundes == 0 && totalTime == 0) {
            clearInterval(countTimeInterval);
        }
        
        // zdecydowanie lepiej by było, gdyby ta funkcja była na zewnątrz counting 
        // dodatkowo myslę, ze lepszym rozwiązaniem byłoby nazwanie jej "countSeconds" a gdyby czas się skończy to wtedy to co jest w linijkach 84 do 109 wrzucić w funkcję showResult bo ten kawałek kodu faktycznie to robi
        // a jeszcze lepszym rozwiązaniem, który znacznie zmniejszył by kod w projekcie, byłoby tutaj umieszcze odpowiedniej funkcji, która pokazuje wynik i wywołanie jej z miejsca, w którym jest liczony czas. Wtedy tutaj nie trzeba byłoby niepotrzebne liczyć ponownie upływającego czasu.
        
        function showResult() {
            totalTime--;
           
            //if time is up 
            if (totalTime <= 0) {
                answerBoxes.forEach(answer => { answer.style.filter = "blur(4px)"; answer.disabled = true })
                
                // wiem, że w localStorage jest string, a tutaj porównujemy do number dlatego == a nie ===, ale lepiej i bezpieczniej jest zawsze korzystać z ===, wtedy nie ma rzutowania typów w trakcie porównywania co jest duzo bezpieczniejsze i mniej niekontrolowane
                
                //if the user dont click for any answer, show 0 points 0 questions
                if (localStorage.goodAnswersKey == 0 && localStorage.badAnswersKey == 0) {
                    const resultParag = document.querySelector('.parag');
                    resultParag.innerHTML = "You don't gave any answers yet";
                    resultQuotes.innerHTML = "I know that it's hard to understand, but you must just answer the questions.";
                }

               // if the user click some answers - show them on result element
                hit = Number(localStorage.getItem("goodAnswersKey"))
                missed = Number(localStorage.getItem("badAnswersKey"))
                resultPoints.innerHTML = hit;
                questions = hit + missed
                resultQuestions.innerHTML = questions;

                //displaying result time in the result element 
                const resultTime = document.getElementById('result-time');
                resultTime.innerHTML = "minutes " + minutes + ", secundes " + secundes + ".";

                ResultMichaelSays();

                setTimeout(() => { element.style.display = "block" }, 1000);
                clearInterval(countTimeInterval);
                
            }
        
            
        }
       
  
    }
    
}
