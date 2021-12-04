import { NavigationView } from "../views/NavigationView/NavigationView";

export const App = ({renderOn}) => {

    const navigationData = {
        link1: "LINK1",
        link2: "LINK2",
        link3: "LINK3"
    }

    NavigationView({renderOn: renderOn, data: navigationData});

}