import React from 'react'
import useStore from '../Store/store'; // Adjust the path as needed
import './newlink.css'
const Omobiles = () => {

  const addCart = useStore((state) => state.addCart);

  const handleAddToCart = (product) => {
      addCart(product);
      alert('Product has been added to cart');
  }

  
  const products = [
    {
        id: 16,
        name: "OPPO A57",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmPUQ2LFcN5XJbpYnihLdzQI6msHfrvK93w&s",

        description: "OPPO A57, Glowing GOLD, 4GB RAM, 64GB"
    },
    {
        id: 17,
        name: "OPPO A58",
        image: "https://www.reliancedigital.in/medias/Oppo-A-series-Starry-Black-Mobile-Phone-494351586-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzMwNnxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaGE5LzEwMDg0NDM0NTc1MzkwLmpwZ3wyNmQzMWM0ODQ4NDg1MDZkZmE4ZGNiNDVlNjYwYzM2Zjg2YzRlOWFlZGUwYjAwMDczM2RkYjI0N2U4YzRmMWZh",

        description:"Oppo A58 (Glowing Black, 6GB RAM, 128GB Storage) Refurbished  Single Sim   "
    },
    {
        id: 18,
        name: 'OPPO A18',
        image: "https://www.myg.in/images/thumbnails/230/230/detailed/45/gl1.jpg",
        description: "  OPPO A18 64 GB (Glowing Black, 4 GB RAM)"
    },
    {
        id:55,
        image:"https://th.bing.com/th/id/OIP.pwYgLdJTd7JAb6bNAVy0MAHaHa?rs=1&pid=ImgDetMain",
        name:"Oppo A54",
        description:"Oppo A54 5G Dual SIM in Schwarz mit 64GB und 4GB RAM"
    },
    {
        id:56,
        image:"https://th.bing.com/th/id/OIP.RPXvO02AvY2gl-txBgolSQHaD4?rs=1&pid=ImgDetMain",
        name:"Oppo Reno 5",
        description:"OPPO Reno 5 4G 128 GB Rainbow"
    },
    {
        id:57,
        image:"https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/03/oppo-find-x3-neo.png?resize=350",
        name:"OPPO X3",
        description:"OPPO Find X3 5G 256GB Silver Grey"
    },
    {
        id:58,
        image:"https://cdn1.smartprix.com/rx-iuvs4uvlM-w1200-h1200/uvs4uvlM.jpg",
        name:"OPPO A57",
        description:"OPPO A57 128 GB Black"
    },
    {
        id:59,
        image:"https://brain-images-ssl.cdn.dixons.com/6/8/10219886/u_10219886.jpg",
        name:"Oppo A5",
        description:"OPPO A5 2020 64GB Black"
    }
];
  return (
    <>
    <div className="heading">
        <h1>OPPO Mobiles</h1>
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

export default Omobiles
