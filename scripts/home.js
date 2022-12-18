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
let caraousel_div=document.getElementById("caraousel_top");
let caraouse=()=>{
    let images=["https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
            "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
        "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"];
        let img=document.createElement("img");
        img.src=images[0];
        caraousel_div.append(img);
        let i=1;
    setInterval(()=>{
        if(i===images.length){
            i=0;
        }
        img.src=images[i];
        caraousel_div.append(img);
        i++;
    },1500)
}
caraouse();


        let sec_carousel_div=document.getElementById("sec_car");
let caraouselsec=()=>{
    let images=["https://i.ibb.co/s60FtKg/Screenshot-2022-12-15-224113.png",
    "https://i.ibb.co/HV38Sg5/Screenshot-2022-12-15-224145.png",
    "https://i.ibb.co/N6DLgmk/Screenshot-2022-12-15-224217.png",
    "https://i.ibb.co/nLWSHLj/Screenshot-2022-12-15-224307.png",
    "https://i.ibb.co/PFy1fmR/Screenshot-2022-12-15-224342.png"];
        let img=document.createElement("img");
        img.src=images[0];
        sec_carousel_div.append(img);
        let i=1;
    setInterval(()=>{
        if(i===images.length){
            i=0;
        }
        img.src=images[i];
        sec_carousel_div.append(img);
        i++;
    },2000)
}
caraouselsec();

// footer about us

const parenContainer=document.querySelector(".about_us_desc")
parenContainer.addEventListener('click',event=>{
    const current =event.target;
    const isreadMoreBtn=current.className.includes('read-more-btn');
    if(!isreadMoreBtn)return;
    const currentText=event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent=current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})
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