


let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#login");

let getuser = localStorage.getItem("user name");
let getpassword = localStorage.getItem("password");


loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value===""||password.value===""){
        alert("please enter username and password");
    }
    else{
        if(username.value===getuser||password.value===getpassword){
           setTimeout(()=>{ window.location="index.html"},1500);
        }
        else{
            alert("The entered username or password is wrong")
        }
    }
});