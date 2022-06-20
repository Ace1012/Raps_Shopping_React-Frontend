import { motion, useAnimation } from 'framer-motion';
import { useContext, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaCheckSquare, FaSquare } from 'react-icons/fa';
import { ShoppingCartItemList } from './CategoryItems';

const Category = (props:any) => {
    const {items, setItems, checked, setChecked} = useContext(ShoppingCartItemList)
    const controls = useAnimation();

    const category = props.category;
    const id = props.categoryId;

    const toggleCategory = props.toggleCategory;
    const testContext = props.testContext;
    
    const [selected, setSelected] = useState(null);

    const test = (i:string) => {
        // testContext(i);
        setItems([...items, i])
    }

    const toggle = (i:any) => {
        if(checked === i){
            return setChecked(null)
        }else{
            setChecked(i);
        }
    }

    // const toggle = (i:any) => {
        
    //     console.log(`Category ${i} pressed!`)
        
    //     if(selected === i){
    //         return setSelected(null);
    //     }else{
    //         setSelected(i);
    //     }
    //     toggleCategory(i,controls)
    // }
    
  return(
    <motion.div transition={{layout: {duration:0.7, type:"spring"}}} layout className="category" key={category.id} >
        {/* <div className="category-title">
            <span>{category.name}</span>
            <FaArrowDown></FaArrowDown>
        </div> */}
        <motion.div animate={controls} layout="position" className="category-title" onClick={() => toggle(id)}>
            <motion.span>{category.name}</motion.span>
            {checked === category.id ? <motion.span> <FaArrowUp></FaArrowUp> </motion.span> : <motion.span> <FaArrowDown></FaArrowDown> </motion.span>}
        </motion.div>
        {checked === category.id && category.items ? 
        (
            category.items.map((item:any) => (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="item" key={item.id}>
                    
                    <span>{item.name}</span>
                    <input type="checkbox" onChange={() =>test(item.name)}/>
                    {/* {selected !== item.id ? <FaCheckSquare></FaCheckSquare> : <FaSquare></FaSquare>} */}
                </motion.div>
            ))
        ) :
        checked === category.id && (
            <div className="no-items">
                <span>No items</span>
            </div>
        )
        }
    </motion.div>
  ) ;
};

export default Category;
