import { AnimationControls, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./category";
import { ICategory, Item } from "./interface";
import ShoppingCart from "./ShoppingCart";
import useFetch from "./useFetch";

export const ShoppingCartItemList = React.createContext<any>([]);

const CategoryItems = () => {

    const {data:categoryItems} = useFetch("http://localhost:8080/raps/categories/fetchCategoryItems");
    const [x, setX] = useState("");
    const [items, setItems] = useState<Item[]>([]);
    const [selected, setSelected] = useState();

    const params = useParams()
    const listName = params.listName;
    // console.log(...items);
    // console.log(x);

    useEffect(() => {
      console.log(items);
    },[items])

    
    

    // function testContext(i:string){
    //   setItems(([...items, i]))
    //   console.log(...items);
    // }

  return (
      <ShoppingCartItemList.Provider value={{selected, setSelected, items, setItems}}>
        <div className="category-items-container">

        <motion.div className="category-items">
        <h1>Editing {listName}'s Shopping List</h1>
        {x && <h2>{x}</h2>}
          {categoryItems && categoryItems.map((category:ICategory) => (
            <Category category={category} categoryId={category.id} key={category.id}/>
          ))}
        </motion.div>

        <div className="shopping-cart-container">
        <ShoppingCart setX={setX}></ShoppingCart>
        </div>
      </div>

      </ShoppingCartItemList.Provider>
  );
};

export default CategoryItems;
