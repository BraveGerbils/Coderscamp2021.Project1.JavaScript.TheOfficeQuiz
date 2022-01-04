import {randomAnswersArray} from "./RandomAnswersArray";
import {getRandomElement} from "./Random";


//Get an object with random question and answer info about quotes
export const quotesQuestion = (quotesData) => {
    const randomQuotes = randomAnswersArray(quotesData, 'quote');
    const rightAnswer = getRandomElement(randomQuotes);

    return {
            answersIds: randomQuotes.map((element) => {return(element._id)}),
            answers: randomQuotes.map((element) => {return(element.character.firstname + ' ' + element.character.lastname)}),
            rightAnswer: rightAnswer.character.firstname + ' ' + rightAnswer.character.lastname,
            rightAnswerId: rightAnswer._id,
            question: rightAnswer.content
        }
}