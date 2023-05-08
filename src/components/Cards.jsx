import React, { useContext} from "react";
import { useStateContext } from '../context/StateContext';

const Cards = ({name,price,product}) => {
  // const context = useContext(useStateContext);
  // const { onAdd} = context;
    const { onAdd } = useStateContext();

  return (
   
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">price : ${price}</p>
            <a href="#" class="btn btn-primary" onClick={() => onAdd(product)} >Add to cart</a>
        </div>
      </div>
    </div>
    
  )
}

export default Cards