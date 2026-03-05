function login(){
let user=document.getElementById("username").value
if(!user){
alert("Enter your name")
return
}
localStorage.setItem("user",user)
window.location="dashboard.html"
}

window.onload=function(){
let user=localStorage.getItem("user")
if(document.getElementById("welcome")){
document.getElementById("welcome").innerHTML="Welcome "+user
}
}

function bookSlot(slot,userCell){

let user=localStorage.getItem("user")
let status=document.getElementById(slot)

if(status.innerHTML==="Available"){
status.innerHTML="Booked"
document.getElementById(userCell).innerHTML=user
alert("Slot booked successfully")
}else{
alert("Slot already booked")
}

}

function logout(){
localStorage.removeItem("user")
window.location="login.html"
}
