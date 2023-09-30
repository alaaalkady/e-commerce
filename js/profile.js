



let get_username = localStorage.getItem("user name");
let get_emaill = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products"))||productsBD;
let myproducts = products.filter((i)=>i.isme ==="y");
const avatarInput = document.getElementById("avatar-input");

let userdom = document.querySelector("#user-name");
let useremailDom = document.querySelector("#email");
let productnumber = document.querySelector("#product-length span");

userdom.innerHTML = get_username;
useremailDom.innerHTML = get_emaill;



avatarInput.addEventListener("change", handleAvatarChange);

if(productnumber !=0){
    productnumber.innerHTML = myproducts.length;
}
else{
    productnumber.remove();
}





function handleAvatarChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const image = new Image();
      image.src = reader.result;
      const avatar = document.querySelector(".user-avatar");
      avatar.src = image.src;
      localStorage.setItem("userAvatar", image.src);
    };
    reader.readAsDataURL(file);
  }
  window.addEventListener("load", function() {
    const avatar = document.querySelector(".user-avatar");
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      avatar.src = savedAvatar;
    }
  });
  
  
