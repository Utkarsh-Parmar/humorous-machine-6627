import { navbar, footer } from "../components/navbar.js"

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar()

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();


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

    let amount = cretel("input");
    amount.type = "text"
    amount.placeholder = "Enter Product amount"
    amount.setAttribute("id", "amount")

    let image = cretel("input");
    image.type = "text"
    image.placeholder = "Enter Image Url"
    image.setAttribute("id", "image")

    let brand = cretel("input")
    brand.type = "text"
    brand.placeholder = "Enter Product Brand"
    brand.setAttribute("id", "brand")

    let price = cretel("input");
    price.type = "number"
    price.placeholder = "Enter Price "
    price.setAttribute("id", "price")

    let sub = cretel("button");
    sub.innerText = "Add Product"
    sub.addEventListener("click", () => {
        addPro()

    });



    div1.append(h1, id1, title, amount, brand, price, image, sub)
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

    // let title = cretel("input");
    // title.type = "text";
    // title.placeholder = "Update Product Name";
    // title.setAttribute("id", "title")

    // let image = cretel("input");
    // image.type = "text";
    // image.placeholder = "Update Image Url";
    // image.setAttribute("id", "image")

    let price = cretel("input");
    price.type = "number";
    price.placeholder = "Upadate Price ";
    price.setAttribute("id", "price")

    let sub = cretel("button");
    sub.innerText = "Update Product"
    sub.addEventListener("click", () => {
        updPro()
    });

    div1.append(h1, id1, price, sub)
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
    id1.value = null
    div1.append(h1, id1, sub)
});


let addPro = async () => {
    let id1 = document.getElementById("id_pro")
    let obj = {
        id: + id1.value,
        name: title.value,
        amount: amount.value,
        brand: brand.value,
        price: +price.value,
        image: image.value,
    }
    let url_1 = await fetch(`https://js211-project.onrender.com/hair`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();

    alert("Product Added Successfully")
}

let updPro = async () => {
    let id1 = document.getElementById("id_pro").value

    let obj = {
        
        price: +price.value,
    }
    let url_1 = await fetch(`https://js211-project.onrender.com/hair/${id1}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();

    alert("Product Updated Successfully")
}

let delePro = async () => {
    let id1 = document.getElementById("id_pro").value

    let url_1 = await fetch(`https://js211-project.onrender.com/hair/${id1}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json "
        }
    })
    let dat1 = await url_1.json();
    

    alert("Product Deleted Successfully")

}



let cretel = (el) => {
    return document.createElement(el)
}

document.getElementById("redirect").addEventListener("click", () => {
    window.location.href = "product.html"
})