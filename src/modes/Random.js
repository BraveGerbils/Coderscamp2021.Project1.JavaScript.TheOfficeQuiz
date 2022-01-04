//Create random number from 0 to max 
const generateRandomNumber = (max) =>  {
    return Math.floor(Math.random() * (max));
};


//Get random element from an array
export const getRandomElement = (modeArray) => {
    return modeArray[generateRandomNumber(modeArray.length)]
}