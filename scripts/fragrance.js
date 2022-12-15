let url="https://js211-project.onrender.com/fragrance"
let product=async()=>{
    let res=await fetch(url)
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
        let price=document.createElement("h5")
        price.innerText=+el.price
        div.append(image,name,price)
        cont.append(div)
    })
}
let low=async()=>{

    let res=await fetch(`${url}?_sort=price&_order=asc`)
      data= await res.json()
    renderDom(data)
    console.log(data)
     
    }
    let high=async()=>{
    
    let res=await fetch(`${url}?_sort=price&_order=desc`)
      data= await res.json()
    renderDom(data)
    console.log(data)
     
    }
    
    let sorting=document.getElementById("priceSorting").addEventListener("change",(event)=>{
    
    if(event.target.value=="high"){
    high()
    console.log(event.target.value)
    }else if(event.target.value=="low"){
    low()
    console.log(event.target.value)
    }
    
    })