import React from 'react'
import Product from './Product'

const data = [
  {
    name: "Maroon Shirt",
    imageUrl: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10945072/2020/3/12/27cd76c8-8c59-4be4-9fdf-d1286235e2f41584015472428-Roadster-Men-Burgundy-Regular-Fit-Solid-Casual-Shirt-5811584-2.jpg",
    price: "399"
  },
  {
    name:"Green Shirt",
    imageUrl:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17050676/2022/7/22/22b20b8d-25f0-490a-90a2-d84cd48200401658464419523-Roadster-Men-Shirts-6261658464418927-2.jpg",
    price:"424"
  },
  {
    name:"Blue Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20220702/6Poy/62bf6aa8f997dd03e2b2f881/netplay_navy_blue_chain_stitched_slim_fit_shirt_with_patch_pocket.jpg",
    price:"379"
  },
  {
    name: "Checked Shirt",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20220528/XxVO/629141d5aeb26921afee6f34/netplay_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg",
    price: "390"
  },
  {
    name:"Purple Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20220513/OWCN/627e26ddaeb26921af770461/the_bear_house_purple_slim_fit_shirt_with_patch_pocket.jpg",
    price:"1372"
  },
  {
    name:"Olive Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20230102/wJfs/63b2fe3eaeb269659c1e09e8/dennislingo_premium_attire_green_full_sleeves_slim_fit_shirt.jpg",
    price:"610"
  },
  {
    name: "Blue Checked Shirt",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20220906/Tdg5/631761eeaeb269dbb374958d/british_club_blue_checked_slim_fit_shirt_with_patch_pocket.jpg",
    price: "792"
  },
  {
    name:"White Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91b5/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg",
    price:"592"
  },
  {
    name:"Pink Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20230102/R0me/63b30ae3aeb269659c1e4f01/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    price:"650"
  },
  {
    name:"Black Shirt",
    imageUrl:"https://assets.ajio.com/medias/sys_master/root/20221117/CXZZ/6375d74faeb269659c97fe85/dennislingo_premium_attire_black__slim_fit_shirt_with_spread_collar.jpg",
    price:"659"
  }

]

const ProductList = (props:any) => {
  const {cartData, setCartData, searchText} = props.data;
  const filteredProducts= data.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <>
     <div className='productHeader'>Products</div>
     <div className='ProductContainer' >
      {filteredProducts.map(product=>(
        <Product key={product.price} data={{product,cartData,setCartData}}/>
      ))}
     </div>
    </>

  )
}

export default ProductList