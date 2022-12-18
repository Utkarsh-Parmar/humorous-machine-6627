import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

//indexpage btn link
let index_btn=document.getElementById('logo');
index_btn.onclick=()=>{
    window.location.href="index.html"
}

//register btn link
let reg_btn=document.getElementById('register_btn');
reg_btn.onclick=()=>{
    window.location.href="signup.html"
}
//signin page
let sign_in=document.getElementById("login_page");
sign_in.onclick=()=>{
    window.location.href="signin.html"
}
//admin login
let admin_log=document.getElementById("admin_login")
admin_log.onclick=()=>{
    window.location.href="admin.html"
}
// linking the cart page
let cart_btn=document.getElementById("my_cart_btn");
cart_btn.onclick=()=>{
    window.location.href="cart.html"
}
let fragrnace_btn=document.getElementById("fragrance_btn");
fragrnace_btn.onclick=()=>{
    window.location.href="fragrance.html"
}

//hair_btn
let hair_btn=document.getElementById("hair_btn");
hair_btn.onclick=()=>{
    window.location.href="hair.html"
}
//skin page;
let skin_page=document.getElementById("skin-btn")
skin_page.onclick=()=>{
    window.location.href="skin.html"
}
//fragrance page;
let frag_page=document.getElementById("fragrance_btn")
frag_page.onclick=()=>{
    window.location.href="fragrance.html"
}

let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]

let totalCart=cartData.length;

let bag=document.getElementById("total");
bag.innerText=+totalCart;



let displayData=(data)=>{
    let cont=document.getElementById("container")
      cont.innerHTML=null
      data.forEach((el,index)=>{
          let div=document.createElement("div")
          let image=document.createElement("img")
          image.src=el.image
          let name=document.createElement("h5")
          name.innerText=el.name
          name.className="Product_Name"
          let starImage=document.createElement("img")
          starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
          let price=document.createElement("h5")
          price.innerText="Rs "+(+el.price)
          
        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.onclick=()=>{

            deletebtn(index,el)
        }
          price.className="Product_Price"
          div.append(image,name,starImage,price,remove)
          cont.append(div)
      
  })}
  displayData(cartData)


  function deletebtn(i,el){
   cartData.splice(i,1)
   localStorage.setItem("cart_data", JSON.stringify(cartData));
   window.location.reload ()
   displayData(cartData)
  }
  let Price=0
function price(data){
    data.forEach(function(el){
        Price=Price+el.price
        console.log(Price)   
         document.getElementById("showPrice").innerText="Rs  "+Price
         document.getElementById("myCartPrice").innerHTML="&#8377  "+Price
    })
}
price(cartData)

document.getElementById("indexLink").onclick=()=>{
  window.location.href="skin.html"
}
document.getElementById("proceed").onclick=()=>{
  window.location.href="payment.html"

}
// window.onload=()=>{
// price(cartData)
// }
if(localStorage.user_Name!=undefined){
let user_name=document.getElementById("btn3")
user_name.innerText=localStorage.user_Name
}