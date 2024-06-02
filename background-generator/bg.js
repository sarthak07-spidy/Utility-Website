const t = document.getElementById('color1');
const r = document.getElementById('color2');
const s = document.getElementById('co');
const u = document.getElementById('likh');
const m =document.getElementById('color3');

function setbg(){
    s.style.background = `linear-gradient( to bottom right, ${t.value}, ${r.value},${m.value})`;
    u.textContent = `Copy your code : linear-gradient( to bottom right, ${t.value}, ${r.value},${m.value})`;
}
t.addEventListener('input' ,setbg);
r.addEventListener('input' ,setbg);
m.addEventListener('input',setbg);


