const currentDate = document.querySelector("#ctDate");
let today = new Date();
const [month, day, year] = [today.getMonth()+1, today.getDate(), today.getFullYear()];
let dateString = `${day} / ${month} / ${year}`;
currentDate.innerHTML = dateString;