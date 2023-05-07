import {useState,useEffect} from 'react';
import './Cart.css';
import CartProduct from "./CartProduct";
import AddressForm from './AddressForm';
function Cart(props:any) {

  const {cartData, setCartData} = props.data;
  const [cartTotal,setCartTotal] = useState(0);
  useEffect(() => {
    let sum=0;
    for(let product of cartData){
      sum+=(product.price*product.quantity);
    }
    setCartTotal(sum);
  }, [cartData])
  
  return (
    <div className="cartDrawer" >
      <h2 className='cartHeader'>My Cart</h2>
      {
        cartData.map((product:any)=>(
          <CartProduct data={{product,setCartData}} />
        ))
      }
      <div>Total: {cartTotal}</div>
      <AddressForm />
      <button className='checkoutBtn'>Checkout</button>
    </div>
  );
}

export default Cart;
