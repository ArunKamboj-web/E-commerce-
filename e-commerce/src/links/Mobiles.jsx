import React from 'react'
import './newlink.css'
import useStore from '../Store/store'
const Mobiles = () => {
    const addCart= useStore((state)=>state.addCart);

    const handleAddtoCart=(product)=>{
        addCart(product);
        alert('Product has been added to the cart');
    }

    const products=[

        {
            id:13,
            name:"Iphone 15 Pro Max",
            image:"https://th.bing.com/th/id/OIP.2300x8uvZt7id8wh7RlLzQHaHa?rs=1&pid=ImgDetMain",
            description:"Apple iPhone 15 Pro Max (512 GB Storage, Blue Titanium)",
        },

        {
            id:14,
            image:"https://th.bing.com/th?id=OPAC.JwJv2jRfB7t6yg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
            name:"Iphone 14 Pro Max",
            description:"Apple iPhone 14 Pro Max (Silver, 256 GB)",
        },
        {
            id:15,
            name:"Iphone 12 Mini",
            image:"https://th.bing.com/th/id/OIP.XbDObQupWfCsefC_L6ElPgHaHS?rs=1&pid=ImgDetMain",
            description:"Apple iPhone 12 Mini (Sky Blue, 128 GB)",
        },
        {
            id:50,
            image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672357/Croma%20Assets/Communication/Mobiles/Images/300684_0_gmkksh.png?tr=w-640",
            name:"Iphone 15",
            description:"Apple iPhone 15 (128GB, Blue)",
        },
        {
            id:51,
            image:"https://d1eh9yux7w8iql.cloudfront.net/product_images/36834_efd45da5-a374-4c62-8b7b-7ceb2c86c0ae.jpg",
            name:"Iphone X",
            description:"Refurbished iPhone X 256 GB - Space Gray",
        },
        {
            id:52,
            image:"https://www.lifewire.com/thmb/QPQcwE7nV9fdtcnRqqtvBHph-eg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/iphone-4S-56a5363f3df78cf77286f4c9.jpg",
            name:"Iphone 4S",
            description:"Refurbished Iphone 4s 64 GB White",
        },
        {
            id:53,
            image:"https://tpmobile.vn/wp-content/uploads/2019/11/637037652462548298_11-trang-768x768.jpg",
            name:"Iphone 11",
            description:"Apple Iphone 11 64 GB White",
        },
        {
            id:54,
            image:"https://th.bing.com/th/id/OIP.xBUeKPlRH_DCmT7lMGnIuQHaHa?rs=1&pid=ImgDetMain",
            name:"Iphone 6",
            description:"Apple Iphone 6 128 GB Black",
        }

    ]
  return (
   <>
<div className='heading'>
    <h1>Iphones</h1>
</div>

<div className='containerC'>
    {products.map((product)=>(

        <div className='imagebox' key={product.id}>
            <img src={product.image} className='image' alt={product.name}></img>
           
            <div className='desc'>
                <h3>
                    {product.name}
                    <br></br>
                    {product.description}
                </h3>
            </div>

            <div className='btn'>
        <button onClick={()=>handleAddtoCart(product)}>Add</button>
        </div>
        </div>

        
    ))}

</div>
   </>
  )
}

export default Mobiles
