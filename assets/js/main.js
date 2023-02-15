const startInterval = document.querySelector('#startInterval')
const stopInterval = document.querySelector('#stopInterval')

let n = 10

function intervalRound() {

    let fistInterval = () => {
        console.log(n);
        if (n === 0) {
            clearInterval(first)
            console.log('yey');
            n = 10
        } else {
            n--
        }
    }

    console.log('starting interval...')

    setTimeout(() => {
        console.log('u wasted 3 seconds of your life.. :-(')
        first = setInterval(fistInterval, 1000)
    }, '3000')
}

function stop() {
    clearInterval(first)
}

stopInterval.addEventListener('click', stop)
startInterval.addEventListener('click', intervalRound)
