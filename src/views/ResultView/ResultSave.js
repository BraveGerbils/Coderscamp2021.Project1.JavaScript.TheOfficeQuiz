import { ResultSaveDate } from "./ResultSaveDate";


export const ResultSave = () => {

    const result = document.querySelector('.result')
    const answerBoxes = document.querySelectorAll('.answers-question');
    const userScoreArr = [];
    
    const saveResult = document.getElementById('result-save').addEventListener('click', function () {
        let hit = Number(localStorage.getItem("goodAnswersKey"))
        let missed = Number(localStorage.getItem("badAnswersKey"))
        let questions = hit + missed
        let userScore = (hit * 100) / questions;
        let userName = document.getElementById('result-nameId').value
        let dateTime = ResultSaveDate()
        let score = `${dateTime}. Imię gracza: ${userName || "nieznane"}. Kategoria: cytaty.  Ilość punktów: ${hit}. Ilość pytań: ${questions}. 
        Wynik użytkownika: ${userScore || 0}%.`
        
        userScoreArr.push(score);
        localStorage.setItem("userScore", userScoreArr)
        result.style.display = "none";
        answerBoxes.forEach(answer => { answer.style.filter = "blur(0px)"; answer.disabled = false})
        console.log(userScoreArr)
        localStorage.removeItem("goodAnswersKey")
        localStorage.removeItem("badAnswersKey")
        
    })
 

}

