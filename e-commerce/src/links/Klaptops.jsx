import React from 'react'
import useStore from '../Store/store'
import './newlink.css'
const Klaptops = () => {

  const addCart=useStore((state)=>state.addCart);

  const handleAdd=(product)=>{
    addCart(product);
    alert('Product has been added to cart');
  }
  const products=[

    {
      id:7,
      image:"https://qph.cf2.quoracdn.net/main-qimg-b1e70743c95787369fd4f6f5212e2f84-pjlq",
      description:" Dell Inspiron 15 Laptop - Windows 11 & 12th gen Intel Core i3 - 15.6 FHD Screen - 8GB - 512G ",
      name:"Dell Inspiration 16",
    }, 

    {
      id:8,
      image:"https://qph.cf2.quoracdn.net/main-qimg-e26110ef13151b7b54ad20fbcfe68091-lq",
      description:"      Dell Inspiron 15 Laptop - Windows 11 & 12th gen Intel Core i3 - 15.6 FHD Screen- 16GB - 512GB",
      name:"Dell Inspiration 15 ",
    },
    {
      id:9,
     image:"https://i5.walmartimages.com/asr/3e546ff9-e1ea-458c-8ac5-671673a05fd2_1.93edbfcf20424e848d07e685a4a0e2e1.jpeg",
      description: "Dell Inspiron 14 Laptop - Windows 11 & 13th gen Intel Core i3 - 14",
      name:"Dell Inspiration 14",
    },
    {
      id:40,
      image:"https://images-na.ssl-images-amazon.com/images/I/71dcOldKRdL._AC_SL1500_.jpg",
      name:"Dell Inspiration 17.0",
      description:"Dell Inspiron 17 5000 Series 5770 17.3 Full HD Laptop - 8th Gen Intel i7"
    },
    {
      id:41,
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372667cv1d.jpg",
      name:"Dell Inspiration 17.0",
      description:"Dell Inspiron 17.3 7000 2-In-1 Touch-Screen Laptop - Intel Core I7"
    },
    {
      id:42,
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416473cv12d.jpg",
      name:"Dell G7",
      description:" Dell G7 17.3 300Hz Gaming Laptop Intel Core i7 16GB ..."
    },
    {
      id:43,
      name:"Dell Xp",
      image:"https://th.bing.com/th/id/OIP.kJKg90FdmLoyG7UFGqmcoQHaHa?rs=1&pid=ImgDetMain",
      description:"Refurbished Dell XPS 17 9720, i7, 16GB RAM, 512GB SSD, 17.3, 4GB ..."
    },
    {
      id:44,
      name:"Dell XP15",
      image:"https://th.bing.com/th/id/R.ea6ecf96c161a25ec75bc1b6138e3638?rik=2kz0bN20ntQJWg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-7Xkve-LNLEk%2fTWWg3MvLp2I%2fAAAAAAAAC4M%2fRa_9YfnYrrM%2fs1600%2fdell-xps-17-2011.jpg&ehk=5OeOoxc5AKnfM5QEjhTMFUWQXBtdn5Kq5N57kIDxAzI%3d&risl=&pid=ImgRaw&r=0",
      description:"Dell XPS 15 Sandy Bridge Laptops Price, Specifications"
    }
  ]
  return (
   <>
    <div className='heading'>
  <h1>Dell Laptops</h1> 
</div>
  <div className='containerC'>
    {products.map((product)=>(

<div key={product.id} className='imagebox'>
  <img src={product.image} alt={product.name} className='image'></img>
  <div className='desc'>
<h3>{product.name}<br />{product.description}</h3>
</div>

<div className='btn'>
  <button onClick={()=>handleAdd(product)} >Add</button>
</div>
</div>


    ))}
    
    </div>     
    
   </>
  )
}

export default Klaptops
