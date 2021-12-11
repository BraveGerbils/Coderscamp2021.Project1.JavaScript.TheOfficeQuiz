import style from "./navigationView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `<div id="office-app" class="office-app">
                <div class="office-header">
                    <a class="office-logo" href="/index.html">
                        <img class="office-logo" src="static/ui/office-logo-image.png" alt="Office Logo Image"/>
                    </a>
                </div>
                <div class="office-content">
                    <div class="office-bar-left">
                        <p>left bar</p>
                    </div>
                    <div class="office-main-body">
                        <div class="office-gamemode-bar">
                            <p class="office-bar-mode">Character</p>
                            <p class="office-bar-mode">Quote</p>
                            <p class="office-bar-mode">Additional</p>
                        </div>
                        <div class="office-gamemode-body">
                            <div class="office-gamemode-content">
                                <div class="office-gamemode-body-content">
                                    <div class="office-gamemode-body-title">
                                        <p>Can you guess what Character it is?</p>
                                    </div>
                                    <div class="office-gamemode-body-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <a class="office-gamemode-character-template">
                                    <img class="office-gamemode-character-template-img" src="static/images/character-template-img.jpg" alt="Character template Image"/>
                                </a>
                            </div>
                            <div class="office-gamemode-buttons">
                                <div class="office-gamemode-playbutton">
                                    <p>Play</p>
                                </div>
                                <div class="office-gamemode-halloffame">
                                    <p>Hall of fame</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="office-bar-right">
                        <p>right bar</p>
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