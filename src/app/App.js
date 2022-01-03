
import { NavigationView } from "../views/NavigationView/NavigationView";
import { fetchCharacters, fetchQuotes, fetchEpisodes} from "./officeApi";
import {TimerView} from "../views/TimerView/TimerView.js";
import { ResultView } from "../views/ResultView/ResultView";
import {GoodAnswerView} from "../views/GoodAnswerView/GoodAnswerView";
import { ResultSave } from "../views/ResultView/ResultSave";



export const App = ({renderOn}) => {
        
    const clockData = {
        buttonStart: "START",
        buttonEnd: '🦄',
        displayMin: "00",
        displaySec:"00",
        paragraphMin: "minutes",
        paragraphSec: "secundes",
        plusBtn: "+",
        minBtn: "-",
    }

    TimerView({renderOn: renderOn, data: clockData});

    const questionsData = {
        buttonCategory1: "category 1",
        buttonCategory2: "category 2",
        buttonCategory3: "category 3",
        questionWindow: "question",
        buttonAnswer1: "answer 1",
        buttonAnswer2: "answer 2",
        buttonAnswer3: "answer 3",
        buttonAnswer4: "answer 4",
    }
   
    GoodAnswerView({renderOn: renderOn, data:questionsData});


   
    
    const resultData = {
       
    }

    ResultView({renderOn: renderOn, data: resultData});
    
    const urlOffice = 'https://officeapi.dev/api/characters/random';
    const navigationData = {
        link1: "LINK1",
        link2: "LINK2",
        link3: "LINK3"
    }
    fetchCharacters();
    fetchQuotes();
    fetchEpisodes();

    const saveData = {
       
    }


    ResultSave({renderOn: renderOn, data: saveData});

}
