
let products = JSON.parse(localStorage.getItem("products"))|| productsBD;
let productid =JSON.parse(localStorage.getItem("editproduct"));
let getproduct = products.find((i)=>i.id ===productid);

let productform = document.querySelector("#creat-form");
let producttitle = document.querySelector("#product-name");
let productdesc = document.querySelector("#product-desc");
let productsize = document.querySelector("#product-size");
let productimgupload = document.querySelector(".product-img");



producttitle.value = getproduct.title;
productdesc.value = getproduct.dscription;
productsize.value = getproduct.size;
productimg = getproduct.imageUrl;

//events//

productsize.addEventListener("change",getsize);
productform.addEventListener("submit",editproductfun);
productimgupload.addEventListener("change",uploadimg);

//functions//

function editproductfun(e){
    e.preventDefault();

    getproduct.title=producttitle.value;
    getproduct.dscription=productdesc.value;
    getproduct.size=productsize.value;
    getproduct.imageUrl=productimg;


    console.log("after update",getproduct);

    localStorage.setItem("products",JSON.stringify(products));
    
       
    setInterval((window.location="index.html"),500)

    
    }
    
    function getsize(e){
        getproduct.size = e.target.value;
    }



function uploadimg(){
    let file =this.files[0];
    let types =["image/jpg","image/png"];
   /* if(types.indexOf(file.type) ==-1){
        alert("type is not supported");
        return;
    }*/
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
