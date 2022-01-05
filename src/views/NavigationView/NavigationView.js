import style from "../GoodAnswerView/goodAnswer.styles.css"
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
                    <div id="charactersView" class="office-main-body">
                        <div class="office-gamemode-bar-quiz">
                            <button class="office-bar-mode">Character</button>
                            <button class="office-bar-mode">Quote</button>
                            <button class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body">
                            <div class="office-who radius">
                                <p>Who is this?</p>
                            </div>
                            <div class="office-gamemode-content-quiz">
                                <div class="office-gamemode-character-template-quiz">
                                    <div class="office-gamemode-character-template-img"></div>
                                </div>
                            </div>
                            <div class="answers">
                                <div class="answers-grid">
                                    <button class="answers-question radius" id="answer1"></button>
                                    <button class="answers-question radius" id="answer2"></button>
                                    <button class="answers-question radius" id="answer3"></button>
                                    <button class="answers-question radius" id="answer4"></button>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div id="quotesView" class="office-main-body">
                        <div class="office-gamemode-bar-quiz">
                            <button class="office-bar-mode">Character</button>
                            <button class="office-bar-mode">Quote</button>
                            <button class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body-quiz">
                            <div class="office-gamemode-body-left">
                                <div class="office-who-quiz radius">
                                    <p>Who said that?</p>
                                </div>
                                <div class="office-gamemode-body-text-quiz-quotes">
                                    <p class="office-gamemode-body-text-quiz-question" id="question"></p>
                                </div>
                                <div class="answers">
                                    <div class="answers-grid">
                                        <button class="answers-question radius" id="answer5"></button>
                                        <button class="answers-question radius" id="answer6"></button>
                                        <button class="answers-question radius" id="answer7"></button>
                                        <button class="answers-question radius" id="answer8"></button>
                                    </div>
                                </div>
                            </div>    
                            <div id="dissapearToo" class="office-gamemode-body-right">
                                <div class="office-gamemode-character-template-img-quiz"></div>
                            </div>
                        </div>
                    </div>
                    <div id="dissapear" class="office-main-body">
                        <div class="office-gamemode-bar">
                            <button id="characters" class="office-bar-mode">Character</button>
                            <button id="quotes" class="office-bar-mode">Quote</button>
                            <button id="additional" class="office-bar-mode">Additional</button>
                        </div>
                        <div class="office-gamemode-body">
                            <div class="office-gamemode-content ">
                                <div class="office-gamemode-body-content">
                                    <div class="office-gamemode-body-title">
                                        <p>Can you guess what Character it is?</p>
                                    </div>
                                    <div class="office-gamemode-body-text">
                                        <p>This gamemode require visual knowledge of Characters that appears in The Office! You will have to choose the correct name matching the visible image of this person!</p>
                                        </br>
                                        <p>To start a game you need to pick amount of time you want to have for a round in the top-rght corner Clock and then press PLAY button below</p>
                                    </div>
                                </div>
                                <div class="office-gamemode-body-content-quotes">
                                    <div class="office-gamemode-body-title">
                                        <p>Can you guess which character said that?</p>
                                    </div>
                                    <div class="office-gamemode-body-text">
                                        <p>This gamemode require visual knowledge of quotes that appears in The Office! You will have to choose the correct person's name matching the quote!</p>
                                        </br>
                                        <p>To start a game you need to pick amount of time you want to have for a round in the top-rght corner Clock and then press PLAY button below</p>
                                    </div>
                                </div>
                                <div class="office-gamemode-body-content-additional">
                                    <div class="office-gamemode-body-title">
                                        <p>In progress...</p>
                                    </div>
                                </div>
                                <div class="office-gamemode-character-template">
                                    <div class="office-gamemode-character-template-img">
                                    </div>
                                </div>
                            </div>
                            <div id="dissapearToo" class="office-gamemode-buttons">
                                <div id= "playbutton-characters" class="office-gamemode-playbutton">
                                    <button class="clock-start" id="start">Play</button>
                                </div>
                                <div id= "playbutton-quotes" class="office-gamemode-playbutton-quotes">
                                    <button class="clock-start" id="startQuotes">Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="office-bar-right"></div>
                </div>
            </div>
            `
}

export const NavigationView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    console.log(element)

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn)

    const playButton = document.getElementById("start");
    playButton.addEventListener("click", () => {
    document.getElementById("charactersView").classList.add('playGame');
    document.getElementById("dissapear").classList.add('removeClass');
    document.getElementById("dissapearToo").classList.add('removeClass');
    
    });

    const playButtonQuotes = document.getElementById("startQuotes");
    playButtonQuotes.addEventListener("click", () => {
    document.getElementById("quotesView").classList.add('playGame');
    document.getElementById("dissapear").classList.add('removeClass');
    document.getElementById("dissapearToo").classList.add('removeClass');
    
    });

    const characters = document.getElementById("characters");
    characters.addEventListener("click", () => {
    document.querySelector(".office-gamemode-body-content-quotes").classList.remove('office-gamemode-body-content-quotes-active');
    document.querySelector(".office-gamemode-body-content").classList.remove('removeClass')
    document.querySelector(".office-gamemode-playbutton-quotes").classList.remove('office-gamemode-playbutton-quotes-active')
    document.getElementById("playbutton-characters").classList.remove('removeClass')
    document.querySelector(".office-gamemode-body-content-additional").classList.remove('office-gamemode-body-content-additional-active')
    });

    const quotese = document.getElementById("quotes");
    quotese.addEventListener("click", () => {
    document.querySelector(".office-gamemode-body-content-quotes").classList.add('office-gamemode-body-content-quotes-active');
    document.querySelector(".office-gamemode-body-content").classList.add('removeClass')
    document.querySelector(".office-gamemode-playbutton-quotes").classList.add('office-gamemode-playbutton-quotes-active')
    document.getElementById("playbutton-characters").classList.add('removeClass')
    document.querySelector(".office-gamemode-body-content-additional").classList.remove('office-gamemode-body-content-additional-active')
    });

    const additional = document.getElementById("additional");
    additional.addEventListener("click", () => {
    document.querySelector(".office-gamemode-body-content-additional").classList.add('office-gamemode-body-content-additional-active');
    document.querySelector(".office-gamemode-body-content").classList.add('removeClass')
    document.querySelector(".office-gamemode-playbutton-quotes").classList.remove('office-gamemode-playbutton-quotes-active')
    document.querySelector(".office-gamemode-body-content-quotes").classList.remove('office-gamemode-body-content-quotes-active');
    document.getElementById("playbutton-characters").classList.add('removeClass')
    });


    // const button = document.getElementById("nav-button");
    // button.addEventListener("click", () => {console.log("clicked")});
}
