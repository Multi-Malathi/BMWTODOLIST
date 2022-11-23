const currentDate = document.getElementById("ctDate");
let today = new Date();
const [month, day, year] = [today.getMonth()+1, today.getDate(), today.getFullYear()];
let dateString = `${day} / ${month} / ${year}`;
currentDate.innerHTML = dateString;



let btnSub = document.getElementById("submitBtn");
let myName = document.getElementById('writeName');
let myDescription = document.getElementById('checkDescription');
let myAssignedto = document.getElementById('assignedto');
let myDate =document.getElementById('dDate');

btnSub.addEventListener("click", validateBox);
function validateBox() {
  if (myName.value == "" || myName.value.length < 8) {
    alert("Length should be more than 8"); 
    myName.focus();
  } else {
    alert ("All good!");  
  };

  if (myDescription.value == "" || myDescription.value.length < 15) {
    alert("Length should be more than 15,rewrite please!"); 
    myDescription.focus();
  } else {
    alert ("All amazing!");  
  };

  
  if (myAssignedto.value == "" || myAssignedto.value.length < 8) {
    alert("Length should be more than 8,good luck"); 
    myAssignedto.focus();
  } else {
    alert ("All check!");  
  };
  
  let inputeDate = new Date(myDate.value);
  let now = new Date();
  let today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ));
  if(inputeDate.getTime() < today.getTime()){
    alert("date is past");
  } else if(inputeDate.getTime() == today.getTime()){
    alert("date is today");
  }else{
    alert("date is future");
  }
 
}

today.value