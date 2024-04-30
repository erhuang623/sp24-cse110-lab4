
function logTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let intervalID = setInterval(logTime, 1000);