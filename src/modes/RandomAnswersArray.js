import {getRandomElement} from "./Random";


// Create random 4 answers array for two modes
export const randomAnswersArray = (modeArray, mode) => {
    const chosenMode = mode;
    const randomAnswers = [];
    const chosenCharacters = [];

    for(let i = 0; i < 4; i++){
        let answer = getRandomElement(modeArray);
        
        if(chosenMode === 'character'){
            while (randomAnswers.includes(answer)){
                answer = getRandomElement(modeArray);
            }
        }

        if (chosenMode === 'quote'){
            while (chosenCharacters.includes(answer.character.firstname) || randomAnswers.includes(answer)){
                answer = getRandomElement(modeArray);
            }
            chosenCharacters.push(answer.character.firstname);
        }

        randomAnswers.push(answer);
    }
    return randomAnswers;
    
}


