let username = ""

function saveName(){
username = document.getElementById("name").value
localStorage.setItem("username",username)
alert("Name saved successfully")
}

window.onload = function(){
username = localStorage.getItem("username")
}

function bookSlot(slot,user){

if(!username){
alert("Please enter your name first")
return
}

let slotStatus = document.getElementById(slot)

if(slotStatus.innerHTML === "Available"){

slotStatus.innerHTML = "Booked"
slotStatus.classList.add("booked")

document.getElementById(user).innerHTML = username

alert("Slot booked successfully")

}else{

alert("Slot already booked")

}

}
