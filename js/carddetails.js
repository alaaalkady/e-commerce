

let products =JSON.parse(localStorage.getItem("products"));
let productid = localStorage.getItem("productid");
let itemdom = document.querySelector(".item-details");
let productdetails = products.find((item)=>item.id == productid);


itemdom.innerHTML = `
<img src="${productdetails.imageUrl}" alt="" srcset="">
<h2>${productdetails.title}</h2>
<h>${productdetails.dscription}</p>
<span>Size : ${productdetails.size}</span><br>
<span>quantity : ${productdetails.qty}</span><br>
<button class="" onclick="editpproduct(${productid})">Edit Product</button>

`;
function editpproduct(id){
    localStorage.setItem("editproduct",id);
    window.location = "editproduct.html";
}