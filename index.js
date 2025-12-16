const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');
const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const ampm = document.getElementById('ampm');

function updateClock() {
    const now = new Date();

//Time Part
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //For 12-hour format
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert to 12-hour format

    // Analog hands rotation (smooth movement)
    const secondsDeg = (seconds * 6);
    const minutesDeg = (minutes * 6) + (seconds * 0.1);
    const hoursDeg = (hours * 30) + (minutes * 0.5);

    secHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    // Digital time display
    const formattedTime = `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
    timeDisplay.textContent = formattedTime;
    ampm.textContent = period;

    //Date Part
    const dayNames = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
    const monthNames = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    const dayName = dayNames[now.getDay()];
    const day = now.getDate();
    const month = monthNames[now.getMonth()];

    dateDisplay.textContent = `${dayName}, ${day} ${month}`;

}

//Per second update
setInterval(updateClock, 1000);

//First time update
updateClock();