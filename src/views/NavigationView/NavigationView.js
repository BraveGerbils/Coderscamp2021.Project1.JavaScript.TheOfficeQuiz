import style from "./navigationView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `<nav>
                <ul>
                    <p>${data.question1}</p>
                    <li>${data.answer1}</li>
                    <li>${data.answer2}</li>
                    <li>${data.answer3}</li>
                    <li>${data.answer4}</li>
                </ul>
                <button id="nav-button">BUTTON</button>
            </nav>`
}

export const NavigationView = ({renderOn, data}) => {
    const element = elementFrom({html: templateHtml({data})});
    console.log(element)

    document.querySelector(renderOn).appendChild(element);
    console.log(renderOn)

    const button = document.getElementById("nav-button");
    button.addEventListener("click", () => {console.log("clicked")});
}