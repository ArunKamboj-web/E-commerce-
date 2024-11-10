import React from 'react';
import useStore from './Store/store'; // Adjust the path as needed
import './Cart.css'
const Cart = () => {
    const items = useStore((state) => state.items);
    const removeItems = useStore((state) => state.removeItems);

    return (
       <>
       <div className='heading'>
        <h2>Shopping Cart</h2>
       </div>
       {items.length === 0 && <p style={{textAlign:"center", margin:"15px"}}>Your cart is empty</p>}
        <div className="containerC">
           
          
            {items.map(item => (
                <div key={item.id} className="imagebox">
                    <img src={item.image} alt={item.name} className='image' />
                    
                    <div className='desc'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </div>

                   <div className='btn'>
                   <button className='button'onClick={() => removeItems(item.id)}>Remove</button>

                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Cart;
