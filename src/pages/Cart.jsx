import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ContextShop"

const Cart = () => {

  const { priceCurrency, cartItems, deliveryCharge, products } = useContext(ShopContext)

  // all the nessecary states
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempCartData = [];
    
    for(const category in cartItems) {
        for(const item in cartItems[category]){
          if(cartItems[category][item] > 0){
            tempCartData.push({
              _id: category,
              size: category,
              quantity: cartItems[category][item]
            })
          }
        }
    }
    console.log(tempCartData);

  },[cartItems]);


  return (
    <div className="">
      
    </div>
  )
}

export default Cart
