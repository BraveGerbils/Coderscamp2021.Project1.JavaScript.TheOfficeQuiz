import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";

window.onload = () => App({renderOn: "#root"});

/*
const underline = document.querySelector('.underline')
const myNav = document.querySelectorAll('.categories a')

const workingLine = (e) =>{
    underline.style.left = e.offsetLeft +"px";
    underline.style.width = e.offsetWidth +"px";
}

myNav.forEach(link =>{
    link.addEventListener('mouseover', (e)=>{
        workingLine(e.target);
    })
})

*/

// Good answer //

const category1 = document.querySelector('.categories-first')
const category2 = document.querySelector('.categories-second')
const category3 = document.querySelector('.categories-third')
const goodAnswer = document.querySelector('.good-answer')
const badAnswer1 = document.querySelector('.bad-answer:nth-child(2)');
const badAnswer2 = document.querySelector('.bad-answer:nth-child(3)');
const badAnswer3 = document.querySelector('.bad-answer:nth-child(4)')
const nextButton = document.querySelector('.next-question')


const ans = document.querySelector('.answers-question')


const goodOne = () => {
    console.log('good')
    goodAnswer.classList.add("answer-good");
    if(goodAnswer.classList.contains("answer-good")){
        badAnswer1.classList.add("answers-question-another")
        badAnswer2.classList.add("answers-question-another")
        badAnswer3.classList.add("answers-question-another")
        nextButton.classList.add("next-question-visible")
    }
}

const badOne1 = () => {
    console.log('bad')
    badAnswer1.classList.add("answer-bad")
    if(badAnswer1.classList.contains("answer-bad")){
        goodAnswer.classList.add("answers-question-another")
        badAnswer2.classList.add("answers-question-another")
        badAnswer3.classList.add("answers-question-another")
        nextButton.classList.add("next-question-visible")
    }
}

const badOne2 =() => {
    console.log('bad')
    badAnswer2.classList.add('click', "answer-bad")
    if(badAnswer2.classList.contains("answer-bad")){
        goodAnswer.classList.add("answers-question-another")
        badAnswer1.classList.add("answers-question-another")
        badAnswer3.classList.add("answers-question-another")
        nextButton.classList.add("next-question-visible")
    }
}



const badOne3 =() => {
    console.log('bad')
    badAnswer3.classList.add('click',"answer-bad" )
    if(badAnswer3.classList.contains("answer-bad")){
        goodAnswer.classList.add("answers-question-another")
        badAnswer1.classList.add("answers-question-another")
        badAnswer2.classList.add("answers-question-another")
        nextButton.classList.add("next-question-visible")
    }
}

const nextOne =() => {
    console.log('next')
    goodAnswer.classList.remove("answers-question-another")
    badAnswer1.classList.remove("answers-question-another")
    badAnswer2.classList.remove("answers-question-another")
    badAnswer3.classList.remove("answers-question-another") 
    nextButton.classList.remove("next-question-visible") 
    goodAnswer.classList.remove("answer-good");
    badAnswer1.classList.remove("answer-bad")
    badAnswer2.classList.remove("answer-bad")
    badAnswer3.classList.remove("answer-bad")
}


goodAnswer.addEventListener('click', goodOne)
badAnswer1.addEventListener('click', badOne1)
badAnswer2.addEventListener('click', badOne2)
badAnswer3.addEventListener('click', badOne3)

nextButton.addEventListener('click', nextOne)

/*
for(let badAnswere of badAnsweres){
    console.log('bad')
}

const badOne = Array.from(badAnswers).forEach(function(el) {
  console.log('bad')

});
*/

//End of good answer //
