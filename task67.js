let toDoLists = [];

const  addlist = (ev) =>{
    ev.preventDefault();   //to stop the form submitting
    let toDoList ={
        id: Date.now(),
        name: document.getElementById('writeName').value,
        description:document.getElementById('checkDescription').value,
        assignedto: document.getElementById('assignedto').value,
        duedate: document.getElementById('dDate').value,

    }
    toDoLists.push(toDoList);
    document.forms[0].reset(); // to clear the form for the next entries


    //for display purposes
    console.warn('added',{toDoLists});
    let pre=document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(toDoLists,'\t',2);
    

    //save to localstorage
   localStorage.setItem('myToDoList', JSON.stringify(toDoLists));

  
}

   document.addEventListener('DOMContentLoaded',()=>{
     document.getElementById('submitBtn').addEventListener('click',addlist )
   })
    
   