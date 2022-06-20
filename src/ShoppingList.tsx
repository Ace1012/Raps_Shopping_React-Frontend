import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShoppingList = (props:any) => {

  let month = new Date().toLocaleString('default', {month:'long'})
  let year = new Date().toLocaleString('default', {year:"numeric"})
  month = month.concat(" " + year)

  const [selected, setSelected] = useState(null);

    console.log(props)
    console.log(month)

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
            <motion.div className="list" transition={{layout: {duration:0.7, type:"spring"}}} layout onClick={() => toggleList(list.id) } key={list.id}>

              <motion.div layout="position" className="title" >
                <h2>{list.name}</h2>
                <span>{selected === list.id ? <FaMinus id="minus-sign"></FaMinus> : <FaPlus id="plus-sign"></FaPlus>}</span>
              </motion.div>

              {selected === list.id && list.items.length > 0 ? (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="content">
                  {/* <div className="item">
                    <p style={{
                      fontWeight:"700",
                      fontSize:"20px"
                    }}>Number of items in List: {list.items.length}</p>
                  </div> */}
                {list.items && list.items.map((item:any) => (
                  <div className="item" key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Type: {item.category.name}</p>
                  </div>
                
                ))}
              </motion.div>
              ) : selected === list.id && (
                <div className="no-items">
                  <span style={{
                    color:"black",
                    fontWeight:"800",
                    fontSize:"20px"
                  }}>No Items</span>
                </div>
              )}

              {selected === list.id && (
                <div className="go-to-list">
                  {/* {list.name === month && <Link to={`/list/${list.id}`}><FaEdit className="edit-button" ></FaEdit></Link>}
                  {list.name === month && <FaTrash className="clear-button"></FaTrash>} */}
                  <Link to={`/list/${list.id}`}><FaEdit className="edit-button" ></FaEdit></Link>
                  <FaTrash className="clear-button"></FaTrash>
                </div>
              )}
              
            </motion.div>
          ))}
          </div>
      </div>
  ) ;
};

export default ShoppingList;
