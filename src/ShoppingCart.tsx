import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartItemList } from './CategoryItems';
import { Item } from './interface';

const ShoppingCart = (props:any) => {

  // const [test, setTest] = useState("Empty Title")
  const {items, setItems} = useContext(ShoppingCartItemList);
  const [sum, setSum] = useState(0);
  const setX = props.setX;

  useEffect(()=>{
    calcSum();
  },[items])

  const calcSum = () => {
    var sum = 0;
    for(var item of items){
      sum += item.price
    }
    setSum(sum)
  }

  const clearItems = () => {
    setItems([])
  } 

  // useEffect(() => {
  //   console.log(test);
  //   setX(test)
  // },[test])

  return(
    <motion.div layout transition={{layout: {duration:0.7, type:"spring"}}} className="shopping-cart">
        <div className="shopping-cart-content">
        {/* <input id='test' type="text" onChange={() => setTest(input.value)}/> */}
        {items && items.map((item:Item)=> (
          <div>
            <p>{item.name}</p>
          </div>
        ))}
        </div>
        <div className="add-items">
        <button onClick={clearItems}>Clear Items</button>
          <p>Total is {sum}</p>
          {/* <button>Add Items</button> */}
        </div>
    </motion.div>
  );
};

export default ShoppingCart;