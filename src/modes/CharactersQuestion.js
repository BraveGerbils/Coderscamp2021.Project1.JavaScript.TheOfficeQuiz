import {randomAnswersArray} from "./RandomAnswersArray";
import {getRandomElement} from "./Random";
// żeby poprawnie zwrócić fotkę do pytania nalezy:
// 1. zadbać, by nazwa pliku w assets była identyczna jak to co zwracamy, dlatego dodałem toLowerCase, bo pliki jpg w tym folderze bły z małej litery
// 2. zwracamy tylko właśnie to imię, bo po przekopiowaniu plików z assets do /dist, z którego potem są brane te pliki, ściezka wygląda właśnie tak, bo pliki sa bezpośrednio w folderze

//Get an object with random question and answer info about characters
export const charactersQuestion = (charactersData) => {
    const randomPeople = randomAnswersArray(charactersData, 'character');
    const rightAnswer = getRandomElement(randomPeople);

    return {
            answersIds: randomPeople.map((element) => {return(element._id)}),
            answers: randomPeople.map((element) => {return(element.firstname + ' ' + element.lastname)}),
            rightAnswer: rightAnswer.firstname + ' ' + rightAnswer.lastname,
            rightAnswerId: rightAnswer._id,
            question: `${rightAnswer.firstname.toLowerCase()}.jpg`
        }
}