

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
document.getElementsByTagName("h2")[0].style.fontSize = "6vw";

var dt = new Date();
var tm = new Date();
document.getElementById("the_date").innerHTML = dt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
document.getElementById("the_time").innerHTML = tm.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});




//scroll
var my_time;
var count = 0;
setTimeout('pageScroll()', 1200);
function pageScroll() {
// If condition to set repeat 
    if (count < 2) {
        var objDiv = document.getElementById("tasks");
        objDiv.scrollTop = objDiv.scrollTop + 1;
        if (objDiv.scrollTop == (objDiv.scrollHeight - 61)) {
  setTimeout(function() {
                objDiv.scrollTop = 0;
                count++;
    }, 1200);
        }
//set scrolling time start
        my_time = setTimeout('pageScroll()', 1200);
//set scrolling time end
    }
}




















// start code for todo list 

window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskType");
    const listel = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const Task = input.value;
        if (!Task) {
            alert("please fill out the task");
            return;
        }
        const taskel = document.createElement("div");
        taskel.classList.add("Task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");



        taskel.appendChild(taskContentEl);


        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text")
        taskInputEl.type = "text";
        taskInputEl.value = Task;
        taskInputEl.setAttribute("readonly", "readonly");


        taskContentEl.appendChild(taskInputEl);

        const taskactionel = document.createElement("div");
        taskactionel.classList.add("actions");

        const taskeditel = document.createElement("button");
        taskeditel.classList.add("edit");
        taskeditel.innerHTML = "Edit";

        const taskdeleteEl = document.createElement("button");
        taskdeleteEl.classList.add("delete");
        taskdeleteEl.innerHTML = "Delete";

        taskactionel.appendChild(taskeditel);
        taskactionel.appendChild(taskdeleteEl);


        taskel.appendChild(taskactionel);


        listel.appendChild(taskel);

        input.value = "";
        taskeditel.addEventListener('click', () => {
            if (taskeditel.innerText.toLocaleLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskeditel.innerText = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskeditel.innerText = "Edit";
            }


        });

        taskdeleteEl.addEventListener('click', () => {
            listel.removeChild(taskel);
        });
    });
});


