import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();



let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]



let a=0;
let displayData=(data)=>{
    let cont=document.getElementById("container")
      cont.innerHTML=null
      data.forEach((el)=>{
        console.log(el)
          let div=document.createElement("div")
          let image=document.createElement("img")
          image.src=el.image
          let name=document.createElement("h5")
          name.innerText=el.name
          name.className="Product_Name"
          let starImage=document.createElement("img")
          starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
          let price=document.createElement("h5")
          price.innerText=+el.price
           a+=+el.price

          price.className="Product_Price"
          div.append(image,name,starImage,price)
          cont.append(div)
      
  })}
  displayData(cartData)
  document.getElementById("showPrice").innerText="Total Price  "+a