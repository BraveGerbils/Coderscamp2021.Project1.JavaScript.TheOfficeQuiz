
import { NavigationView } from "../views/NavigationView/NavigationView";
// niepotrzebny import
import { fetchCharacters, fetchQuotes, fetchEpisodes} from "./officeApi";
import {TimerView} from "../views/TimerView/TimerView.js";
import { ResultView } from "../views/ResultView/ResultView";
import {GoodAnswerView} from "../views/GoodAnswerView/GoodAnswerView";
import { ResultSave } from "../views/ResultView/ResultSave";
import { CharactersGoodAnswerView } from "../views/CharactersGoodAnswer/charactersGoodAnswerView";



export const App = ({renderOn}) => {
    
    // poniższa zmienna, pomimo, że jest wysyłan do komponentu navigationView, nie jest w ogóle wykorzystywana

    const navigationData = {
        buttonCategory1: "category 1",
        buttonCategory2: "category 2",
        buttonCategory3: "category 3",
        questionWindow: "question",
        buttonAnswer1: "answer 1",
        buttonAnswer2: "answer 2",
        buttonAnswer3: "answer 3",
        buttonAnswer4: "answer 4",
    }
    
    NavigationView({renderOn: renderOn, data: navigationData}) 


// myslę, że lepiej było te dane trzymać w samym komponencie z zegarem, ponieważ tutaj jest na sztywno wpisane 30 sekund, a w komponencie z
// zegarem jest tam zmienna, która przetrzymuje faktyczną ilość sekund, co sprawia, że jak zmienię tam np na 50, a tutaj nie, to wyświetlać się będzie dalej 30, a faktycznie bedzie 50
// nalezy zdecydowanie unikać tego typu powiązań, zamiast tutaj wpisywania na sztywno 30 możnaby użyćzmiennej z komponentu timerView, a tym bardziej unikać takich powiązań w różnych plikach czy nawet funkcjach 
const clockData = {
        buttonStart: "START",
        buttonEnd: '🦄',
        displayMin: "00",
        displaySec:"30",
        paragraphMin: "minutes",
        // seconds :D
        paragraphSec: "secundes",
        plusBtn: "+",
        minBtn: "-",
    }
  

    //po raz kolejny niepotrzebna zmienna, tutaj jeszcze bardziej niebezpiecznie, bo w komponencie charactersGoodAnswerView.js są wykorzystywane wartości buttonAnswer!, których tutaj nie ma
    
    const questionsData = {
        buttonCategory1: "category 1",
        buttonCategory2: "category 2",
        buttonCategory3: "category 3",
        // questionWindow: "question",
        // buttonAnswer1: "answer 1",
        // buttonAnswer2: "answer 2",
        // buttonAnswer3: "answer 3",
        // buttonAnswer4: "answer 4",
    }


   CharactersGoodAnswerView({renderOn: renderOn, data:questionsData}); 
    
    GoodAnswerView({renderOn: renderOn, data:questionsData});
    
    TimerView({renderOn: renderOn, data: clockData});
   
    // do resulatData i saveData, po co te puste obiekty wysyłać do funkcji?

    const resultData = {
       
    }

    ResultView({renderOn: renderOn, data: resultData});
    
    //komentarz do wywalenia, nie powinno się trzymac komenatrzy w kodzie

    // const urlOffice = 'https://officeapi.dev/api/characters/random';
    // fetchCharacters();
    // fetchQuotes();
    // fetchEpisodes();

    const saveData = {
       
    }

    ResultSave({renderOn: renderOn, data: saveData});

}
