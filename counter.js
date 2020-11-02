

var countdownDate = new Date().getTime() + (10 * 1000 * 60 * 60);

var interval = setInterval(function () {
    var distance = countdownDate - new Date().getTime();

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(interval)
        return
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;



}, 1000);

var setNewTime = () => {
    var hour = parseInt(document.getElementById('hour').innerHTML);
    var minute = parseInt(document.getElementById('minute').innerHTML);
    var second = parseInt(document.getElementById('second').innerHTML);

    var now = new Date().getTime();
    countdownDate = now + 1000 * (second + 60 * minute + 60 * 60 * hour);
}

var up = (buttonName) => {
    document.getElementById(buttonName).innerHTML = parseInt(document.getElementById(buttonName).innerHTML) + 1;
    setNewTime();
}

var down = (buttonName) => {
    var time = parseInt(document.getElementById(buttonName).innerHTML);
    if (time > 0) {
        document.getElementById(buttonName).innerHTML = time - 1;
        setNewTime();
    }

}

