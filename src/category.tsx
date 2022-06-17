import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaCheckSquare, FaSquare } from 'react-icons/fa';

const Category = (props:any) => {
    const controls = useAnimation();

    const category = props.category;
    const id = props.categoryId;

    const toggleCategory = props.toggleCategory;
    
    const [selected, setSelected] = useState(null);

    const toggle = (i:any) => {
        console.log(`Category ${i} pressed!`)
        
        if(selected === i){
            return setSelected(null);
        }else{
            setSelected(i);
        }

        toggleCategory(id,controls)
    }
    
  return(
    <motion.div transition={{layout: {duration:0.7, type:"spring"}}} layout className="category" key={category.id} >
        {/* <div className="category-title">
            <span>{category.name}</span>
            <FaArrowDown></FaArrowDown>
        </div> */}
        <motion.div 
        animate={controls}
        layout="position" className="category-title" onClick={() => toggle(id)}>
            <motion.span>{category.name}</motion.span>
            {selected === category.id ? <motion.span> <FaArrowUp></FaArrowUp> </motion.span> : <motion.span> <FaArrowDown></FaArrowDown> </motion.span>}
        </motion.div>
        {selected === category.id && category.items ? 
        (
            category.items.map((item:any) => (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="item" key={item.id}>
                    
                    <span>{item.name}</span>
                    <input type="checkbox" />
                    {/* {selected !== item.id ? <FaCheckSquare></FaCheckSquare> : <FaSquare></FaSquare>} */}
                </motion.div>
            ))
        ) :
        selected === category.id && (
            <div className="no-items">
                <span>No items</span>
            </div>
        )
        }
    </motion.div>
  ) ;
};

export default Category;
