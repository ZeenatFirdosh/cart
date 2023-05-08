import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';
import Rows from './Rows'

const Navbar = () => {
    const { showCart,cartItems, setShowCart, totalQuantities, products, deleteUser } = useStateContext();
    
  return (
    <div>
        {/* <button type="button" class="btn btn-primary" onClick={() => setShowCart(true)}>
        <AiOutlineShopping /> <span class="badge text-bg-secondary">{totalQuantities}</span>
        </button> */}

        <button class="btn btn-primary" type="button" onClick={() => setShowCart(true)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><AiOutlineShopping /> <span class="badge text-bg-secondary">{totalQuantities}</span></button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <table class="table table-hover">
        <thead>
          <tr>
            
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">----</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
            {/* console.console.log(products);
            {[products]}; */}
          {cartItems.map((productc) => {
          return <Rows key={productc._id} name={productc.product} price={productc.price} productc={productc}/>;
        })}

        </tbody>
      </table>
   
            
        </div>
        </div>
    </div>
  )
}

export default Navbar