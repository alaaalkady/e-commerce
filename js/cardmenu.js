
let cardproductdivDom = document.querySelector(".cardproducts div");
let badgeDom = document.querySelector(".badge");
let shoppingcardicon = document.querySelector(".shoppingcard");
let cardproductsmenu = document.querySelector(".cardproducts")


let addeditems = localStorage.getItem("productsincard")?
JSON.parse(localStorage.getItem("productsincard")):[];

if(addeditems){
    addeditems.map((item)=>{
        cardproductdivDom.innerHTML += `<p> ${item.title}${item.qty}</P>`
    })
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addeditems.length;

}

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

shoppingcardicon.addEventListener('click',opencard);