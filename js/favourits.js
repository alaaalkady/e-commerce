
//let productsincard = localStorage.getItem('productsincard');
let productsDom = document.querySelector(".products");
let noitemsdom = document.querySelector(".noitems");


/*if(productsincard){
    let items = JSON.parse(productsincard);
    drawProductscardsUI(items);
}*/

function drawFavouriteProductsUI(allproducts = []){
    /*if(JSON.parse(localStorage.getItem("productsincard")).length === 0)
        productsDom.innerHTML = "there is no items!!";
    */


    if(JSON.parse(localStorage.getItem("favouriteitems")).length ===0 ){
        
        noitemsdom.innerHTML = "there is no items";
       // noitemsdom.innerHTML.style.color = "black";
       
    }
    else{
    

    let products = JSON.parse(localStorage.getItem("favouriteitems")) || allproducts;
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
                        <button class="add-to-card" onclick="removefromFavourite(${item.id})">Remove From Favourite</button>
                        <i class="fa-regular fa-heart add-to-favourite"></i>

                    </div>
                </div>
                `;
    });
    productsDom.innerHTML = ProductscardsUI.join("");   
}}
drawFavouriteProductsUI();

function removefromFavourite(id){
    let productsincard = localStorage.getItem("favouriteitems")
    if(productsincard){
        let items = JSON.parse(productsincard);
        let filtereditems = items.filter((item)=> item.id !== id);
        
        localStorage.setItem ("favouriteitems",JSON.stringify(filtereditems));
        drawFavouriteProductsUI(filtereditems);
    }
    if(JSON.parse(localStorage.getItem("favouriteitems")).length ===0 ){
        
        productsDom.innerHTML = "there is no items";
       // noitemsdom.innerHTML.style.color = "black";
       
    }
    
};

