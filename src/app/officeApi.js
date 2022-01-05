import { URL } from "../shared/config";

export const fetchCharacters = async () => {
    const url = `${URL}characters`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
    

export const fetchQuotes = async () => {
    const url = `${URL}quotes`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export const fetchEpisodes = async () => {
    const url = `${URL}episodes`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}