import { URL } from "../shared/config";

export const fetchCharacters = async () => {
    const url = `${URL}characters`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

export const fetchQuotes = async () => {
    const url = `${URL}quotes`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}


export const fetchEpisodes = async () => {
    const url = `${URL}episodes` ;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}