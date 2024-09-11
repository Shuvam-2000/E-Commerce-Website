import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import cart_empty from "../assets/empty_cart.png"
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"


const Cart = () => {
  const { priceCurrency, cartItems, products, updateCartQuantity } = useContext(ShopContext);

  // state to store the product data added to cart
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate()

  // add the productdata to cart with id, size and quantity
  useEffect(() => {
    const tempCartData = [];
    
    for(const category in cartItems) {
        for(const size in cartItems[category]){
          if(cartItems[category][size] > 0){
            tempCartData.push({
              _id: category,
              size: size,
              quantity: cartItems[category][size]
            });
          }
        }
    }
    setCartData(tempCartData);
    console.log(tempCartData)   // for debugging
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-3xl mb-4">
        <h2 className="lg-text-4xl font-mono">My <span className="text-[#f21c1c]">Cart :-</span></h2> 
      </div>

      {/* Show Product On Cart */}
      <div>
        { cartData.length > 0 ?
          cartData.map((showCart) => {
            const productData = products.find((item) => item._id === showCart._id)
            return (
              <div key={showCart._id} className="py-4 border-t border-b text-gray-700 grid gird-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5] items-center gap-4">
                <div className="flex items-start gap-4 font-mono">
                  <Link to={`/products/${productData._id}`}>
                    <img className="w-20 sm:w-24 rounded-md" src={productData.image}/>
                  </Link>
                  <div>
                    <p  className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{priceCurrency} {productData.price}</p>
                      <p className="border border-gray-400 px-3 py-3 pt-1 pb-1 rounded-lg cursor-pointer font-semibold text-sm">{showCart.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="items-center flex flex-2 sm:mx-2 gap-4">
                  <input onChange={
                    (e) => e.target.value === '' || e.target.value === '0' ? null : updateCartQuantity(showCart._id, showCart.size, Number(e.target.value))} 
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md" 
                    type="number" min={1} 
                    max={10} 
                    defaultValue={showCart.quantity}/>
                  <img 
                  onClick={() => updateCartQuantity(showCart._id, showCart.size,0)} className="w-4 sm:w-5 cursor-pointer" 
                  src={assets.bin_icon} 
                  alt="bin-icon"/>
                </div>
              </div>
            )
          }) : 
            <div className="flex flex-row justify-center mt-12 mb-12">
              <img className="sm:w-[35%] w-[60%] rounded-md" src={cart_empty} alt="cart_empty_image" />
            </div>     
        }
      </div>
      <div className="flex justify-start my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-center mt-8">
            <button 
              onClick={() => cartData.length > 0 ? navigate("/place-order") : toast.error("Your Cart is Empty")}
              className="bg-[#f21c1c] text-white border-gray-400 rounded-lg py-3 px-8 my-8 text-sm font-medium cursor-pointer">
              CONFIRM & MAKE PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

