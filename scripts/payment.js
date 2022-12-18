import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

document.getElementById("visa_div").onclick=()=>{
    window.location.href="card.html"
}
let user_name=document.getElementById("btn3")
user_name.innerText=localStorage.user_Name