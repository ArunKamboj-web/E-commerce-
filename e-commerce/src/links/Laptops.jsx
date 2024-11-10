import React from 'react'
import useStore from '../Store/store'; // Adjust the path as needed
import './newlink.css'
const Laptops = () => {
  const addCart = useStore((state) => state.addCart);
  
const products=[

  {
    id:10,
    image:"https://tiimg.tistatic.com/fp/1/007/893/user-friendly-stylish-modal-light-weight-13-3-retina-display-m1-chip-apple-laptop-274.jpg",
    description:" Customise your 13 MacBook Air - Midnight",
    name:"Macbook Air",
  },

  {
    id:11,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEv7019KMYyCNQI4rSSQZKSnGy2qiGqzDoA&s",
    description:" Customise your 14 MacBook Pro - Space Grey",
    name:"Macbook Pro"
  },
  {
    id:12,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5ao8XpX0Kbexh9WzWOHSSfoZu9Yvf54Ezw&s",
    description:"Customise your 16 MacBook Pro Max - Space Black",
    name:"Macbook Pro Max"

  },
   {
    id:45,
    image:"https://th.bing.com/th/id/OIP.oWFlLTvRi8SFTUZT62BxAwAAAA?rs=1&pid=ImgDetMain",
    name:"Macbook Pro",
    description:" Apple MacBook Pro 13 (Early 2015)-Space White",
  },
  {
    id:46,
    image:"https://th.bing.com/th/id/OIP.Gugj6FOZ22QOi6iH2rTQSgAAAA?rs=1&pid=ImgDetMain",
    name:"Macbook Air",
    description:" Apple MacBook Air 15 -Golden yellow",
  },
  {
    id:47,
    image:"https://th.bing.com/th/id/OIP.1ibS0fLUyyzt8mI81hz-DwHaGr?rs=1&pid=ImgDetMain",
    name:"Apple Macbook Pro 15",
    description:"Apple MacBook Pro 15 (Late 2016 2.9 GHz, 460) Notebook  Silver...",
  },
  {
    id:48,
    image:"https://th.bing.com/th/id/OIP.FE59pxJq8hNAEqtnM_CglwAAAA?rs=1&pid=ImgDetMain",
    name:"Apple Macbook Pro 15",
    description:"Apple MacBook Pro 15 (Late 2016 2.9 GHz, 460) Notebook  Silver Grey...",
  },
  {
    id:49,
    image:"https://th.bing.com/th/id/OIP.Sy-Kx6QC-peePOmiqQ_kMgHaHa?rs=1&pid=ImgDetMain",
    name:"Apple Macbook Pro",
    description:"Apple MacBook Pro MR9Q2 8th Gen-Intel Core i5, 2.3Ghz, 13.3-Inch, 256GB ...",
  }
]

  const handleAddToCart = (product) => {
      addCart(product);
      alert('Product has been added to cart');
  };
  return (
    <>
     <div className='heading'>
        <h1>Macbooks</h1>
    </div>

    <div className='containerC'>
    {products.map((product)=>(
      <div key={product.id}className='imagebox'>
        <img src={product.image} className='image'  alt={product.name}></img>
        <div className='desc'>
                            <h3>{product.name}<br />{product.description}</h3>
                        </div>
                        <div className="btn">
                            <button onClick={() => handleAddToCart(product)}>Add</button>
                        </div>
        </div>

    ))}
    </div>
    </>
   
  )
}

export default Laptops
