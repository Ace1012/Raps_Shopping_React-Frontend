import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEdit, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const List= ({list, toggleList, selected}:any) => {

    
  const [sum, setSum] = useState(0);

  useEffect(()=>{
      calcSum(list)
  },[])

  const calcSum = (list:any)=>{
      var localSum = 0;
      for(var item of list.items){
          localSum += item.price;
      }
      setSum(localSum)
  }

  return(
    
    <motion.div className="list" transition={{layout: {duration:0.7, type:"spring"}}} layout onClick={() => toggleList(list.id)} key={list.id}>

    <motion.div layout="position" className="title" >
      <h2>{list.name}</h2>
      <span>{selected === list.id ? <FaMinus id="minus-sign"></FaMinus> : <FaPlus id="plus-sign"></FaPlus>}</span>
    </motion.div>

    {selected === list.id && list.items.length > 0 ? (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="content">
        <div className="list-content">
          <p style={{
            fontWeight:"700",
            fontSize:"20px"
          }}>Number of items in List: {list.items.length}</p>
          <p style={{
            fontWeight:"700",
            fontSize:"20px"
          }}>Total cost of list: {sum}</p>
        </div>
      {/* {list.items && list.items.map((item:any) => (
        <div className="item" key={item.id}>
          <h2>{item.name}</h2>
          <p>Type: {item.category.name}</p>
        </div>
      ))} */}
    </motion.div>
    ) : selected === list.id && (
      <div className="no-items">
        <span style={{
          color:"black",
          fontWeight:"800",
          fontSize:"20px"
        }}>Empty List</span>
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

  );
};

export default List;
