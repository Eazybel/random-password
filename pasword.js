const body=document.querySelector("body")
const btn=document.getElementById("btn")
const display=document.getElementById("display")
var small="abcdefghijklmnopqrstuvwxyz"
var large=small.toUpperCase()
var num="1234567890"
var symbol="!£$%^&*()_@{[}]<>?/"
btn.onclick=function(){
    var password=[8]
   password[0]=small[Math.floor(Math.random()*26)]
   password[1]=large[Math.floor(Math.random()*26)]
   password[2]=num[Math.floor(Math.random()*10)]
   password[3]=symbol[Math.floor(Math.random()*18)]
   password[4]=small[Math.floor(Math.random()*26)]
   password[5]=large[Math.floor(Math.random()*26)]
   password[6]=num[Math.floor(Math.random()*10)]
   password[7]=symbol[Math.floor(Math.random()*18)]
   var password2=[]
   for (let i = 0; i < password.length; i++) {
       password2[i]=password[Math.floor(Math.random()*8)]
        
    }
    var passreal=password2.toString()
   display.innerHTML=passreal.replaceAll(",","")

}