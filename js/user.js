

let links =document.querySelector("#links");
let userinfo = document.querySelector("#user_info");
let userDom =document.querySelector("#user")

let usename = localStorage.getItem("user name");

let logoutBtn = document.querySelector("#logout");

if(usename){
    links.remove();
    userinfo.style.display="flex";
    userDom.innerHTML=usename;
};

logoutBtn.addEventListener("click",function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html"
    },1500);
});