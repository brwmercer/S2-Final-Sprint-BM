function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    const hours = now.getHours()
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12;

    const timeString = `${formattedHours}:${minutes}:${seconds} ${amPm}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();