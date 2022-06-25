import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Category from "./category";
import { CartItem, ICategory, IList, Item } from "./interface";
import ShoppingCart from "./ShoppingCart";
import useFetch from "./useFetch";

export const ShoppingCartItemList = React.createContext<any>([]);

const CategoryItems = () => {
    const location = useLocation();

    const {data:categoryItems} = useFetch("http://localhost:8080/raps/categories/fetchCategoryItems");
    const [items, setItems] = useState<Item[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [selected, setSelected] = useState();

    const list = location.state as IList;
    const listName = list.name
    // const params = useParams();
    // const listName = params.listName;

    useEffect(() => {
      console.log(items);
    },[items])

    useEffect(()=>{
      console.log(cartItems);
    },[cartItems])

  return (
      <ShoppingCartItemList.Provider value={{selected, setSelected, items, setItems, cartItems, setCartItems}}>
        <div className="category-items-container">

        <motion.div className="category-items">
        <motion.h1 layout style={{
          marginBottom:"5vh"
        }}>Editing {listName}'s Shopping List</motion.h1>
          {categoryItems && categoryItems.map((category:ICategory) => (
            <Category category={category} categoryId={category.id} key={category.id}/>
          ))}
        </motion.div>

        <div className="shopping-cart-container">
        <ShoppingCart/>
        </div>
      </div>

      </ShoppingCartItemList.Provider>
  );
};

export default CategoryItems;
