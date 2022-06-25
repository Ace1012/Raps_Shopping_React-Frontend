import { motion, useAnimation } from 'framer-motion';
import { useContext} from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { ShoppingCartItemList } from './CategoryItems';
import { CartItem, Item } from './interface';

const Category = (props:any) => {
    const {selected, setSelected, cartItems, setCartItems} = useContext(ShoppingCartItemList)
    const controls = useAnimation();

    const category = props.category;
    const id = props.category.id;

    const editItemsList = (checkBoxState:boolean, item:Item) => {
        if(checkBoxState){
            console.log("Checked!");
            var cartItem:CartItem = {
                id: item.id,
                item: item,
                quantity: 1
            }
            setCartItems([...cartItems, cartItem])
        }else{
            console.log("Unchecked!");
            var tempCartItems = cartItems.filter((cartItem:CartItem) => cartItem.item !== item)
            setCartItems(tempCartItems)
        }
    }

    const toggle = (i:any) => {
        if(selected === i){
            return setSelected(null)
        }else{
            setSelected(i);
        }
    }

    const checkCartItems = (item:Item) =>{
        for(var cartItem of cartItems){
            if(cartItem.item === item){
                return true;
            }
        }
        return false;
    }

    const editItemQuantity = (item:Item, delta:number) =>{
        const cartItemsCopy = cartItems.slice()
        for(var cartItem of cartItemsCopy){
            if(cartItem.item === item){
                cartItem.quantity += delta;
                console.log(cartItem);
                if(cartItem.quantity <= 0){
                    var tempCartItems = cartItems.filter((cartItem:CartItem) => cartItem.item !== item)
                    setCartItems(tempCartItems)
                }else{
                    setCartItems(cartItemsCopy)
                }
            }
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
                    {checkCartItems(item) && <FaArrowUp onClick={() => editItemQuantity(item, 1)} className='quantity-arrow' style={{
                        marginRight:"5px"
                    }}></FaArrowUp>}

                    <input 
                    id="checkbox" 
                    type="checkbox" 
                    value={item.name} 
                    checked={checkCartItems(item)}
                    onChange={(e) => editItemsList(e.target.checked, item)}/>

                    {checkCartItems(item) && <FaArrowDown onClick={() => editItemQuantity(item, -1)} className='quantity-arrow' style={{
                        marginLeft:"5px"
                    }}></FaArrowDown>}
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
