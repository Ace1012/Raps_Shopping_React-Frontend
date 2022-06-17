import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ShoppingCart = (props:any) => {

  const [test, setTest] = useState("Empty Title")
  const input = document.getElementById("test") as HTMLInputElement
  const setX = props.setX

  useEffect(() => {
    console.log(test);
    props.setX(test)
  },[test, props])

  return(
    <motion.div layout transition={{layout: {duration:0.7, type:"spring"}}} className="shopping-cart">
        <div className="shopping-cart-content">
        Added Items
        <input id='test' type="text" onChange={() => setTest(input.value)}/>
        </div>
    </motion.div>
  );
};

export default ShoppingCart;