import { NavigationView } from "../views/NavigationView/NavigationView";
import { fetchCharacters, fetchQuotes, fetchEpisodes} from "./officeApi";

export const App = ({renderOn}) => {
    
    const urlOffice = 'https://officeapi.dev/api/characters/random';
    const navigationData = {
        link1: "LINK1",
        link2: "LINK2",
        link3: "LINK3"
    }
    fetchCharacters();
    fetchQuotes();
    fetchEpisodes();

    NavigationView({renderOn: renderOn, data: navigationData});

}