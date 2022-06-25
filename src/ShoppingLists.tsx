import { useState } from "react";
import List from "./List";


const ShoppingList = (props:any) => {

    let month = new Date().toLocaleString('default', {month:'long'})
    let year = new Date().toLocaleString('default', {year:"numeric"})
    month = month.concat(" " + year)

  const [selected, setSelected] = useState(null);

  const toggleList = (i:any) => {
    if(selected === i){
      return setSelected(null);
    }
    setSelected(i);
  }

    return(
      <div className="shopping-list">
          <div className="grid-container" style={{
            width:"1600px"
          }}>

          {props && props.lists.map((list:any) => (
            <List list={list} toggleList={toggleList} selected={selected} key={list.id}></List>
          ))}
          </div>
      </div>
  ) ;
};

export default ShoppingList;
