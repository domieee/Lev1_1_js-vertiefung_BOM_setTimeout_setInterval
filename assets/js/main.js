const startInterval = document.querySelector('#startInterval')
const stopInterval = document.querySelector('#stopInterval')

let n = 10

function start() {

    let firstInterval = () => {
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
        first = setInterval(firstInterval, 1000)
    }, '3000')
}

function stop() {
    clearInterval(first)
    n = 10
}

stopInterval.addEventListener('click', stop)
startInterval.addEventListener('click', start)
