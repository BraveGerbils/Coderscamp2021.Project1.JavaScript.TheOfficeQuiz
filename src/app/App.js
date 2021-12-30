import { NavigationView } from "../views/NavigationView/NavigationView";
import { TimerView } from "../views/TimerView/TimerView.js";
import { ResultView } from "../views/ResultView/ResultView";

export const App = ({renderOn}) => {
    

    const navigationData = {

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

    // TimerView({renderOn: renderOn, data: clockData});

    // const resultData = {
       
    // }

    ResultView({renderOn: renderOn, data: resultData});
}