import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

let data = JSON.parse(localStorage.getItem("signinData")) || [];


let sign_up_btn = document.getElementById("signup");
sign_up_btn.addEventListener("click",getFormData);  

function getFormData(){
    console.log("I am clicked")
    let form = document.getElementById("user_sign_up_form")
    let user_email = document.getElementById("user-email").value;
    let user_fname = document.getElementById("user-first-name").value;
    let user_lname = document.getElementById("user-last-name").value;
    let user_number = document.getElementById("user-number").value;
    let user_password = document.getElementById("user-password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(user_email.match(validRegex) && user_password.length>7 && user_password ==confirm_password){
        user_email = user_email;
        addData(user_email,user_password,user_fname,user_lname,user_number,confirm_password);
        form.reset();
        window.location.replace("signin.html");
    }else{
        alert("Invalid email or Password is less than 8 characters");
    }

    function addData(user_email,user_password,user_fname,user_lname,user_number,confirm_password){
        let p = {
            user_email,
            user_password,
            user_fname,
            user_lname,
            user_number,
            confirm_password
        }
        // data = JSON.parse(localStorage.getItem("signinData")) || [];
        data.push(p);
        localStorage.setItem("signinData",JSON.stringify(data));
        alert("Sign Up successfully");
    }

}
