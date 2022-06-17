import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryItems from './CategoryItems';
import Home from './Home';
import ListDetails from './ListDetails';
import Login from './login';
import NavBar from './navbar';
import ShoppingList from './ShoppingList';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <div className="routes">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shopping-list' element={<ShoppingList/>}></Route>
          <Route path='/categoryItems/:listName' element={<CategoryItems/>}></Route>
          <Route path='/list/:id' element={<ListDetails/>}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
