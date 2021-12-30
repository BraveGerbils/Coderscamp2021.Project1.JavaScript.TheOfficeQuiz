import style from "./navigationView.styles.css";
//import style from "./timerView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `<div id="office-app" class="office-app">
                <div class="office-header">
                    <div class="office-logo">
                    </div>
                </div>
                <div class="office-content">
                    <div class="office-bar-left">
                    </div>
                    <div class="office-main-body">
                        <div class="office-gamemode-bar">
                            <button class="office-bar-mode">Character</button>
                            <button class="office-bar-mode">Quote</button>
                            <button class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body">
                            <div class="office-gamemode-content">
                                <div class="office-gamemode-body-content">
                                    <div class="office-gamemode-body-title">
                                        <p>Can you guess what Character it is?</p>
                                    </div>
                                    <div class="office-gamemode-body-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                    </div>
                                </div>
                                <div class="office-gamemode-character-template">
                                    <div class="office-gamemode-character-template-img">
                                    </div>
                                </div>
                            </div>
                            <div class="office-gamemode-buttons">
                                <div class="office-gamemode-halloffame">
                                    <button>Hall of fame</button>
                                </div>
                                <div class="office-gamemode-playbutton">
                                    <button class="clock-start" id="start">Play</button>
                                </div>
                                <div>
                                    <div class="clock">
                                        <button class="clock-end" title="restart time">${data.buttonEnd}</button>
                                    <div class="clock-display">
                                        <div class="clock-displayWrap">
                                            <div class="clock-displayMin" id="clock-displayMin">${data.displayMin}</div>
                                            <div class="clock-displaySec" id="clock-displaySec">${data.displaySec}</div>
                                        </div>
                                        <div class="clock-displayWrap">
                                            <p class="clock-paragraphMin clock-paragraph">${data.paragraphMin}</p>
                                            <p class="clock-paragraphSec clock-paragraph">${data.paragraphSec}</p>
                                        </div>
                                    </div>
                                    <div class="clock-btnWrap">
                                        <button class="clock-btn clock-addMin">${data.plusBtn}</button>
                                        <button class="clock-btn clock-remMin">${data.minBtn}</button>
                                        <button class="clock-btn clock-addSec">${data.plusBtn}</button>
                                        <button class="clock-btn clock-remSec" >${data.minBtn}</button>
                                    </div>
                                        <div class="clock-bckg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="office-bar-right">
                    </div>
                </div>
            </div>
            `
}

export const NavigationView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    console.log(element)

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn)

    // const button = document.getElementById("nav-button");
    // button.addEventListener("click", () => {console.log("clicked")});
}
