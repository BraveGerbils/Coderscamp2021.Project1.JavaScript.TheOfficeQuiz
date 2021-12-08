
//function for wraping all project
function showTime() {

    //display queryselectors
    const displayMin = document.querySelector('.clock-displayMin');
    const displaySec = document.querySelector('.clock-displaySec');
    const clockBckg = document.querySelector('.clock-bckg');

    //buttons queryselectors
    const plusMin = document.querySelector('.clock-plusMin');
    const remMin = document.querySelector('.clock-remMin');
    const plusSec = document.querySelector('.clock-plusSec');
    const remSec = document.querySelector('.clock-remSec');
    const start = document.querySelector('.start');
    const end = document.querySelector('.end');

    //arrays and integers for if statements in function makeNumber
    let secundArr = [];
    let minuteArr = [];
    let num = 0;
    let i = 0;

    //adding function makeNumber for buttons
    plusMin.addEventListener('click', makeNumber);
    plusSec.addEventListener('click', makeNumber);
    remMin.addEventListener('click', makeNumber)
    remSec.addEventListener('click', makeNumber)
    start.addEventListener('click', makeNumber);
    end.addEventListener('click', makeNumber);

    //function displaying numbers, calculating total time, and ending game
    function makeNumber(e) {
        let classes = e.target.className;

        //Adding and removing + displaying minutes
        if (classes == "clock-btn clock-plusMin") {
            num++
            minuteArr.push(num)
            let minute = minuteArr.length
            displayMin.innerText = minute.toString().padStart(2, '0');
            if (minute >= "100") {
                displayMin.innerText = "00"
                minuteArr.length = 0;
            }
        }
        if (classes == 'clock-btn clock-remMin') {
            if (displayMin.innerText == "00") {
                minuteArr.length = 100;
            }
            if (minute >= 99) {
                displayMin.innerText = minute.toString().padStart(2, '0');
            }
            num--
            minuteArr.pop()
            let minute = minuteArr.length
            displayMin.innerText = minute.toString().padStart(2, '0');
        }

        //Adding and removing + displaying secunds
        if (classes == 'clock-btn clock-plusSec') {
            i++
            secundArr.push(i)
            let secund = secundArr.length
            displaySec.innerText = secund.toString().padStart(2, '0');
            if (secund >= "60") {
                displaySec.innerText = "00"
                secundArr.length = 0
            }   
        }
        if (classes == 'clock-btn clock-remSec') {
            if (displaySec.innerText == "00") {
                secundArr.length = 60;
            }
            if (secund >= 59) {
                displaySec.innerText = secund.toString().padStart(2, '0');
            }
            i--
            secundArr.pop()
            let secund = secundArr.length
            displaySec.innerText = secund.toString().padStart(2, '0');
        }
     
        let totalTime = secundArr.length + (minuteArr.length * 60)
        //Start counting down
        if (classes == 'start') {
            start.disabled=true;
           
            let countTime = secundArr.length + (minuteArr.length * 60)
            let currentTime = 0
            let interval = setInterval(timeUpdate, 1000)

            function timeUpdate() {
                if (totalTime > 0) {
                    totalTime--
                    secundArr.pop();
                    displaySec.innerText = secundArr.length.toString().padStart(2, '0');
                    currentTime++
                    let progressTime = (currentTime * 100)/ countTime;
                    clockBckg.style.height = `${progressTime}%`
                }

                if (displayMin.innerText != "00" && displaySec.innerText == "00") {
                    secundArr.length = 61;
                    secundArr.pop();
                }

                if (displaySec.innerText == "59") {
                    let minutes = displayMin.innerText
                    let substraction = Number(minutes) - 1
                    displayMin.innerText = substraction.toString().padStart(2, '0');
                }
                
                if (totalTime == 0){
                    setTimeout(()=> {clockBckg.style.height = "0%"}, 2000) 
                }

                if (totalTime == 0) {
                    totalTime == 0
                    clockBckg.style.height = "100%"
                    start.disabled=false;
                    clearInterval(interval)
                    console.log("Czas minął")
                }
            }
        }
        if(classes== "end") {
            // totalTime = 0;
            // clockBckg.style.height = "0%"
            // clockBckg.style.transition = "none"
            // displayMin.innerHTML = "00";
            // displaySec.innerHTML = "00";
            // minuteArr.length = 0;
            // secundArr.length = 0;
            console.log(displayMin.innerText, displaySec.innerText)
        }
    }
}
showTime()
