
//let productsincard = localStorage.getItem('productsincard');
let productsDom = document.querySelector(".products");
let noitemsdom = document.querySelector(".noitems");


/*if(productsincard){
    let items = JSON.parse(productsincard);
    drawProductscardsUI(items);
}*/

function drawProductscardsUI(allproducts = []){
    /*if(JSON.parse(localStorage.getItem("productsincard")).length === 0)
        productsDom.innerHTML = "there is no items!!";
    */


    if(JSON.parse(localStorage.getItem("productsincard")).length ===0 ){
        
        noitemsdom.innerHTML = "there is no items";
       // noitemsdom.innerHTML.style.color = "black";
       
    }
    else{
    

    let products = JSON.parse(localStorage.getItem("productsincard")) || allproducts;
    let ProductscardsUI = products.map((item)=>{
        return`
        <div class="product-item">
                    <img src="${item.imageUrl}"
                    alt="image" class="item-image">
                    <div class="product-item-desc">
                        <a >${item.title}</a>
                        <p>${item.dscription}</p>
                        <span>size:${item.size}</span> <br>
                        <span>quantity:${item.qty}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-card" onclick="removefromcard(${item.id})">Remove From card</button>
                        <i class="fa-regular fa-heart add-to-favourite"></i>

                    </div>
                </div>
                `;
    });
    productsDom.innerHTML = ProductscardsUI.join("");   
}}
drawProductscardsUI();

function removefromcard(id){
    let productsincard = localStorage.getItem("productsincard")
    if(productsincard){
        let items = JSON.parse(productsincard);
        let filtereditems = items.filter((item)=> item.id !== id);
        
        localStorage.setItem ("productsincard",JSON.stringify(filtereditems));
        drawProductscardsUI(filtereditems);
    }
    if(JSON.parse(localStorage.getItem("productsincard")).length ===0 ){
        
        productsDom.innerHTML = "there is no items";
       // noitemsdom.innerHTML.style.color = "black";
       
    }
    
};

