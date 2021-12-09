import { NavigationView } from "../views/NavigationView/NavigationView";
import { fetchCharacters} from "./officeApi";

export const App = ({renderOn}) => {
    
    const urlOffice = 'https://officeapi.dev/api/characters/random';
    const urlStarWars = 'https://swapi.dev/api/people/1';
    const navigationData = {
        link1: "LINK1",
        link2: "LINK2",
        link3: "LINK3"
    }
    fetchCharacters(urlOffice);
    fetchCharacters(urlStarWars);

    NavigationView({renderOn: renderOn, data: navigationData});

}