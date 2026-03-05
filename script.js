function login(){

let user=document.getElementById("username").value
let role=document.getElementById("role").value

if(!user){
alert("Enter name")
return
}

localStorage.setItem("user",user)
localStorage.setItem("role",role)

if(role==="admin"){
window.location="admin.html"
}else{
window.location="dashboard.html"
}

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

alert("Slot booked")

}else{

alert("Slot already booked")

}

}

function resetSlots(){

for(let i=1;i<=3;i++){
document.getElementById("as"+i).innerHTML="Available"
document.getElementById("au"+i).innerHTML="-"
}

alert("Slots reset")

}

function logout(){
localStorage.clear()
window.location="index.html"
}
