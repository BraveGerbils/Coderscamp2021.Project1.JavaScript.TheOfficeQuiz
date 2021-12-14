import { NavigationView } from "../views/NavigationView/NavigationView";
import {TimerView} from "../views/TimerView/TimerView.js";
import { ResultView } from "../views/ResultView/ResultView";

export const App = ({renderOn}) => {

    const navigationData = {
        link1: "LINK1",
        link2: "LINK2",
        link3: "LINK3"
    }
    NavigationView({renderOn: renderOn, data: navigationData});


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
    
    const resultData = {
       
    }

    ResultView({renderOn: renderOn, data: resultData});

}