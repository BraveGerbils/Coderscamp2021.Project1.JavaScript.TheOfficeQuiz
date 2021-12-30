import { NavigationView } from "../views/NavigationView/NavigationView";
import {charactersQuestion} from "../modes/CharactersQuestion";
import {quotesQuestion} from "../modes/QuotesQuestion";

export const App = ({renderOn}) => {
    const db = {characters: [
        {
        "_id": "5e93b4a43af44260882e33b0",
        "firstname": "Michael",
        "lastname": "Scott",
        "__v": 0
        },
        {
        "_id": "5e93b4f03af44260882e33b1",
        "firstname": "Jim",
        "lastname": "Halpert",
        "__v": 0
        },
        {
        "_id": "5e93b4fa3af44260882e33b2",
        "firstname": "Dwight",
        "lastname": "Schrute",
        "__v": 0
        },
        {
        "_id": "5e93b50a3af44260882e33b3",
        "firstname": "Pam",
        "lastname": "Beesly",
        "__v": 0
        },
        {
        "_id": "5e93b5183af44260882e33b4",
        "firstname": "Ryan",
        "lastname": "Howard",
        "__v": 0
        }
      ],

    quotes: [{
        "_id": "5e9665e06a66e65486e24498",
        "content": "There are certain things a boss does not share with his employees. His salary, that would depress them. His bed, it--- And I am not going to tell them that I'll be reading their e-mails.",
        "character": {
          "_id": "5e93b4a43af44260882e33b0",
          "firstname": "Michael",
          "lastname": "Scott",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e9665f76a66e65486e24499",
        "content": "Once every hour, someone is involved in an internet scam. That man is Michael Scott.",
        "character": {
          "_id": "5e93b50a3af44260882e33b3",
          "firstname": "Pam",
          "lastname": "Beesly",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e96661b6a66e65486e2449a",
        "content": "It's performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don't really know what to expect.",
        "character": {
          "_id": "5e93b50a3af44260882e33b3",
          "firstname": "Pam",
          "lastname": "Beesly",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e9666296a66e65486e2449b",
        "content": "I feel God in this Chili’s tonight.",
        "character": {
          "_id": "5e93b50a3af44260882e33b3",
          "firstname": "Pam",
          "lastname": "Beesly",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e9666336a66e65486e2449c",
        "content": "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
        "character": {
          "_id": "5e93b50a3af44260882e33b3",
          "firstname": "Pam",
          "lastname": "Beesly",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e96667c6a66e65486e2449d",
        "content": "Two eyes. Two ears. A chin. A mouth. Ten fingers. Two nipples. A butt, two kneecaps, a penis. I've just described to you the Loch Ness monster. And the reward for his capture? All the riches in Scotland. So I have one question: Why are you here?",
        "character": {
          "_id": "5e93b5813af44260882e33c0",
          "firstname": "Creed",
          "lastname": "Bratton",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e9666d76a66e65486e2449e",
        "content": "I am immensely proud of what I did for that turtle!",
        "character": {
          "_id": "5e93b5323af44260882e33b7",
          "firstname": "Kevin",
          "lastname": "Malone",
          "__v": 0
        },
        "__v": 0
      },
      {
        "_id": "5e96672e6a66e65486e2449f",
        "content": "I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day.",
        "character": {
          "_id": "5e93b54d3af44260882e33ba",
          "firstname": "Stanley",
          "lastname": "Hudson",
          "__v": 0
        },
        "__v": 0
      }] 
    } 
    
    const newQuoteQuestion = quotesQuestion(db.quotes)
    const newCharacterQuestion = charactersQuestion(db.characters)


    console.log(newQuoteQuestion)
    console.log(newCharacterQuestion)
    
    const navigationData = {
        question1: `${newQuoteQuestion.question}`,
        answer1: `${newQuoteQuestion.answers[0]}`,
        answer2: `${newQuoteQuestion.answers[1]}`,
        answer3: `${newQuoteQuestion.answers[2]}`,
        answer4: `${newQuoteQuestion.answers[3]}`
    }

    NavigationView({renderOn: renderOn, data: navigationData});

}