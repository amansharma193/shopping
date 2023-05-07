import React from 'react'

const Product = (props:any) => {
  const {cartData, setCartData,product} = props.data;
  const isAdded = cartData.filter((el:any)=>el.name === product.name).length>0?true:false;

  const addProduct = () =>{
    product.quantity=1;
    setCartData([...cartData,product]);
  }

  const removeProduct = () =>{
    setCartData((data:any)=>data.filter((el:any)=>el.name!==product.name));
  }

  return (
    <span className="product" >
        <span className='productImage'>
            <img src={product.imageUrl} alt={product.imageUrl} />
        </span>
        <h3 className='productName'>{product.name}</h3>
        <span className='productPrice'>₹{product.price}</span>
        { !isAdded && <button onClick={addProduct} className='addButton'>Add to Cart</button>}
        { isAdded && <button onClick={removeProduct} className='removeButton'>Remove from Cart</button>}
    </span>
  )
}

export default Product

