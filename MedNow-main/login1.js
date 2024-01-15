var username = document.getElementById("uname")
var pass = document.getElementById("pass")

const unameError = document.querySelector("#unameError")
const passError = document.querySelector("#passError")

function authenticate(){
    if(username.value == "admin" && pass.value == "admin"){
        window.location.assign("admin.html")
    }
    if(username.value != ""){
        for(let i=0;i<localStorage.length;i++){
            if(username.value == localStorage.key(i)){
                unameError.textContent = ""
                username.style.border = "2px solid rgb(0,255,0)"
                if(pass.value != localStorage.getItem(username.value)){
                    passError.textContent = "*Incorrect Password"
                    pass.style.border = "2px solid rgb(255,0,0)"
                }else{
                    passError.textContent = ""
                    pass.style.border = "2px solid rgb(0,255,0)"
                    console.log("authenticated")
                    window.location.assign("admin.html")
                }
                break
            }else{
                unameError.textContent = "*Username doesn't Exist"
                username.style.border = "2px solid rgb(255,0,0)"
            }
        }
    }else{
        unameError.textContent = "*Username does't Exist"
        username.style.border = "2px solid rgb(255,0,0)"
    }
}