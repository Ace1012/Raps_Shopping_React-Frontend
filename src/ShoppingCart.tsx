import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartItemList } from './CategoryItems';
import { CartItem, Item } from './interface';

const ShoppingCart = (props:any) => {

  // const [test, setTest] = useState("Empty Title")
  const {items, setItems, cartItems, setCartItems} = useContext(ShoppingCartItemList);
  const [sum, setSum] = useState(0);

  // useEffect(()=>{
  //   calcSum();
  // },[items])

  // const calcSum = () => {
  //   var sum = 0;
  //   for(var item of items){
  //     sum += item.price
  //   }
  //   setSum(sum)
  // }

  // const clearItems = () => {
  //   setItems([])
  // } 

  useEffect(()=>{
    calcSum();
  },[cartItems])

  const calcSum = () => {
    var sum = 0;
    for(var cartItem of cartItems){
      sum += (cartItem.item.price * cartItem.quantity)
    }
    setSum(sum)
  }

  const clearItems = () => {
    setCartItems([])
  } 

  // useEffect(() => {
  //   console.log(test);
  //   setX(test)
  // },[test])

  return(
    <motion.div layout transition={{layout: {duration:0.7, type:"spring"}}} className="shopping-cart">
        <div className="shopping-cart-content">
        {cartItems && cartItems.map((cartItem:CartItem)=> (
          <div key={cartItem.id}>
            <p>{cartItem.item.name} x {cartItem.quantity}</p>
          </div>
        ))}
        </div>
        <div className="add-items">
        <button onClick={clearItems}>Clear Items</button>
          <p>Total is ksh.{sum}</p>
          {/* <button>Add Items</button> */}
        </div>
    </motion.div>
  );
};

export default ShoppingCart;