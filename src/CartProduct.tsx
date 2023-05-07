import {useState} from 'react'
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProduct = (props:any) => {
  const {product, setCartData} = props.data;
  const [productQuantity,setProductQuantity] = useState(product.quantity);
  const decQty = ()=>{
    if(product.quantity>1){
      setProductQuantity(productQuantity-1);
      setCartData((data:any)=>data.map((prod:any)=>{
          if(prod.name === product.name){
            prod.quantity-=1;
          }
          return prod;
        }))
    }
  }

  const incQty = ()=>{
    if(product.quantity<=9){
      setProductQuantity(productQuantity+1);
      setCartData((data:any)=>data.map((prod:any)=>{
          if(prod.name === product.name){
            prod.quantity+=1;
          }
          return prod;
        }))
    }
  }

  const removeProduct = () =>{
    setCartData((data:any)=>data.filter((prod:any)=>prod.name !== product.name))
  }

  return (
    <>
      <div className="productContainer" >
        <div className="image"><img src={product.imageUrl} alt={product.imageUrl} /></div>
        <div className="name">{product.name}</div>
        <div className="quantity">
          <div onClick={decQty} className="quantityBtn">-</div>
          { productQuantity }
          <div onClick={incQty} className="quantityBtn">+</div>
          <DeleteIcon onClick={removeProduct} style={{color:"white",background:'rgb(204,0,0)', borderRadius:'5px', verticalAlign: "bottom", width:"25px", height:"23px"}} />
        </div>
        <div className="price">₹{product.price} x {productQuantity} = {product.price * productQuantity}</div>
      </div>
    </>
  )
}

export default CartProduct