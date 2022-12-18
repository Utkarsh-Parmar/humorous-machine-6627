import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

//makeup btn link
let makeup_btn=document.getElementById('makeup_btn');
makeup_btn.onclick=()=>{
    window.location.href="skin.html"
}
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
    window.location.href="adminlogin.html"
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

document.getElementById("confirm_Order").onclick=()=>{
    let cardnumber=document.getElementById("cardnumber").value;
let cardHolder=document.getElementById("holder").value;
let month=document.getElementById("month").value;
let cvv=document.getElementById("CVV").value;
let year=document.getElementById("year").value;
    console.log(cardnumber.length,cardnumber)
    if(cardnumber.length==16 && cvv.length==3&& cardHolder!==""&&month!==""&&year!==""){
         alert("congratulations! Your order is placed")
         localStorage.removeItem("cart_data")
        window.location.href="index.html"
    }else{
        alert("check card details")
    }
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