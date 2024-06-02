const inputbox = document.getElementById("inputbox");
const inputslider = document.getElementById("inputslider");
const slidervalue=document.getElementById("slidervalue");
const uppercase = document.getElementById("uppercase");
const lowercase  =document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbol");
const genbtn = document.getElementById("genbtn");

inputslider.addEventListener('input',(e)=>{
    slidervalue.textContent=e.target.value;
})
genbtn.addEventListener('click',()=>{
    inputbox.value = generatepass();
})

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers ="0123456789";
let symbols = "@#$%^&*()?/";
function generatepass(){
    let genpass = "";
    let allchar="";
    allchar+= lowercase.checked  ? lower  : "";
    allchar+= uppercase.checked  ? upper  : "";
    allchar+= number.checked ? numbers : "";
    allchar+= symbol.checked ? symbols  : "";

    if(allchar.length==0){
        return genpass;
    }
    let i=0;
    while(i<inputslider.value){
        genpass+=allchar.charAt(Math.floor(Math.random() * allchar.length));
        i++;
    }
    return genpass;
}