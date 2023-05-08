import React, { useContext, useEffect, useRef, useState } from "react";
import { useStateContext } from '../context/StateContext';

const Rows = ({name,price,productc}) => { 
 
  const { deleteUser} = useStateContext();
  return (
          <tr>            
            <td>{name}</td>
            <td>{price} </td>
            <td><button type="button" className="btn btn-dark" onClick={()=>{deleteUser(productc._id)}}>Delete</button></td>
          </tr>
    
  )
}

export default Rows