import { AnimationControls, motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./category";
import ShoppingCart from "./ShoppingCart";
import useFetch from "./useFetch";

const CategoryItems = () => {

    const {data: categoryItems}:any = useFetch("http://localhost:8080/raps/categories/fetchCategoryItems");
    // const month = new Date().toLocaleString('default', {month:'long'})
    const [selected, setSelected] = useState(null);
    const [x, setX] = useState("");
    const params = useParams()
    const listName = params.listName;
    console.log(listName)

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

      // function imechange(input:string){
      //   console.log(input);
      //   setX(input)
      // }

  return (
      <div className="category-items-container">

        <motion.div className="category-items">
        <h1>Editing {listName}'s Shopping List</h1>
        {x && <h2>{x}</h2>}
          {categoryItems && categoryItems.map((category:any) => (
            <Category category={category} toggleCategory={toggleCategory} categoryId={category.id} key={category.id}/>
          ))}
        </motion.div>

        <div className="shopping-cart-container">
        <ShoppingCart setX={setX}></ShoppingCart>
        </div>
      </div>
  );
};

export default CategoryItems;
