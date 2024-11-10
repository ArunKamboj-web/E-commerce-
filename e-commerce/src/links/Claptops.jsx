import React from 'react';
import useStore from '../Store/store';
import './newlink.css';
const Claptops = () => {
    const addCart = useStore((state) => state.addCart);


const handleAddToCart=(product)=>{
            addCart(product);
        alert('Product has been added to cart'); 
}


    const products = [
        {
            id: 1,
            name: 'ThinkBook 16 40.64cms - 13th Gen Intel i7',
            image: 'https://imgeng.jagran.com/images/2024/07/03/template/image/laptop-under-70k-lenovo-3-1719990760856.jpg',
            description: 'Core i3 12th Gen / 8 GB / Windows 11'
        },
        {
            id: 2,
            name: 'Lenovo ThinkPad E15 Gen 4 (21E6S0W700)',
            image: 'https://qph.cf2.quoracdn.net/main-qimg-3c0c6e7da8bb0b503b1fbfe8aa8be833-lq',
            description: 'Core i3 12th Gen / 8 GB / Windows 11'
        },
        {
            id: 3,
            name: 'IdeaPad 5 2-in-1 Gen 9, 35.56cms - AMD',
            image: 'https://p4-ofp.static.pub//fes/cms/2024/05/20/83l20rqtrp5q2mb1f9quktd3krrm56635827.png',
            description: 'Core i3 12th Gen / 8 GB / Windows 11'
        },
        {
            id:30,
            image:"https://p1-ofp.static.pub//medias/26285900150_IdeaPad52in114IRU9LunaGrey_202401161105541710125766649.png",
            name: 'IdeaPad 7 2-in-1 Gen 9, 35.56cms - AMD',
            description:"IdeaPad 5i 2-in-1 Intel, 35.56cms - Core 7 (Luna Grey)"
        },
        {
            id:31,
            image:"https://th.bing.com/th/id/OIP.50O8CmTasPCc4mFuUxao2AHaHa?rs=1&pid=ImgDetMain",
            name:"Ideapad 3 1-in-1 Gen 8",
            description:"Lenovo ideapad S340 15.6 Laptop, Intel Core i5-8265U Quad-Core ."
        },
        {
            id:32,
            image:"https://p4-ofp.static.pub//fes/cms/2024/04/15/4807n0vwqqcoyv9q5m7ecql0hgqh0l845946.png",
            name:"ThinkPad L13",
            description:"ThinkPad L13 2-in-1 Gen 5 Intel Core i3-8265U Quad-Core",
        },
        {
            id:33,
            image:"https://notebooks.com/wp-content/uploads/2012/01/S200_Blue_Standard_05.jpg",
            name:"ThinkPad K12",
            description:"Lenovo ThinkPad Twist 12.5 Convertible Multi-Touch 33472HU B&H"
        },
        {
            id:34,
            image:"https://www.bhphotovideo.com/images/images2500x2500/Lenovo_33472hu_ThinkPad_Twist_12_5_Convertible_896114.jpg",
            name:"Lenovo Notebook A10",
            description:"Lenovo Notebook Non-Twist 12.5 Non-Convertible Single-Touch 33472HU B&H"
        }
    ];

    return (
        <>
            <div className="heading">
                <h1>Lenovo Laptops</h1>
            </div>

            <div className="containerC">
                {products.map((product) => (
                    <div key={product.id} className='imagebox' >
                        <img src={product.image}className='image'  alt={product.name} />
                        <div className="desc">
                            <h3>{product.name}<br />{product.description}</h3>
                        </div>
                        <div className="btn">
                          
                        <button onClick={() => handleAddToCart(product)}>Add</button>
                     
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Claptops;
