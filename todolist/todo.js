const textbar =  document.getElementById("task-bar");
const input = document.getElementById("input");
function addtask(){
    if(input.value==""){
        alert("Please first wirte something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        textbar.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    input.value="";
}
textbar.addEventListener('click' , function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", textbar.innerHTML);
}

function showTask(){
    textbar.innerHTML  = localStorage.getItem("data");
}
showTask();

document.addEventListener("keypress", function(event) {
      if(event.keyCode == 13){
        addtask();
      }
});