import { AnimationControls, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./category";
import ShoppingCart from "./ShoppingCart";
import useFetch from "./useFetch";

export const ShoppingCartItemList = React.createContext<any>([]);

const CategoryItems = () => {

    const {data: categoryItems}:any = useFetch("http://localhost:8080/raps/categories/fetchCategoryItems");
    const [selected, setSelected] = useState(null);
    const [x, setX] = useState("");
    const [items, setItems] = useState<any>([]);
    const [checked, setChecked] = useState();

    const params = useParams()
    const listName = params.listName;
    console.log(...items);

    function testContext(i:string){
      setItems(([...items, i]))
      console.log(...items);
    }


    function toggleCategory (i:any, controls:AnimationControls) {
        // controls.set({
        //     opacity:0
        // })
        // controls.start({
        //     opacity:1
        // })
    
        if(selected === i){
            return setSelected(null);
        }else{
            setSelected(i);
        }
      }

  return (
      <ShoppingCartItemList.Provider value={{checked, setChecked, items, setItems}}>
        <div className="category-items-container">
        <motion.div className="category-items">
        <h1>Editing {listName}'s Shopping List</h1>
        {x && <h2>{items}</h2>}
          {categoryItems && categoryItems.map((category:any) => (
            <Category category={category} testContext={testContext} toggleCategory={toggleCategory} categoryId={category.id} key={category.id}/>
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
