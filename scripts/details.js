import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();
let id=localStorage.Data_id
let url="https://js211-project.onrender.com/skin"
let product=async(pageNo=1)=>{
    let res=await fetch(`${url}/${id}`)
   res= await res.json()
  renderDom([res])
  console.log(res)
}
product()
let renderDom=(data)=>{
    let cont=document.getElementById("container")
    document.getElementById("loader").style.display="none"
      cont.innerHTML=null
      data.forEach((el)=>{
         
          let div1=document.createElement("div")
          div1.className="main_image"
          let div2=document.createElement("div")
          let image=document.createElement("img")
          image.src=el.image
          let name=document.createElement("h5")
          name.innerText=el.name
          name.className="Product_Name"
          let starImage=document.createElement("img")
          starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
          starImage.className="starImages"
          let brand=document.createElement("p")
          brand.innerText="BRAND  "+el.brand
          brand.className="Product_Brand"
          let amount=document.createElement("p")
          amount.innerText=el.amount
          amount.className="Product_amount"
          let price=document.createElement("h5")
          price.innerText="Rs "+(+el.price)
          price.className="Product_Price"
          div1.append(image)
          let addToCart=document.createElement("button")
        addToCart.className="add_to_cart"
        addToCart.innerHTML=`<i class="fa-solid fa-bag-shopping">Add To Cart</i>`
        addToCart.onclick=()=>{
        
           window.location.href="cart.html"
           
          let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
          console.log("1")
          let obj={
            id:el.id,
            name:el.name,
            brand:el.brand,
            image:el.image,
            price:el.price,
            amount:el.amount
          }
          cartData.push(obj)
   localStorage.setItem("cart_data", JSON.stringify(cartData));
            }
          div2.append(name,amount,starImage,brand,price,addToCart)
          cont.append(div1,div2)
      })
  }

delete localStorage.Data_id;
let user_name=document.getElementById("btn3")
user_name.innerText=localStorage.user_Name