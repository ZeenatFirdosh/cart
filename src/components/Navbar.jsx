import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';
import Rows from './Rows'

const Navbar = () => {
    const { showCart,cartItems, setShowCart, totalQuantities, products, deleteUser } = useStateContext();
    
  return (
    <div>
        {/* <button type="button" className="btn btn-primary" onClick={() => setShowCart(true)}>
        <AiOutlineShopping /> <span className="badge text-bg-secondary">{totalQuantities}</span>
        </button> */}

        <button className="btn btn-primary btn-lg position-relative top-0 end-0 mt-3 " type="button" onClick={() => setShowCart(true)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><AiOutlineShopping /> <span className="position-absolute top-0 start-100 translate-middle rounded-pill badge text-bg-secondary bg-danger">{totalQuantities}</span></button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <table className="table table-hover">
        <thead>
          <tr>
            
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">----</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
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