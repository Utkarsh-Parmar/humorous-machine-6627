const navbar=()=>{
    return`
    <div id="img_top_nav">
    <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="">
    </div>
        <div id="middle_div">
            <div id="mid_div_cont">
                <div id="logo">
                    <!-- <img src="https://i.ibb.co/FHJL6Hv/b.png" alt=""> -->
                    <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="">
                </div>
                <div id="searchbox_nav">
                    <input type="text" id="nav_search"><button id="nav_search_btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div id="wishlist_login">
                    <button id="btn1"><i class="fa-solid fa-heart"></i></button>
                    <button id="btn2"><i class="fa-solid fa-user"></i></button>
                    <div id="btn3_div">
                        <button id="btn3">My Account</button>
                        <div class="dropdown-content">
                        <button>Register</button>
                        <button>Login</button>
                        <button>Admin Login</button>
                        </div>

                    </div>
                        

                   

                </div>
            </div>
        </div>
        <div id="nav_btns_Main_div">
            <div id="nav_btns_div">
                <button>MAKEUP <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>SKIN <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>HAIR <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>PERSONAL CARE <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>MOM & BABY CARE <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>FRAGRANCE <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>AYURVEDA <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
                <button>BRANDS <span><i class="fa-sharp fa-solid fa-angle-down"></i></span></button>
            </div>
            <div id="my_cart">
                <button id="my_cart_btn"><i class="fa-sharp fa-solid fa-bag-shopping"></i> MY CART </button><span><p>0.00</p></span>
            </div>
        </div>
    `
}

const footer=()=>{
    return `
    <div id="footer_container">
    <div id="footer_main_container">
        <div id="div1">
            <h4>CONTACT INFO</h3>
                <ul>(+91) 7877061041</ul>
                <ul>sales@beautybebo.com</ul>
                <ul>Open time: 10:00AM - 7:00PM</ul>
                <ul><i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i></ul>
        </div>
        <div id="div2">
            <h4>QUICK LINKS</h4>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return and Refund Policy</li>
            <li>Shipping Policy</li>
        </div>
        <div id="div3">
            <h4>CUSTOMER INFO</h4>
            <li>My Account</li>
            <li>Track your Order</li>
            <li>Order Returns</li>
            <li>Wishlist</li>
            <li>News & Events</li>
            <li>FAQ</li>
        </div>
        <div id="div4">
            <h4>CATEGORIES</h4>
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Personal Care</li>
            <li>Mom & Baby care</li>
            <li>Fragrance</li>
            <li>Ayurveda</li>
        </div>
    </div>
    <hr id="hrline">
        <div class="newsletter-footer">
            <div class="footer_payment_img">
                <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="">
            </div>
            <div id="footer_search">
                <div id="title_block">
                    <h3>Signup for Newsletter</h3>
                </div>
                <div id="input-box">
                    <input name="email" type="email" id="newsletter-footer"  placeholder="Signup for Newsletter" ><button id="footer_input_btn">Subscribe</button>
                </div>
            </div>
            
            
                                
        </div>
    `
}

export  {navbar,footer}