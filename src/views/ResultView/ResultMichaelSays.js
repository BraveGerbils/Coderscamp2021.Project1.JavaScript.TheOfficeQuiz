export const ResultMichaelSays = () => {
        
    // to samo jest w komponencie wyższym czyli w ResultView, można byłoby to po prostu przesłać jako argumewnty funkcji, w tym momencie podwójnie się wykonuje kod, niepotrzebne powtórzenie
    const resultQuotes = document.getElementById('result-quote');
    let hit = Number(localStorage.getItem("goodAnswersKey"))
    let missed = Number(localStorage.getItem("badAnswersKey"))
    let questions = hit + missed
    let userScore = (hit * 100) / questions;

    //arrays with sentences describing user score
    const resultArrayPerfect = ["Now that’s what I call a finejob.", "Couldn’t have done it better myself.",
        "That was first class work.", "You must have been practicing.", "Good remembering!", "Marvelous!"];
    const resultArrayMid = ["You managed somehow.", "If I were you, I wouldn't be happy.",
        "A result like a high school student.", "Maybe check The Office again.", "I have an idea for you: play again."];
    const resultArrayBad = ["It was amateurish.", "Try harder.", "Did you really watch The Office?",
        "That was easy to predict.", "Really?", "It was a failure."]

    
    if (userScore <= 30) {
        let random = Math.floor(Math.random() * resultArrayBad.length);
        resultQuotes.innerHTML = resultArrayBad[random];
    } else if (userScore <= 70) {
        let random = Math.floor(Math.random() * resultArrayMid.length)
        resultQuotes.innerHTML = resultArrayMid[random];
    } else if (userScore > 70) {
        let random = Math.floor(Math.random() * resultArrayPerfect.length)
        resultQuotes.innerHTML = resultArrayPerfect[random];
    }
}