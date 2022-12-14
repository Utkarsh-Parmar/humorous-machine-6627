import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

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
    },2000)
}
caraouse()