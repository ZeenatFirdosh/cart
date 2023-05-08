import React from 'react'
import { useStateContext } from '../context/StateContext';
import Cards from './Cards'

const Product = () => {
    const { onAdd, products } = useStateContext();
  return (
    <div>
        <div className="row">
{/* 
    <div className="col-sm-6 mb-3 mb-sm-0 my-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Product1</h5>
            <p className="card-text">Price: $500</p>
            <a href="#" className="btn btn-primary" onClick={() => onAdd()} >Add to cart</a>
        </div>
        </div>
    </div> */}
    {/* {console.log(products[0]._id)} */}
    {products.map((product) => {
          return (<Cards key={product._id} name={product.product} price={product.price} product={product} />)
        })}

    </div>
    </div>
//  
  )
}

export default Product