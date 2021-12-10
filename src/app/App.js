import { NavigationView } from "../views/NavigationView/NavigationView";
import {TimerView} from "../views/TimerView/TimerView.js";

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
        paragraphMin: "minuty",
        paragraphSec: "sekundy",
        plusBtn: "+",
        minBtn: "-",
    }

    TimerView({renderOn: renderOn, data: clockData});


}