import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

let data = JSON.parse(localStorage.getItem("signinData")) || [];
// console.log(data[1].user_email);

let reg_btn=document.getElementById('register_btn');
reg_btn.onclick=()=>{
    window.location.href="signup.html"
}

let sign_in=document.getElementById("login_page");
sign_in.onclick=()=>{
    window.location.href="signin.html"
}

let admin_log=document.getElementById("admin_login")
admin_log.onclick=()=>{
    window.location.href="adminlogin.html"
}

let cart_btn=document.getElementById("my_cart_btn");
cart_btn.onclick=()=>{
    window.location.href="cart.html"
}
//linking the 
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


var user_sign_in = document.getElementById("new");
user_sign_in.addEventListener("click", newSign);
function newSign(){


    console.log("I m clicked");
    
    let email = document.getElementById("user-email-in").value;
    let signin_pass = document.getElementById("user-password-in").value;
    let count =0;
    let n = data.length;
    for(let i=0;i<n;i++){
        if(data[i].user_email === email){
            if(data[i].user_password === signin_pass){
                let usr_name = document.getElementById("btn3")
                // usr_name.innerText = data[i].user_fname ;
                usr_name.innerText = "Utkarsh" ;

                window.location.replace("home.html");
                return;
            }else{
                alert("Incorrect Password");
                return;
            }
        }else{
            count=0;
        }
    }
    if(count ===0){
        alert("Not a User! Please Create an Accout");
    }
}




// console.log()

