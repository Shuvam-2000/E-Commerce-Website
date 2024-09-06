import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ContextShop"

const Cart = () => {

  const { priceCurrency, cartItems, deliveryCharge, products } = useContext(ShopContext)

  // all the nessecary states
  const [cartData, setCartData] = useState([])

  // useEffect(() => {
    
  //   const tempCartData = [];
  //   for(const data in cartItems)

  //   },[cartItems])

  return (
    <div className="">
      
    </div>
  )
}

export default Cart
