import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";

const CartTotal = () => {
  const { priceCurrency, deliveryCharge, getCartAmount } = useContext(ShopContext);
  
  const [cartAmount, setCartAmount] = useState(0);

  // Fetch the cart amount when the component mounts
  useEffect(() => {
    const fetchCartAmount = async () => {
      const amount = await getCartAmount();
      setCartAmount(amount);
    };

    fetchCartAmount();
  }, [getCartAmount]); // Dependency array with getCartAmount ensures the effect runs if getCartAmount changes

  return (
    <div className="w-full">
      <div className="text-2xl">
        <h2 className="lg-text-4xl font-mono">Total <span className="text-[#f21c1c]">Price :-</span></h2> 
      </div> 
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>{priceCurrency} {cartAmount}.00</p>
        </div>
        <hr /> 
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>{priceCurrency} {deliveryCharge}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
          <b>Total Amount</b>
          <b>{priceCurrency} {cartAmount === 0 ? 0 : cartAmount + deliveryCharge}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
