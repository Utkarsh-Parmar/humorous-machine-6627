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
caraouse();

const arrows = document.querySelectorAll(".arrow");
        const container= document.querySelectorAll("#sec_car");

        arrows.forEach((arrow, i) => {
            const ItemNo = container[i].querySelectorAll("img").length;
            let clickitem = 0;
            arrow.addEventListener("click", () => {
                clickitem++;
                if(ItemNo - (5 + clickitem) >= 0){
                    container[i].style.transform = `translateX(${
                        container[i].computedStyleMap().get("transform")[0].x.value
                        - 455}px)`;
                }else{
                    container[i].style.transform = "translateX(0)";
                    clickitem = 0;
                }
            });
        });

