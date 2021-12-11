import { fetchCharacters} from "./officeApi";
import { goodAnswer} from "../views/goodAnswer/goodAnswer";

export const App = ({renderOn}) => {
        
 
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

   
  
    goodAnswer({renderOn: renderOn, data:questionsData});

}