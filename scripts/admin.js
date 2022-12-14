//add pro

document.getElementById("add_pro").addEventListener("click",()=>{
   let div1= document.getElementById("main_2")
    div1.innerHTML=null;
    let h1=cretel("h1");
    h1.innerText="Add Product"
    let id1=cretel("input");
    id1.type="number";
    id1.placeholder="Enter ID"
    
    let title=cretel("input");
    title.type="text";
    title.placeholder="Enter Product Name"

    let image=cretel("input");
    image.type="text"
    image.placeholder="Enter Image Url"

    let price=cretel("input");
    price.type="number"
    price.placeholder="Enter Price "

    let sub=cretel("button");
    sub.innerText="Add Product"
    sub.addEventListener("click",()=>{
        addPro()
    });

    

    div1.append(h1,id1,title,image,price,sub)
});
//update func
document.getElementById("updatpro").addEventListener("click",()=>{
    let div1= document.getElementById("main_2")
     div1.innerHTML=null;
     let h1=cretel("h1");
     h1.innerText="Update Product"
     let id1=cretel("input");
     id1.type="number";
     id1.placeholder="Update ID"
     
     let title=cretel("input");
     title.type="text";
     title.placeholder="Update Product Name"
 
     let image=cretel("input");
     image.type="text"
     image.placeholder="Update Image Url"
 
     let price=cretel("input");
     price.type="number"
     price.placeholder="Upadate Price "
 
     let sub=cretel("button");
     sub.innerText="Update Product"
     sub.addEventListener("click",()=>{
        //  addPro()
     });
 
     
 
     div1.append(h1,id1,title,image,price,sub)
 });


 document.getElementById("delepro").addEventListener("click",()=>{
    let div1= document.getElementById("main_2")
     div1.innerHTML=null;
     let h1=cretel("h1");
     h1.innerText="Delete Product"

     let id1=cretel("input");
     id1.type="number";
     id1.placeholder="Enter ID"
     
     let sub=cretel("button");
     sub.innerText="Delete Product"
     sub.addEventListener("click",()=>{
        //  addPro()
     });
 
     
 
     div1.append(h1,id1,sub)
 });


addPro=()=>{
    console.log(id1.value)
}

cretel=(el)=>{
return document.createElement(el)
}

