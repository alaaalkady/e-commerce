






/************products *************/
let productsDom = document.querySelector(".products");
//let cardproductdivDom = document.querySelector(".cardproducts div");
//let badgeDom = document.querySelector(".badge");
//let cardproductsmenu = document.querySelector(".cardproducts")
//let shoppingcardicon = document.querySelector(".shoppingcard");
let allproducts = document.querySelector(".totproducts");
/*let products1 =JSON.parse(localStorage.getItem("products"));
let products2 =JSON.parse(localStorage.getItem("newproducts"));
let products = products2?[...products2]:[...products1];*/
let products = JSON.parse(localStorage.getItem("products"))|| productsBD;
localStorage.setItem("products",JSON.stringify(products));
//let products =productsBD;
//let products = localStorage.getItem(JSON.parse(localStorage.getItem("products")))||products ;
//let products = JSON.parse(localStorage.getItem("products")) || [];
//products = products.concat(productsBD);


let drawProductsUI;
drawProductsUI= function drawProductsUI(product){
    let drawProductsUI = product.map((item)=>{
       // console.log("aaa",item)
        return`
        <div class="product-item  " style="border: ${item.isme === "y"? "2px solid green":""} ,max-width: 540px;">
                    <img src="${item.imageUrl}"
                    alt="image" class="item-image ">
                    <div class="product-item-desc">
                        <h2 class="" onclick="saveitemdata(${item.id})">${item.title}</h2>
                        <p class="card-text">${item.dscription}</p>
                        <span>size : ${item.size}</span>
                        ${item.isme==="n"?"":item.isme==="y"&&"<button class='edit-product' onclick='editpproduct(" +item.id+ ")'>edit product</button>"}
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-card" onclick="addedtocard(${item.id})">Add to card</button>
                        <i class="fa-regular fa-heart add-to-favourite"style="color:${item.liked==true?"red":""}" onclick="addedtofavourite(${item.id})"></i>
                        
                    </div>
                </div>
                `;
    });
    productsDom.innerHTML = drawProductsUI.join("");   
}

drawProductsUI(products);

/*let addeditems = localStorage.getItem("productsincard")?
JSON.parse(localStorage.getItem("productsincard")):[];

if(addeditems){
    addeditems.map((item)=>{
        cardproductdivDom.innerHTML += `<p> ${item.title}${item.qty}</P>`
    })
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addeditems.length;

}*/


function addedtocard(id){
    if(localStorage.getItem("user name")){
        let products = JSON.parse(localStorage.getItem("products"))||products ;
        let product = products.find((item)=>item.id===id);   //get which product i clicked
        let isproductincard = addeditems.some((i)=> i.id === product.id);   //check if the clicked item is clicked before
        if (isproductincard){
            addeditems = addeditems.map((p)=>{
                if(p.id === product.id) p.qty +=1;
                return p ;
            })   // id it was clicked before increase quantity 
        }
        else{
            addeditems.push(product);     //id it wasnt clicked before add it into added items
        }
    cardproductdivDom.innerHTML="";
    addeditems.forEach((item)=>{
        cardproductdivDom.innerHTML += `<p> ${item.title} ${item.qty}</P>
    `
        
    }
        
    )
    
   // addeditems = [...addeditems,chosenitem];
   // let uniqueitems= getuniquearr(addeditems,"id");
    localStorage.setItem("productsincard",JSON.stringify(addeditems));
    badgeDom.style.display = "block"
    let cardproductitems = document.querySelectorAll(".cardproducts div p");
    badgeDom.innerHTML = cardproductitems.length;
    }
    else{
        window.location= "login.html"
    }

    
}
   function getuniquearr(arr,filtertype){
        let unique = arr.map((item)=> item[filtertype])
        .map((item,i,final)=>final.indexOf(item)==i &&i)
        .filter((item)=>arr[item])
        .map((item)=>arr[item]);
        return(unique);
   }
//shoppingcardicon.addEventListener('click',opencard);
drawProductsUI(products);


/*
function opencard(){
    if(cardproductdivDom.innerHTML !="") {
        if(cardproductsmenu.style.display == "block"){
            cardproductsmenu.style.display = "none";
        }
        else{
            cardproductsmenu.style.display = "block";
        }
    }
    }
    
*/
function saveitemdata(id){
    localStorage.setItem("productid",id);
    window.location="carddetails.html";
}
let input = document.getElementById("search");

input.addEventListener("keyup",function(e){
   if(e.keyCode===13){                         // if you want it search without pressing enter key cancel this if condition
        search(e.target.value,products);
    }
    if(e.target.value.trim()===""){
        drawProductsUI(products);
    }
});

function search(title , myArr){
    let arr = myArr.filter((item)=>item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr);
    
}

/*let favouriteitems = [];
function addedtofavourite(id){
    if(localStorage.getItem("user name")){
        let chosenitem = products.find((item)=>item.id===id);
        
        if (chosenitem.liked===true){
            chosenitem.liked=false;
        }
        else{
                
    chosenitem.liked = true;
    
    favouriteitems = [...favouriteitems,chosenitem];
   
   localStorage.setItem("favouriteitems",JSON.stringify(favouriteitems));
   
   
   let uniqueitems= getuniquearr(favouriteitems,"id");
   localStorage.setItem("favouriteitems",JSON.stringify(uniqueitems));
   products.map((item)=>{
       if(item.id==id){
           chosenitem.liked=true;
       }
   });
        }
    
    localStorage.setItem("products",JSON.stringify(products));
    drawProductsUI(products);
    }
    else{
        window.location= "login.html"
    }

    
}*/
let favouriteitems = JSON.parse(localStorage.getItem("favouriteitems")) || [];

function addedtofavourite(id){
    if(localStorage.getItem("user name")){
        let chosenitem = products.find((item)=>item.id===id);
        if (chosenitem.liked===true){
            chosenitem.liked=false;
            favouriteitems = favouriteitems.filter((item) => item.id !== chosenitem.id);
        }
        else{
            chosenitem.liked = true;
            if (!favouriteitems.some((item) => item.id === chosenitem.id)) {
                favouriteitems.push(chosenitem);
            }
        }
        localStorage.setItem("favouriteitems",JSON.stringify(favouriteitems));
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products);
    }
    else{
        window.location= "login.html"
    }
}
/*let favouriteitems = [];

function addedtofavourite(id){
    if(localStorage.getItem("user name")){
        let chosenitem = products.find((item)=>item.id===id);
        if (chosenitem.liked===true){
            chosenitem.liked=false;
            favouriteitems = favouriteitems.filter((item) => item.id !== chosenitem.id);
        }
        else{
            chosenitem.liked = true;
            if (!favouriteitems.some((item) => item.id === chosenitem.id)) {
                favouriteitems.push(chosenitem);
            }
        }
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products);
    }
    else{
        window.location= "login.html"
    }
}*/
/**************filter by size ***********/

let sizefilter = document.querySelector(".size-filter");

sizefilter.addEventListener("change",getitemsfilteredbysize);

function getitemsfilteredbysize(e){
    let value = e.target.value;
    let products = JSON.parse(localStorage.getItem("products"))||products;
    if (value === "all"){
        drawProductsUI(products);
    }
    else {
        products = products.filter((i)=> i.size === value);
        drawProductsUI(products);
    }
}

/**************edit product ***********/
function editpproduct(id){
    localStorage.setItem("editproduct",id);
    window.location = "editproduct.html";
}