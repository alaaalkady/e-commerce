
let product = JSON.parse(localStorage.getItem("products"))|| productsBD;


let productsDom = document.querySelector(".products");
let noitemsdom = document.querySelector(".noitems");

//console.log(myproducts);


drawProductsUI= function drawProductsUI(product){
    let myproducts = product.filter((i)=>i.isme==="y");
    if(myproducts.length !==0){
        let drawProductsUI = myproducts.map((item)=>{
            // console.log("aaa",item)
             return`
             <div class="product-item" style="border: ${item.isme === "y"? "2px solid green":""}">
                         <img src="${item.imageUrl}"
                         alt="image" class="item-image">
                         <div class="product-item-desc">
                             <h2 onclick="saveitemdata(${item.id})">${item.title}</h2>
                             <p>${item.dscription}</p>
                             <span>size : ${item.size}</span>
                             
                         </div>
                         <div class="product-item-actions">
                         <button class='edit-product' onclick='deletproduct(${item.id})'>Delete  product</button>" 
                         <button class='edit-product' onclick='editproduct(${item.id})'>edit product</button>" 
                         </div>
                     </div>
                     `;
         });
         productsDom.innerHTML = drawProductsUI.join("");   
    }
    else{
        noitemsdom.innerHTML = "no products...!!";
        productsDom.innerHTML = "no products...!!";
    }
}
drawProductsUI(product);

/*drawProductsUI= function drawProductsUI(product){
    let myproducts = product.filter((i)=>i.isme==="y");
    if(myproducts.length !==0){
        let drawProductsUI = myproducts.map((item)=>{
            return`
            <div class="product-item" style="border: ${item.isme === "y"? "2px solid green":""}">
                         <img src="${item.imageUrl}"
                         alt="image" class="item-image">
                         <div class="product-item-desc">
                             <h2 onclick="saveitemdata(${item.id})">${item.title}</h2>
                             <p>${item.dscription}</p>
                             <span>size : ${item.size}</span>
                             
                         </div>
                         <div class="product-item-actions">
                         <button class='edit-product' onclick='deletproduct(${item.id})'>Delete  product</button>" 
                         <button class='edit-product' onclick='editproduct(${item.id})'>edit product</button>" 
                         </div>
                     </div>
                    `;
        });
        productsDom.innerHTML = drawProductsUI.join("");   
        noitemsdom.innerHTML = "";
    }
    else{
        
        productsDom.innerHTML = "";
        noitemsdom.innerHTML = "no products...!!";
    }
}
drawProductsUI(product);*/

function editproduct(id){
    localStorage.setItem("editproduct",id);
    window.location = "editproduct.html";
}

/*function deletproduct(id){
    let product = JSON.parse(localStorage.getItem("products"))||productsBD;
    let myproducts = product.filter((i)=>i.isme==="y");
    let clickeditem = myproducts.find((i)=>i.id ===id);
    product = myproducts.filter((i)=>i.id !== clickeditem.id);
    drawProductsUI(product);
    localStorage.setItem("products",JSON.stringify(product))
   // drawProductsUI(product);
    
}
*/
function deletproduct(id){
    let product = JSON.parse(localStorage.getItem("products"))||productsBD;
   // let myproducts = product.filter((i)=>i.isme==="y");
    let clickeditem = product.find((i)=>i.id ===id);
    product = product.filter((i)=>i.id !== clickeditem.id);
    
    //drawProductsUI(product);
    localStorage.setItem("products",JSON.stringify(product))
   drawProductsUI(product);
    
}
/*function deletproduct(id){
    let product = JSON.parse(localStorage.getItem("products"))||productsBD;
    let myproducts = product.filter((i)=>i.isme==="y");
    let clickeditem = myproducts.find((i)=>i.id ===id);
    product = myproducts.filter((i)=>i.id !== clickeditem.id);
    if (product.length === 0) {
        noitemsdom.innerHTML = "no products...!!";
    }
    drawProductsUI(product);
    localStorage.setItem("products",JSON.stringify(product))
}*/