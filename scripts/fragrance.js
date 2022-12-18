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

let url="https://js211-project.onrender.com/fragrance"
let product=async(pageNo=1)=>{
  let res=await fetch(`${url}?_limit=9&_page=${pageNo}`)
 res= await res.json()
renderDom(res)
console.log(res)
}
product()
let renderDom=(data)=>{
 let cont=document.getElementById("container_skin")
 document.getElementById("loader").style.display="none"
 cont.innerHTML=null
 data.forEach((el)=>{

     let div=document.createElement("div")
     div.onclick=()=>{
       window.location.href="details.html"
       localStorage.Data_id=el.id
     }
     let image=document.createElement("img")
     image.src=el.image
     image.onclick=()=>{
       console.log("2")
     }
     let name=document.createElement("h5")
     name.innerText=el.name
     name.className="Product_Name"
     let starImage=document.createElement("img")
     starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
     let price=document.createElement("h5")
     price.innerText="Price Rs "+(+el.price)
     price.className="Product_Price"
     let addToCart=document.createElement("button")
     addToCart.className="add_to_cart"
     addToCart.innerHTML=`<i class="fa-solid fa-bag-shopping">Add To Cart</i>`
     div.append(image,name,starImage,price,addToCart)
     
     cont.append(div)
 })
}
let pageNo=1

let sortlh=document.getElementById("sortlh").onclick=()=>{
low(1)
}
let low=async(pageNo)=>{
let res=await fetch(`${url}?_limit=9&_page=${pageNo}`)
let data= await res.json()
data.sort(function(a,b){
return a.price-b.price
})
renderDom(data)
console.log(data)
}

let sorthl=document.getElementById("sorthl").onclick=()=>{
high(1)
}
let high=async(pageNo)=>{
let res=await fetch(`${url}?_limit=9&_page=${pageNo}`)
let  data= await res.json()
data.sort(function(a,b){
 return b.price-a.price
})
renderDom(data)
console.log(data)

}

let showButton=()=>{
let btn=document.getElementById("btn")
btn.innerHTML=null

for(let i=1;i<6;i++){
 let btns=document.createElement("button")
 btns.className="all_btns"
 btns.innerText=i
 btns.onclick=()=>{
   product(i)
   document.getElementById("sortlh").onclick=()=>{
     low(i)
   }
   document.getElementById("sorthl").onclick=()=>{
     high(i)
   }
 }
 
 btn.append(btns)

}
}
console.log(pageNo)
showButton()


let renderDom1=(data,brand_Name)=>{
let cont=document.getElementById("container_skin")
document.getElementById("loader").style.display="none"
 cont.innerHTML=null
 data.forEach((el)=>{
     if(el.brand==brand_Name){
     let div=document.createElement("div")
     div.onclick=()=>{
       window.location.href="details.html"
       localStorage.Data_id=el.id
     }
     let image=document.createElement("img")
     image.src=el.image
     let name=document.createElement("h5")
     name.innerText=el.name
     name.className="Product_Name"
     let starImage=document.createElement("img")
     starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
     let price=document.createElement("h5")
     price.innerText=+el.price
     price.className="Product_Price"
     div.append(image,name,starImage,price)
     cont.append(div)}
 })
}

document.getElementById("select_Brand").onchange=(event)=>{
let product1=async()=>{
let res=await fetch(url)
res= await res.json()

let brand_Name=event.target.value
renderDom1(res,brand_Name)
}
product1()
}
if(localStorage.user_Name!=undefined){
let user_name=document.getElementById("btn3")
user_name.innerText=localStorage.user_Name
}
let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
let Price=0
function price(data){
 data.forEach(function(el){
     Price=Price+el.price
     console.log(Price)   
      document.getElementById("myCartPrice").innerHTML="&#8377  "+Price
 })
}
price(cartData)