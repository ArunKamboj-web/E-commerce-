import React from "react";
import useStore from "../Store/store";
import './newlink.css';
const Cmobiles = () => {
  
  const addCart = useStore((state) => state.addCart);

  const handleAddToCart=(product)=>{
    addCart(product);
    alert('Product has been added to cart');
  }
  const products = [
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39ZDVTzFqvA2El9kIfzWy-n2tfXA1F5H9Zw&s",
        description:"Samsung S-22 Ultra Black 128GB RAM 6.1 Inch display",
        name: "Samsung S-22 Ultra"
    },

    {
      id:5,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaJWB5uOUWGNi7D3EwziVdPBIjsgnbkpEEQ&",
      description:"Samsung S-23 Ultra Silver 256GB RAM 6.3 Inch display",
      name: "Samsung S-23 Ultra"

    },
    {
      id:6,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-thumb-539573274",
      description:"Samsung S-24 Ultra Black 512GB RAM 6.5 Inch display",
      name: "Samsung S-24 Ultra"

    },
    {
      id:35,
      image:"https://th.bing.com/th?id=OPAC.zyVD0iVQkNoTlw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      name:"SamSung Galaxy J2",
      description:"Samsung Galaxy J2 (1GB RAM 8GB Storage Black) Refurbished"
    },
    {
      id:36,
      image:"https://th.bing.com/th?id=OPAC.ikkr8%2b585W6lsA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      name:"Samsung Galaxy J7",
      description:"Samsung Galaxy J7( Prime Gold, 16GB 3GB RAM) Refurbished"
    },
    {
      id:37,
      image:"https://th.bing.com/th?id=OPAC.sKR0AyHZU4NJEQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      name:"Samsung Galaxy A07",
      description:"Samsung A Series Galaxy A05 4G Dual Sim Smartphone (6GB RAM, 128GB)"
    },
    {
      id:38,
      image:"https://th.bing.com/th?id=OPAC.wdrBz9xIhFqVJQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      description:"Samsung Galaxy Z Flip4 5G (Pink Gold, 8GB RAM, 128GB Storage)",
      name:"Samsung Galaxy Z Fold"
    },
    {
      id:39,
      image:"https://th.bing.com/th?id=OPAC.pI9l5oqe6kIv%2fg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      description:"Samsung Galaxy F15",
      name:"Samsung Galaxy F15 5G (Jazzy Green, 6GB RAM, 128 GB Storage)"
    }
  ];
  return (
    <>
    <div className="heading">
      <h1>SamSung Phones</h1>
    </div>

    <div className="containerC">
     {products.map((product)=>(
      <div key={product.id} className='imagebox'>
        <img src={product.image}className='image' alt={product.name} ></img>
        <div className='desc'>
<h3>
  {product.name}
  <br/>
  {product.description}
</h3>
        </div>
        <div className="btn">
<button onClick={()=>handleAddToCart(product)}>Add</button>
        </div>
        </div>
     ))}
    </div>
    </>
  );
};
export default Cmobiles;
