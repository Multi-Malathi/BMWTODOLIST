let btnDisplay= document.getElementById("displayBtn");
let nameD = document.getElementById('writeName');
let descriptionD = document.getElementById('checkDescription');
let assignedtoD = document.getElementById('assignedto');
let myDateD =document.getElementById('dDate');

btnDisplay.addEventListener('click',function(e){
    e.preventDefault();

    const nameValue =nameD.value;
    const descriptionValue =descriptionD.value;
    const assignedToValue =assignedtoD.value;
    const dateValue = myDateD.value;

    localStorage.setItem('name',nameValue);
    localStorage.setItem('description',descriptionValue);
    localStorage.setItem('assignedTo',assignedToValue);
    localStorage.setItem('date',dateValue);

    window.location.href ="display.html";

})