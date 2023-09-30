

let get_user = localStorage.getItem("user name");
let get_email = localStorage.getItem("email");


let userinput = document.querySelector("#changename");
let emailinput = document.querySelector("#changeemail");
let changeform = document.querySelector(".edit-profile-form");




//userinput.value = get_user;
emailinput.value = get_email;

if (userinput) {
  userinput.value = get_user;
}


changeform.addEventListener("submit", updateprofile );



function updateprofile(e){
   e.preventDefault();
    
    localStorage.setItem("user name",userinput.value);
    localStorage.setItem("email",emailinput.value);
   
    setTimeout(()=>{
        window.location = "profile.html";
    },500)
    console.log("aaaaa");
   
}

function uploadimg(){
    let file =this.files[0];
    let types =["image/jpg","image/png"];
    if(types.indexOf(file.type) ==-1){
        alert("type is not supported");
        return;
    }
    if(file.size > 2*1024*1024){
        alert("file is too large");
        return;
    }
    productimg = URL.createObjectURL(file);
    getfilebase64(file);
}

function getfilebase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        productimg = reader.result;
    };
    reader.onerror = function(){
        alert("error");
    };
}
