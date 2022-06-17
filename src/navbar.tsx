import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';

const NavBar = () => {

  return(
      <nav className="navbar">
        <Link to="/home"><h1 id="site">Raps Shopping</h1></Link>
        <div className="links">
          <a href="http://localhost:8080/raps/lists/fetchLists">Shopping Lists</a>
          <a href="http://localhost:8080/raps/lists/fetchList?id=1">List 1</a>
          <Link to="/"><FaSignOutAlt style={{
            height:"40px",
            width:"40px"
          }}></FaSignOutAlt></Link>
      </div>
      </nav>
  ) ;
};

export default NavBar;
  
