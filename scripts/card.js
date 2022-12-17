import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();



document.getElementById("confirm_Order").onclick=()=>{
    let cardnumber=document.getElementById("cardnumber").value;
let cardHolder=document.getElementById("holder").value;
let month=document.getElementById("month").value;
let cvv=document.getElementById("CVV").value;
let year=document.getElementById("year").value;
    console.log(cardnumber.length,cardnumber)
    if(cardnumber.length==16 && cvv.length==3&& cardHolder!==""&&month!==""&&year!==""){
         alert("congratulations! Your order is placed")
        window.location.href="home.html"
    }else{
        alert("check card details")
    }
}