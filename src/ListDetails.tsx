import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ListDetails = () => {

  const param = useParams();
  const listId = param.id;

  const navigate = useNavigate();

  console.log(listId)
  
  const {data: list}:any = useFetch("http://localhost:8080/raps/lists/fetchList?id=" + listId)
  console.log("List is")
  console.log(list)

  const goHome = () => {
    navigate("/home")
  }

  return(
      <div className="list-details">
          <div className="list-details-nav">
            <button onClick={goHome}>Go back</button>
            {list && <h1>{list.name}</h1>}
            {list && <Link to={`/categoryItems/${list.name}`}><button>Add Items</button></Link>}
          </div>
          {list && list.items && list.items.length > 0 ? 
            list.items.map((item:any) => (
              <div className="item" key={item.id}>
                <h2>{item.name}</h2>
                <p>Type: {item.category.name}</p>
              </div>
            )) :
            <div className="item">
              <h1>No Items!</h1>
            </div>
          }
          
      </div>
  ) ;
};

export default ListDetails;
