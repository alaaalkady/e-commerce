


let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let register_btn =document.querySelector("#sign_up");


register_btn.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value===""||password.value===""||email.value===""){
        alert("please Fill Data");
    }
    else{
        localStorage.setItem("user name",username.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value);
        setTimeout(()=>{
            window.location="login.html";

        },1500);
    }
});