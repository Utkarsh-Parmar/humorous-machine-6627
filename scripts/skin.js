import{navbar,footer} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();



let url="https://js211-project.onrender.com/skin"
let product=async(pageNo=1)=>{
     let res=await fetch(`${url}?_limit=10&_page=${pageNo}`)
  //   https://js211-project.onrender.com/skin?_limit=4&_page=2
    // let res=await fetch(`url?_limit=4_page=${pageNo}`)
    res= await res.json()
   renderDom(res)
   console.log(res)
}
product()
let renderDom=(data)=>{
    let cont=document.getElementById("container_skin")
    cont.innerHTML=null
    data.forEach((el)=>{
        
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
        price.className="Product_Price"
        div.append(image,name,starImage,price)
        cont.append(div)
    })
}
 let pageNo=1
  let showButton=()=>{
    let btn=document.getElementById("btn")
    btn.innerHTML=null
    
    for(let i=1;i<4;i++){
      let btns=document.createElement("button")
      btns.innerText=i
      btns.onclick=()=>{
        product(i)
      pageNo=i
        showButton()
      }
      
      btn.append(btns)
   
    }
  }
  console.log(pageNo)
showButton()



let low=async(pageNo)=>{
// let res=await fetch(`${url}?_limit=4&_page=${pageNo}?_sort=price&_order=asc`)
//   data= await res.json()
// renderDom(data)
// console.log(data)
 console.log(pageNo)
}
let high=async(pageNo)=>{
  let res=await fetch(`${url}?_limit=4&_page=${pageNo}&_sort=price&_order=desc`)
    data= await res.json()
  renderDom(data)
  console.log(data)
   
  }



let func=(i,event)=>{
if(event.target.value=="high"){
high(i)
console.log(event.target.value)
}else if(event.target.value=="low"){
low(i)
console.log(event.target.value)
}

}
let sorting=document.getElementById("priceSorting").addEventListener("change",func)