import { Link, useNavigate, useParams } from "react-router-dom";
import { IList } from "./interface";
import Item from "./item";
import ItemTotal from "./ItemTotal";
import useFetch from "./useFetch";

const ListDetails = () => {

  const param = useParams();
  const listId = param.id;

  const navigate = useNavigate();
  
  const {data: list} = useFetch<IList>("http://localhost:8080/raps/lists/fetchList?id=" + listId)
  console.log(list);
  
  
  const total = list && ItemTotal(list)

  const goHome = () => {
    navigate("/home")
  }

  return(
      <div className="list-details">
          <div className="list-details-nav">
            <button onClick={goHome}>Go back</button>
            {list && <h1>{list.name}</h1>}
            {list && <Link state={list} to={`/categoryItems/${list.name}`}><button>Add Items</button></Link>}
          </div>
          {list && list.items && list.items.length > 0 ? 
            list.items.map((item:any) => (
              <Item item={item} key={item.id}></Item>
            )) :
            <div className="item">
              <h1>No Items!</h1>
            </div>
          }
          <p>The total is <span style={{
            fontWeight:"700"
          }}>{total}</span></p>
      </div>
  ) ;
};

export default ListDetails;
