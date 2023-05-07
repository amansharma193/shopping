import {useState} from 'react';
import './App.css';
import NavbarFixed from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [searchText, setSearchText] = useState("");
  const [cartToggle, setCartToggle] = useState(false);
  const [cartData, setCartData] = useState([]);
  const onInputChange = (value:string) => {
    setSearchText(value);
  }
  return (
    <>
    <NavbarFixed onInputChange={onInputChange} setCartToggle={setCartToggle} />
    <div className="App">
      <header className="App-header">
        <ProductList data={{cartData,setCartData,searchText}} />
        {cartToggle && <Cart data={{cartData,setCartData}} /> }
      </header>
    </div>
    </>
  );
}

export default App;
