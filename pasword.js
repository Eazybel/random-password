const btn = document.getElementById("btn");
const para = document.getElementById("para");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const symbol = "!@#$%^&*()-_+={}[]|\;:'`~;'";
const wordslow = lower.split("");
const wordsup = upper.split("");
const wordsnum = numeric.split("");
const wordssym = symbol.split("");
const passwrod = [];
const para1=document.getElementById("para1");
let paraa=[];
btn.onclick=function(){
    
   passwrod[0]= wordslow[Math.floor(Math.random(10)*27)];
   passwrod[1]= wordsup[Math.floor(Math.random(10)*27)];¬
   passwrod[2]= wordsnum[Math.floor(Math.random(10)*10)];
   passwrod[3]= wordssym[Math.floor(Math.random(10)*28)];
   passwrod[4]= wordslow[Math.floor(Math.random(10)*27)];
   passwrod[5]= wordsup[Math.floor(Math.random(10)*27)];
   passwrod[6]= wordsnum[Math.floor(Math.random(10)*10)];
   passwrod[7]= wordssym[Math.floor(Math.random(10)*27)];

   para.textContent=passwrod.join("");
   para1.textContent=paraa.join("");
}

