import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();



let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]

let totalCart=cartData.length;

let bag=document.getElementById("total");
bag.innerText=+totalCart;



let displayData=(data)=>{
    let cont=document.getElementById("container")
      cont.innerHTML=null
      data.forEach((el,index)=>{
          let div=document.createElement("div")
          let image=document.createElement("img")
          image.src=el.image
          let name=document.createElement("h5")
          name.innerText=el.name
          name.className="Product_Name"
          let starImage=document.createElement("img")
          starImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
          let price=document.createElement("h5")
          price.innerText=+el.price
          
        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.onclick=()=>{

            deletebtn(index,el)
        }
          price.className="Product_Price"
          div.append(image,name,starImage,price,remove)
          cont.append(div)
      
  })}
  displayData(cartData)


  function deletebtn(i,el){
   cartData.splice(i,1)
   localStorage.setItem("cart_data", JSON.stringify(cartData));
   window.location.reload ()
   displayData(cartData)
  }
  let Price=0
function price(data){
    data.forEach(function(el){
        Price=Price+el.price
        console.log(Price)   
         document.getElementById("showPrice").innerText="Rs  "+Price
    })
}
price(cartData)
// window.onload=()=>{
// price(cartData)
// }