import React from 'react'
import useStore from '../Store/store'
import './newlink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Ecommerce = () => {
    const addCart= useStore((state)=>state.addCart);
    const handleAddtoCart=(product)=>{
        addCart(product);
    }
    const products=[
        {
            id:22,
            image:"https://th.bing.com/th/id/OIP.MHWfGUo9nyLXQuVuA387kQAAAA?rs=1&pid=ImgDetMain",
            name:"Redmi 10",
            description:"Redmi 10 Dual SIM Smartphone (6GB RAM, 128GB, Black)"

        },
        {
            id:23,
            image:"https://th.bing.com/th?id=OPAC.N777ivpVZ7M2sQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
            name:"Redmi A3",
            description:"Redmi A3 Dual SIM Smartphone (6GB RAM, 128GB, Black)"
        }, 
        {
            id:24,
            image:"https://th.bing.com/th?id=OPAC.hw9Wv%2fx5wN%2bSog474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
            name:"Redmi Note 13",
            description:"Redmi Note 13 5G Dual SIM Smartphone (12GB RAM, 256GB, Stealth Black)"
        },

        {
            id:25,
            image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1034864/niuIXGvL1-1034864_1.jpg",
            name:"Philips Trimmer",
            description:"Philips BG1025/15 Showerproof Body Groomer For Men",
        },

        {
            id:26,
            image:"https://i5.walmartimages.com/asr/f9906bb8-9d9a-491c-95b5-cfc002981bc7_1.319fcfd2af4d8af1c1ae0f90cdaba575.jpeg",
            name:"Ladies Underwear",
            description:"Comfort Choice - Comfort Choice Women's Plus Size 5-Pack Stretch Cotton ..."
        },
        {
            id:27,
            image:"https://th.bing.com/th?id=OPAC.tEYYhcw3kUWHcQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
            name:"Calvin Klein Gents Underwear 90CM",
            description:"CK INNERWEAR Presents Plain Lycra Trunk Underwear For Men (Pack Of 2) Size 90 Assorted"
        },
        {
            id:28,
            image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674044832/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/251324_0_c1a675.png?tr=w-640",
            name:"Airpods Gen 2",
            description:"Apple AirPods (2nd Generation) with Charging Case"
        },

        {
            id:29,
            image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697624372/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/273406_rznbvr.png?tr=w-640",
            name:"HeadPhones",
            description:"JBL Tune 770NC Bluetooth Headphone with Adaptive Noise Cancellation (Pure Bass Sound, Over Ear, Black)",
        }

    ];
  return (
<>
<div className='heading'>
        <h1>Home</h1>
      </div>

      <div className='containerC'>
    {products.map((product)=>(
        <div key={product.id} className='imagebox'>
            <img className='image' alt={product.name} src={product.image}></img>
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
      
      <div  style={{position:'absolute', bottom:-450, height:'4.2vh', width:'100vw'}} className='footer'>
    <h4>
    <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
    All Rights Reserved By Arun Kamboj
    </h4>
  </div>
</>
  )
}

export default Ecommerce
