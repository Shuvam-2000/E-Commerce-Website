import { useState } from "react"
import assets from "../assets/assets"
import CartTotal from "../components/CartTotal"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const PlaceOrder = () => {

  const [paymentMethod, setPayementMethod] = useState('cod')
  const navigate = useNavigate()
  const [deliveryInfo, setDeliveryInfo] = useState({    // state for delivery info validation
    firstName: "",
    lastName: "",
    email: "",
    houseNo: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    phoneNumber: ""

  })

  // customer delivery info validation
  const handleOrder = () => {
    if(deliveryInfo.firstName === ''){
      toast.error("Please Enter your First Name")
    }
    else if(deliveryInfo.firstName.length > 0 && deliveryInfo.firstName[0] !== deliveryInfo.firstName[0].toUpperCase()){
      toast.error("First Letter Should Be Upper Case")
    }
    else if(deliveryInfo.firstName.length <= 2 || deliveryInfo.firstName.length > 20){
      toast.error("First Name is Invalid")
    }

    if(deliveryInfo.lastName === ''){
      toast.error("Please Enter Your Last Name")
    }
    else if(deliveryInfo.lastName.length > 0 && deliveryInfo.lastName[0] !== deliveryInfo.lastName[0].toUpperCase()){
      toast.error("First Letter Should Be Upper Case")
    }
    else if(deliveryInfo.firstName.length <=2 || deliveryInfo.firstName.length > 20){
      toast.error("Lasst Name is Inavlid")
    }
  }

  // fetching the values of every field in the delivery info
  const handleChange = (e) => {
    setDeliveryInfo({...deliveryInfo, [e.target.name]: e.target.value});
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">

      {/* Delivery Information Details */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="sm:text-2xl my-3">
          <h2 className="lg-text-4xl font-mono">Your <span className="text-[#f21c1c]">Delivery Info :-</span></h2> 
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="First Name" value={deliveryInfo.firstName} name="firstName" onChange={handleChange} type="text" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="Last Name" value={deliveryInfo.lastName} name="lastName" onChange={handleChange} type="text" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Email Address" value={deliveryInfo.email} name="email" onChange={handleChange} type="email" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="House No, Address, Street" value={deliveryInfo.houseNo} name="houseNo" onChange={handleChange} type="text" />
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="City" value={deliveryInfo.city} name="city" onChange={handleChange} type="text" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="State" value={deliveryInfo.state} name="state" onChange={handleChange} type="text" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="Pincode" value={deliveryInfo.pincode} name="pincode" onChange={handleChange} type="number" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="Landmark" value={deliveryInfo.landmark} name="landmark" onChange={handleChange} type="text" />
        </div>
        <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full" placeholder="Phone Number" value={deliveryInfo.phoneNumber} name="phoneNumber" onChange={handleChange} type="number" />
      </div>

      {/* Payment Info & Method */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
        <h2 className="lg-text-4xl font-bold">PAYMENT <span className="text-[#f21c1c]">METHOD :-</span></h2>
        <div className="flex gap-3 flex-col sm:flex-row mt-4">
          <div onClick={() => setPayementMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-[#f21c1c]' : ''}`}></p>
            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="stripe-logo"/>
          </div>
          <div onClick={() => setPayementMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-[#f21c1c]' : ''}`}></p>
             <p className="text-gray-700 text-sm font-medium mx-4 rounded-md">CASH ON DELIVERY</p>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button onClick={handleOrder} className="bg-[#f21c1c] text-white px-16 py-3 rounded-lg text-sm font-medium cursor pointer">Place Your Order</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
