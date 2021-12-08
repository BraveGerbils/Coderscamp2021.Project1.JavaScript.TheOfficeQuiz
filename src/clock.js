
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

    //adding function makeNumber for buttons
    plusMin.addEventListener('click', makeNumber);
    plusSec.addEventListener('click', makeNumber);
    remMin.addEventListener('click', makeNumber);
    remSec.addEventListener('click', makeNumber);
    start.addEventListener('click', makeNumber);
    end.addEventListener('click', makeNumber);

    // Adding/Removing/Displaying/Ending function
    let secundeArr = [];
    let minuteArr = [];
    let minute = minuteArr.length;
    let secunde = secundeArr.length;
    let num = 0;
    let i = 0;

    function makeNumber(e) {

        function adding(num, array, variable, display, number) {
            num++;
            array.push(num);
            variable = array.length;
            display.innerText = variable.toString().padStart(2, '0');
            if (variable >= number) {
                display.innerText = "00";
                array.length = 0;
            }
        }
        function removing(i, array, variable, display, a, b) {
            if (display.innerText == "00") {
                array.length = a;
            }
            if (variable >= b) {
                display.innerText = variable.toString().padStart(2, '0');
            }
            i--
            array.pop()
            variable = array.length;
            display.innerText = variable.toString().padStart(2, '0');
        }
        let classes = e.target.className;

       //buttons and their behaviors
        if (classes == "clock-btn clock-plusMin") {
            adding(num, minuteArr, minute, displayMin, 100);
        }else if (classes == 'clock-btn clock-remMin') {
            removing(i, minuteArr, minute, displayMin, 100, 99)
        }else if (classes == 'clock-btn clock-plusSec') {
            adding(i, secundeArr, secunde, displaySec, 60);
        }else if (classes == 'clock-btn clock-remSec') {
            removing(i, secundeArr, secunde, displaySec, 60, 99)
        }else if (e.target.parentNode.className == "end") {
            history.go();
        }

        //Start counting down and change background
        else if (classes == 'start') {
            start.disabled = true;
            plusMin.disabled = true;
            remMin.disabled = true;
            plusSec.disabled = true;
            remSec.disabled = true;

            let totalTime = secundeArr.length + (minuteArr.length * 60);
            let countTime = secundeArr.length + (minuteArr.length * 60);
            let currentTime = 0;
            let interval = setInterval(timeUpdate, 1000)

            function timeUpdate() {
                if (totalTime > 0) {
                    totalTime--;
                    secundeArr.pop();
                    displaySec.innerText = secundeArr.length.toString().padStart(2, '0');
                    currentTime++;
                    let progressTime = (currentTime * 100) / countTime;
                    clockBckg.style.height = `${progressTime}%`;
                }

                if (displayMin.innerText != "00" && displaySec.innerText == "00") {
                    secundeArr.length = 61;
                    secundeArr.pop();
                }

                if (displaySec.innerText == "59") {
                    let minutes = displayMin.innerText;
                    let substraction = Number(minutes) - 1;
                    displayMin.innerText = substraction.toString().padStart(2, '0');
                }

                if (totalTime == 0) {
                    setTimeout(() => { clockBckg.style.height = "0%" }, 2000);
                    start.disabled = false;
                    plusMin.disabled = false;
                    remMin.disabled = false;
                    plusSec.disabled = false;
                    remSec.disabled = false;

                    totalTime == 0
                    clockBckg.style.height = "100%";
                    clearInterval(interval);

                    console.log("Czas minął");
                }
            }
        }
    }
}
showTime()
