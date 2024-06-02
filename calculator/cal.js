const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
const specialchar = ["+" , "-" , "*" , "%" , "/"];
let output="";
function calculate(btnvalue){
    if(btnvalue === "=" && btnvalue!==""){
        output=eval(output.replace("%","/100"));
    }
    else if(btnvalue=="AC"){
        output="";
    }
    else if(btnvalue==="DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output==="" && specialchar.includes(btnvalue)) return ;
        output+=btnvalue;
    }
    input.value = output;
}
buttons.forEach((button)=>{
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})
