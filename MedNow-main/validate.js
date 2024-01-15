const username = document.getElementById("uname")
const name = document.getElementById("name")
const pass = document.getElementById("pass")
const cpass = document.getElementById("cpass")

const nameError = document.querySelector("#nameError")
const unameError = document.querySelector("#unameError")
const passError = document.querySelector("#passError")
const cpassError = document.querySelector("#cpassError")

function validate(){
    var submitable = true

    if(name.value.length<4){
        name.style.border = "2px solid rgb(255,0,0)"
        nameError.textContent= "*Name is too short"
        submitable = false
    }else{
        name.style.border = "2px solid rgb(0,255,0)"
        nameError.textContent=""
    }

    if(username.value.length<5){
        username.style.border = "2px solid rgb(255,0,0)"
        unameError.textContent = "*Username is too short"
        submitable = false
    }else{
        username.style.border = "2px solid rgb(0,255,0)"
        unameError.textContent = ""
    }

    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)==username.value){
            submitable = false
            unameError.textContent = "*Username not Available"
            username.style.border = "2px solid rgb(255,0,0)"
        }
    }

    if(pass.value != '' && cpass.value != ''){
        if(cpass.value != pass.value){
            pass.style.border = "2px solid rgb(255,0,0)"
            cpass.style.border = "2px solid rgb(255,0,0)"
            passError.textContent = "*Password doesn't Match"
            cpassError.textContent = "*Password doesn't Match"
            submitable = false
        }else{
            pass.style.border = "2px solid rgb(0,255,0)"
            cpass.style.border = "2px solid rgb(0,255,0)"
            passError.textContent = ""
            cpassError.textContent = ""
        }
    }else{
        pass.style.border = "2px solid rgb(255,0,0)"
        cpass.style.border = "2px solid rgb(255,0,0)"
        passError.textContent = "*Password Empty"
        cpassError.textContent = "*Password Empty"
    }

    if(submitable){
        localStorage.setItem(username.value,pass.value)
        alert("Successfully Registered!")
        window.location.assign("my cart.html")
    }
}

function defaultUser(){
    for(let i=0;i<4;i++){
        localStorage.setItem(`User${i+1}`,`pass${i+1}`)
    }
}