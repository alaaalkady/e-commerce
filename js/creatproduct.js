

let productform = document.querySelector("#creat-form");
let producttitle = document.querySelector("#product-name");
let productdesc = document.querySelector("#product-desc");
let productsize = document.querySelector("#product-size");
let productimg = document.querySelector(".product-img");
let productsizevalue;
let productimggg;


productsize.addEventListener("change",getsize);
productform.addEventListener("submit",creatproductfun);
productimg.addEventListener("change",uploadimg);





function getsize(e){
    productsizevalue = e.target.value;
}

function creatproductfun(e){
    
    e.preventDefault();
    let allproducts = JSON.parse(localStorage.getItem("products"))
    let namevalue = producttitle.value;
    let descvalue =  productdesc.value;
    if(namevalue && descvalue){
        let obj = {
            id : allproducts? allproducts.length+1 : 1,
            qty : 1,
            imageUrl : productimg,
            size :productsizevalue,
            title : namevalue,
            dscription : descvalue,
            isme:"y"
        };
        let newproducts = allproducts?[...allproducts,obj] : [obj];
        localStorage.setItem("products",JSON.stringify(newproducts));
        producttitle.value = "";
        productdesc.value = "";
        productsize.value = "";
        setInterval((window.location="index.html"),500)
    }
    else {
        alert("please enter data ...");
    }
}

function uploadimg(){
    let file =this.files[0];
    let types =["image/jpg","image/png"];
   /*if(types.indexOf(file.type) ==-1){
        alert("type is not supported");
        return;
    }
    if(file.size > 2*1024*1024){
        alert("file is too large");
        return;
    }*/
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
/*
 console.log("newproduct created"); 

    let newproduct = {};
    newproduct.title = producttitle.value;
    newproduct.dscription = productdesc.value;
    newproduct.size = productsizevalue;
    console.log(newproduct);
    let */


