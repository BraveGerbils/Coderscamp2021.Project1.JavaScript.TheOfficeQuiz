import style from "./navigationView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `<nav>
                <a class="link">${data.link1}</a>
                <a class="link">${data.link2}</a>
                <a class="link">${data.link3}</a>
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