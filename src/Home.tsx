import { IList } from './interface';
import ShoppingList from './ShoppingLists';
import useFetch from './useFetch';

const Home = () => {

  const {data: lists} = useFetch<IList>(`http://localhost:8080/raps/lists/fetchLists`)

  return(
      <div className="home">
        <div className="list-month">
          <h1 style={{
            margin:"30px"
          }}>Shopping Lists</h1>
        </div>
        {lists && <ShoppingList lists={lists}></ShoppingList>}
      </div>
  );
};

export default Home;
