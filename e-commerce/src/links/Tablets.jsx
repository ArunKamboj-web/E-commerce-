import React from 'react'
import useStore from '../Store/store'; // Adjust the path as needed
import './newlink.css'
const Tablets = () => {
  const addCart = useStore((state) => state.addCart);

  const handleAddToCart = (product) => {
      addCart(product);
      alert('Product has been added to cart');
  };
  const products = [
    {
        id: 19,
        name: 'iPad 10th Gen',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgU6UeBle38odSz1jayUJHPLheuVYp5azHA&s",
        description: ' Apple iPad (10th generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB'
    },
    {
        id: 20,
        name: 'iPad Pro 11th Gen',
        image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQ8yBIVQtRh5ZSPsb2v4jdKd61m_xG8kW0A&s",
        description: '  iPad Pro Generations: A Comparison Of All The Models and Features - 9meters'
    },
    {
        id: 21,
        name: 'iPad Air 5th Gen',
        image: "https://d2e6ccujb3mkqf.cloudfront.net/73860b02-9fee-4ead-9d50-c18dff8558d1-1_264755ff-1512-47e4-aaca-a8ee982b1898.jpg",
        description: ' Apple iPad Air 5th Gen (MM9D3HN/A) Silver, 27.69 cm (10.9 inch) Wi-Fi Tablet, 64'
    },
    {
        id:60,
        image:"https://th.bing.com/th/id/OIP.-uNPFu_GW0-0DrgbWP2S9AHaHa?rs=1&pid=ImgDetMain",
        name:"Apple iPad Pro",
        description:"Apple iPad Pro 12.9 4th Generation 512GB WiFI Only Space Gray ..",
    },
    {
        id:61,
        image:"https://i5.walmartimages.com/asr/f83ff552-e26c-4231-bdc4-4d755beb7f6a_1.e9e57019cdf48725cf07cddfd72c5457.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        name:"Apple iPad Mini",
        description:"Apple iPad Mini 8th Generation Wi-Fi(9.5 Inch, 64GB, Black, 2018Model)",
    },
    {
        id:62,
        image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700218264/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264337_pu98ds.png?tr=w-640",
        name:"Apple iPad 9th Gen",
        description:"Apple iPad 9th Generation Wi-Fi (10.2 Inch, 64GB, Silver, 2021 model)",
    },
    {
        id:63,
        image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967748/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264261_zzl2aq.png?tr=w-640",
        name:"Apple iPad 10th Gen",
        description:"Apple iPad 10th Generation Wi-Fi (10.9 Inch, 64GB, Blue, 2022 model)",
    },
    {
        id:64,
        image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685964512/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264264_otnx7u.png?tr=w-640",
        name:"Apple iPad 10th Gen",
        description:"Apple iPad 10th Generation Wi-Fi (10.9 Inch, 256GB, Silver, 2022 model)",
    }
];
  return (
    <>
            <div className="heading">
                <h1>Ipads</h1>
            </div>

            <div className="containerC">
                {products.map((product) => (
                    <div key={product.id} className='imagebox'>
                        <img src={product.image} className='image' alt={product.name} />
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

export default Tablets
