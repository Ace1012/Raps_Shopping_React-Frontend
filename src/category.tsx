import { motion, useAnimation } from 'framer-motion';
import { useContext} from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { ShoppingCartItemList } from './CategoryItems';
import { Item } from './interface';

const Category = (props:any) => {
    const {items, setItems, selected, setSelected} = useContext(ShoppingCartItemList)
    const controls = useAnimation();

    const category = props.category;
    const id = props.category.id;

    const editItemsList = (checkBoxState:boolean, i:Item) => {
        if(checkBoxState){
            console.log("It is checked!");
            setItems([...items, i])
        }else{
            console.log("It isn't checked!");
            var tempItems = items.filter((item:Item) => item !== i);
            setItems(tempItems)
        }
    }

    const toggle = (i:any) => {
        if(selected === i){
            return setSelected(null)
        }else{
            setSelected(i);
        }
    }
    
  return(
    <motion.div transition={{layout: {duration:0.7, type:"spring"}}} layout className="category" key={category.id} >
        <motion.div animate={controls} layout="position" className="category-title" onClick={() => toggle(id)}>
            <motion.span>{category.name}</motion.span>
            {selected === category.id ? <motion.span> <FaArrowUp></FaArrowUp> </motion.span> : <motion.span> <FaArrowDown></FaArrowDown> </motion.span>}
        </motion.div>
        {selected === category.id && category.items ? 
        (
            category.items.map((item:Item) => (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="item" key={item.id}>
                    <span>{item.name}</span>
                    <div>
                    <FaArrowUp className='quantity-arrow' style={{
                        marginRight:"5px"
                    }}></FaArrowUp>
                    <input id="checkbox" type="checkbox" value={item.name} checked={items.includes(item)} onChange={(e) => editItemsList(e.target.checked, item)}/>
                    <FaArrowDown className='quantity-arrow' style={{
                        marginLeft:"5px"
                    }}></FaArrowDown>
                    </div>
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
  );
};

export default Category;
