import React, { useContext} from "react";
import { useStateContext } from '../context/StateContext';

const Cards = ({name,price,product}) => {
  // const context = useContext(useStateContext);
  // const { onAdd} = context;
    const { onAdd } = useStateContext();

  return (
   
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">price : ${price}</p>
            <a href="#" className="btn btn-primary" onClick={() => onAdd(product)} >Add to cart</a>
        </div>
      </div>
    </div>
    
  )
}

export default Cards