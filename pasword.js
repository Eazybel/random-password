const btn = document.getElementById("btn");
const para = document.getElementById("para");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const symbol = "!@#$%^&*()-_+={}[]|\;:'`~;'";
const words = lower.split("")
btn.onclick=function(){
    
    para.textContent= words[2];
}

