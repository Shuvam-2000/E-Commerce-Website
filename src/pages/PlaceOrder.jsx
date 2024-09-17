import { useState } from "react"
import assets from "../assets/assets"
import CartTotal from "../components/CartTotal"
import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"


const PlaceOrder = () => {

  const [paymentMethod, setPaymentMethod] = useState('cod')
  // const navigate = useNavigate()    // to be given later
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

    // Check if all fields are empty
    const isEmpty = Object.values(deliveryInfo).every(value => value === "");

    if (isEmpty) {
      toast.error("Please Fill Up Delivery Info");
      return;
    }

    if (!deliveryInfo.firstName) {
      toast.error("Please Enter your First Name");
      return;
    } else if (
      deliveryInfo.firstName.length > 0 &&
      deliveryInfo.firstName[0] !== deliveryInfo.firstName[0].toUpperCase()
    ) {
      toast.error("First Letter Should Be Upper Case");
      return;
    } else if (deliveryInfo.firstName.length <= 2 || deliveryInfo.firstName.length > 20) {
      toast.error("First Name is Invalid");
      return;
    }

    if (!deliveryInfo.lastName) {
      toast.error("Please Enter Your Last Name");
      return;
    } else if (
      deliveryInfo.lastName.length > 0 &&
      deliveryInfo.lastName[0] !== deliveryInfo.lastName[0].toUpperCase()
    ) {
      toast.error("First Letter Should Be Upper Case");
      return;
    } else if (deliveryInfo.lastName.length <= 2 || deliveryInfo.lastName.length > 20) {
      toast.error("Last Name is Invalid");
      return;
    }

    if (!deliveryInfo.email) {
      toast.error("Please Enter Email Address");
      return;
    } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(deliveryInfo.email)) {
      toast.error("Invalid Email Address");
      return;
    }

    if (!deliveryInfo.houseNo) {
      toast.error("Please Enter Proper Address");
      return;
    } else if (deliveryInfo.houseNo.length <= 4) {
      toast.error("Invalid Address");
      return;
    }

    if (!deliveryInfo.city) {
      toast.error("Please Enter City");
      return;
    } else if (deliveryInfo.city.length <= 4) {
      toast.error("Invalid City Name");
      return;
    }

    if (!deliveryInfo.state) {
      toast.error("Please Enter State");
      return;
    } else if (deliveryInfo.state.length <= 4) {
      toast.error("Invalid State Name");
      return;
    }

    if (!deliveryInfo.pincode) {
      toast.error("Please enter a pincode");
      return;
    } else if (isNaN(deliveryInfo.pincode)) {
      toast.error("Pincode must be a Number");
      return;
    } else if (deliveryInfo.pincode.length !== 6) {
      toast.error("Pincode must be of 6 digits");
      return;
    }

    if (!deliveryInfo.landmark) {
      toast.error("Please provide a landmark");
      return;
    } else if (deliveryInfo.landmark.length <= 2) {
      toast.error("Landmark should be proper");
      return;
    }

    if (!deliveryInfo.phoneNumber) {
      toast.error("Please Enter Mobile Number");
      return;
    } else if (isNaN(deliveryInfo.phoneNumber)) {
      toast.error("Please Enter a Number");
      return;
    } else if (deliveryInfo.phoneNumber.length !== 10) {
      toast.error("Mobile Number should be 10 digits");
      return;
    }

    // If all validations pass, show confirmation and navigate
    const isConfirm = window.confirm("Do You Want Save Your Address For Future Reference ?");
    if (isConfirm) {
      toast.success("Address Has Been Saved");
      setDeliveryInfo({
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
    } else {
      toast.error("Address Not Saved");
      setDeliveryInfo({
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
    }
    // navigate("/orders");
  };


  // fetching the values of every field in the delivery info with name
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
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="First Name" value={deliveryInfo.firstName} name="firstName" onChange={handleChange} type="text" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="Last Name" value={deliveryInfo.lastName} name="lastName" onChange={handleChange} type="text" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full hover:border-black" placeholder="Email Address" value={deliveryInfo.email} name="email" onChange={handleChange} type="email" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full hover:border-black" placeholder="House No, Address, Street" value={deliveryInfo.houseNo} name="houseNo" onChange={handleChange} type="text" />
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="City" value={deliveryInfo.city} name="city" onChange={handleChange} type="text" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="State" value={deliveryInfo.state} name="state" onChange={handleChange} type="text" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="Pincode" value={deliveryInfo.pincode} name="pincode" onChange={handleChange} type="text" />
          <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="Landmark" value={deliveryInfo.landmark} name="landmark" onChange={handleChange} type="text" />
        </div>
        <input className="border border-gray-300 rounded-lg py-1.5 px-3.5 w-full hover:border-black" placeholder="Phone Number" value={deliveryInfo.phoneNumber} name="phoneNumber" onChange={handleChange} type="text" />
      </div>

      {/* Payment Info & Method */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
        <h2 className="lg-text-4xl font-bold">PAYMENT <span className="text-[#f21c1c]">METHOD :-</span></h2>
        <div className="flex gap-3 flex-col sm:flex-row mt-4">
          <div onClick={() => setPaymentMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-[#f21c1c]' : ''}`}></p>
            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="stripe-logo"/>
          </div>
          <div onClick={() => setPaymentMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-[#f21c1c]' : ''}`}></p>
             <p className="text-gray-700 text-sm font-medium mx-4 rounded-md">CASH ON DELIVERY</p>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <button onClick={handleOrder} className="bg-[#f21c1c] text-white px-16 py-3 rounded-lg text-sm font-medium cursor pointer">Place Your Order</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
