let btnSub = document.getElementById('btnSub');
btnSub.addEventListener("click", validateBox);
let myName = document.getElementById('myName');
let errMsg = document.getElementById('errMsg');
function validateBox() {
  if (myName.value == "" && myName.value.length < 8) {
    errMsg.innerHTML = "Length should be more than 8";
    document.getElementById("errMsg").style.color = "#FF0000";
    ;
  } else {
    errMsg.innerHTML = "All good ";
    document.getElementById("errMsg").style.color = "#EEEEEE";
  }
}
function checkDate(event){
    let userEntered = new Date(event.target.valueAsNumber); // valueAsNumber has no time or timezone!
    let now = new Date();
    let today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ));
    if(userEntered.getTime() < today.getTime())
      alert("date is past");
    else if(userEntered.getTime() == today.getTime())
      alert("date is today");
    else
      alert("date is future");
  }