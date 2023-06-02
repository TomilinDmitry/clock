let hours = document.querySelector('#hours')
let minuts = document.querySelector('#minuts')
let seconds = document.querySelector('#seconds')
let days = document.querySelector('#days')
let month = document.querySelector('#month')
let years = document.querySelector('#years')

setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
    minuts.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
    days.innerHTML = (currentTime.getDate() < 10 ? '0' : '') + currentTime.getDate();
    month.innerHTML = ((currentTime.getMonth()) < 10 ? '0' : '') + (currentTime.getMonth() + 1);
    years.innerHTML = currentTime.getFullYear() + ' год'
}, 1000)

