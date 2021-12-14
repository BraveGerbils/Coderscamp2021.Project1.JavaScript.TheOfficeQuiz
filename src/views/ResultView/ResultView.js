import style from "./resultView.styles.css";
import { elementFrom } from "../../shared/dom";

const templateHtml = ({data}) => {
    return `<div>
   <div class="result-Wrp> 
        <


</div>`

}


    export const ResultView = ({renderOn, data}) => {
        const element = elementFrom({html: templateHtml({data})});
        console.log(element)
    
        document.querySelector(renderOn).appendChild(element);
        console.log(renderOn)





    }