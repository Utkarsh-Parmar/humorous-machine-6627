//add product

document.getElementById("add_pro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Add Product"

    let id1 = cretel("input");
    id1.type = "number";
    id1.placeholder = "Enter ID"
    id1.setAttribute("id", "id_pro")

    let title = cretel("input");
    title.type = "text";
    title.placeholder = "Enter Product Name"
    title.setAttribute("id", "title")

    let image = cretel("input");
    image.type = "text"
    image.placeholder = "Enter Image Url"
    image.setAttribute("id", "image")

    let price = cretel("input");
    price.type = "number"
    price.placeholder = "Enter Price "
    price.setAttribute("id", "price")

    let sub = cretel("button");
    sub.innerText = "Add Product"
    sub.addEventListener("click", () => {
        addPro()
    });



    div1.append(h1, id1, title, image, price, sub)
});


//update func

document.getElementById("updatpro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Update Product"


    let id1 = cretel("input");
    id1.type = "number";
    id1.placeholder = "Enter  ID";
    id1.setAttribute("id", "id_pro");

    let title = cretel("input");
    title.type = "text";
    title.placeholder = "Update Product Name";
    title.setAttribute("id", "title")

    let image = cretel("input");
    image.type = "text";
    image.placeholder = "Update Image Url";
    image.setAttribute("id", "image")

    let price = cretel("input");
    price.type = "number";
    price.placeholder = "Upadate Price ";
    price.setAttribute("id", "price")

    let sub = cretel("button");
    sub.innerText = "Update Product"
    sub.addEventListener("click", () => {
        updPro()
    });

    div1.append(h1, id1, title, image, price, sub)
});

//delete func


document.getElementById("delepro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Delete Product"


    let id1 = cretel("input");
    id1.type = "number";
    id1.placeholder = "Enter ID"
    id1.setAttribute("id", "id_pro");

    let sub = cretel("button");
    sub.innerText = "Delete Product"
    sub.addEventListener("click", () => {
        delePro()
    });



    div1.append(h1, id1, sub)
});


addPro = async () => {
    let id1 = document.getElementById("id_pro")
    let obj = {
        id:+ id1.value,
        title: title.value,
        image_url: image.value,
        price: +price.value,
    }
    let url_1 = await fetch(`https://faskuys-j.onrender.com/inventory`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();

    alert("Product Added Successfully")
}

updPro = async () => {
    let id1 =document.getElementById("id_pro").value
    
    let obj = {
        title: title.value,
        image_url: image.value,
        price: +price.value,
    }
    let url_1 = await fetch(`https://faskuys-j.onrender.com/inventory/${id1}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();

    alert("Product Updated Successfully")
}

delePro=async()=>{
    let id1 =document.getElementById("id_pro").value

    let url_1 = await fetch(`https://faskuys-j.onrender.com/inventory/${id1}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();

    alert("Product Deleted Successfully")
    
}



cretel = (el) => {
    return document.createElement(el)
}

document.getElementById("redirect").addEventListener("click", () => {
window.location.href="viewpro.html"
})