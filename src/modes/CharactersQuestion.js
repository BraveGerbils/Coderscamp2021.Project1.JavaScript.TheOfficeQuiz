import {randomAnswersArray} from "./RandomAnswersArray";
import {getRandomElement} from "./Random";


//Get an object with random question and answer info about characters
export const charactersQuestion = (charactersData) => {
    const randomPeople = randomAnswersArray(charactersData, 'character');
    const rightAnswer = getRandomElement(randomPeople);

    return {
            answersIds: randomPeople.map((element) => {return(element._id)}),
            answers: randomPeople.map((element) => {return(element.firstname + ' ' + element.lastname)}),
            rightAnswer: rightAnswer.firstname + ' ' + rightAnswer.lastname,
            rightAnswerId: rightAnswer._id,
            question: `/static/assets/img/characters/${rightAnswer.firstname}.jpg`
        }
}