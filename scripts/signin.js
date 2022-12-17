import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

let data = JSON.parse(localStorage.getItem("signinData")) || [];

let sign_up_btn = document.getElementById("sign-up-btn");

function getFormData(){
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

sign_up_btn.addEventListener("click",getFormData);


var user_sign_in = document.getElementById("user_signin");
user_sign_in.onclick = (event)=>{
    signIn(event);
}
// user_sign_in.onclick=()=>{

// signIn(event)
// }

function signIn(event){
     event.preventDefault();

    console.log("I m clicked");
    
    let email = document.getElementById("user-email-in").value;
    let signin_pass = document.getElementById("user-password-in").value;
    let count =0;
    let n = data.length;
    for(let i=0;i<n;i++){
        if(data[i].user_email === email){
            if(data[i].user_password === signin_pass){
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
