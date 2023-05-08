import React, { createContext, useContext, useState, useEffect } from 'react';
const Context = createContext();


export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
  
    const usersInitial = [
      {
        _id: "64495b4a562b31cc61111",
        product: "Product1",
        price: "500",
        "createdAt": "2023-04-26T17:11:38.448Z",
        "updatedAt": "2023-04-26T17:11:38.448Z",
        "__v": 0
      },
      {
        _id: "64495b59560222222222222",
        product: "Product2",
        price: "400",
        "createdAt": "2023-04-26T17:11:53.574Z",
        "updatedAt": "2023-04-26T17:11:53.574Z",
        "__v": 0
      },
      {
        _id: "64495b593333333333",
        product: "Product3",
        price: "800",
        "createdAt": "2023-04-26T17:11:53.574Z",
        "updatedAt": "2023-04-26T17:11:53.574Z",
        "__v": 0
      },
      {
        _id: "6449544444444444444444",
        product: "Product4",
        price: "800",
        "createdAt": "2023-04-26T17:11:53.574Z",
        "updatedAt": "2023-04-26T17:11:53.574Z",
        "__v": 0
      }
    ];
    const [products, setProducts] = useState(usersInitial);

    const onAdd = (product) => {  
      const checkProductInCart = cartItems.find((item) => item._id === product._id);
      
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * 1);
      

      if(checkProductInCart) {
        // const updatedCartItems = cartItems.map((cartProduct) => {
        //   if(cartProduct._id === product._id) return {
        //     ...cartProduct,
        //     quantity: cartProduct.quantity + 1
        //   }
        // })
  
        // setCartItems(updatedCartItems);
      } else {
        // product.quantity = 1;
        
        setCartItems([...cartItems, { ...product }]);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      }
      // // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      // // eslint-disable-next-line no-lone-blocks
      // {console.log(cartItems)};
      // {console.log(product._id)};
      // for (let index = 0; index < cartItems.length; index++) {
      //   const element = cartItems[index];
      //   if (element._id == product._id) {
      //     {console.log(element._id)};
      //     {console.log(product._id)}
      //     break; 
      //   }
      //   else{
      //     setCartItems([...cartItems, { ...product }]);
      //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      //   }
      // }
      // if(cartItems.length === 0){
      //   {console.log(cartItems.length)};
      //   setCartItems([...cartItems, { ...product }]);
      //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      // }
      // // setCartItems([...cartItems, { ...product }]);
      // {console.log(cartItems)}
    }

    // Delete a Note********************************************************************
    const deleteUser = async (id) => {
      // API Call
      // const response = await fetch(`${host}/deletenote/${id}`, {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
          
      //   }
      // });
      // const json = response.json();
      // console.log(json)
    console.log("Deleting the note with id" + id);
    const newUsers = cartItems?.filter((user) => { return user._id !== id });
    setCartItems(newUsers);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
  };

    
  
return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        products,
        setProducts,
        onAdd,
        deleteUser,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
    }

export const useStateContext = () => useContext(Context);