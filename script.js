const impbox=document.querySelector("input");
const addbtn=document.querySelector("button");
const list=document.querySelector("ul");

addbtn.addEventListener('click',() => {
    const taskdes = impbox.value.trim();
    if (taskdes){
        addtask(taskdes); // Add task if input is not empty
        impbox.value=''; // Clears the input field
    }
})
addbtn.addEventListener('keypress',() => {
    const taskdes = impbox.value.trim();
    if (taskdes){
        addtask(taskdes); // Add task if input is not empty
        impbox.value=''; // Clears the input field
    }
})

function addtask(description) {
    const taskelm = document.createElement("li");
    const taskdel = document.createElement("span");
    const tasktext = document.createElement("p");

    list.appendChild(taskelm);
    taskelm.appendChild(tasktext);
    taskelm.appendChild(taskdel);

    tasktext.innerText=description;
    taskdel.innerText="x";

    taskdel.addEventListener("click",()=>{
        taskelm.remove();
    }) 
    

}