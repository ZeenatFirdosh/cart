import React, { useRef, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    useEffect(() => {
      {console.log(cartItems)}
    
     
    }, [cartItems])
    
  return (
    <div>
        
    </div>
  )
}

export default Cart