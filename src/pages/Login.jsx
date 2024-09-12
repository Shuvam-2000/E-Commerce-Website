import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [ flag, setFlag ] = useState(false)
  const navigate = useNavigate()
  const [ manageLogin, setManageLogin ] = useState('Login')
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if(manageLogin == 'Sign Up'){
      e.preventDefault();
    }

    if (manageLogin === 'Sign Up') {
      if (!customerInfo.name) {
        toast.error("Please Enter Your Name");
        return;
      } else if (customerInfo.name[0] !== customerInfo.name[0].toUpperCase()) {
        toast.error("First Letter Should Be Uppercase");
        return;
      } else if (customerInfo.name.length <= 2 || customerInfo.name.length > 20) {
        toast.error("Name Should Of 10 Letters At least");
        return;
      }
    }

    if (!customerInfo.email) {
      toast.error("Please Enter Your Email");
      return;
    } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(customerInfo.email)) {
      toast.error("Invalid Email Address");
      return;
    }

    if (!customerInfo.password) {
      toast.error("Please Enter Password");
      return;
    } else if (customerInfo.password.length >= 15 || customerInfo.password.length <= 5) {
      toast.error("Password must be between 6 & 14 characters");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(customerInfo.password)) {
      toast.error("Password must contain at least one special character");
      return;
    }

    if (manageLogin === 'Sign Up') {
      if (!customerInfo.confirmPassword) {
        toast.error("Please Confirm Password");
        return;
      } else if (customerInfo.confirmPassword !== customerInfo.password) {
        toast.error("Passwords do not match");
        return;
      }
    }if(manageLogin == "Sign Up") {
      setFlag(true)
      setCustomerInfo({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      toast.success("Sign Up Successful");
    }
  };
  
return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-mono text-3xl">
        {manageLogin.split(" ")[0]} 
        <span className="text-[#f21c1c]"> {manageLogin.split(" ")[1]}</span>
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {manageLogin === 'Sign Up' ? <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded-lg mt-2 hover:border-black" name="name" onChange={handleChange} value={customerInfo.name} placeholder="Enter Your Name"/> : ''}
      <input type="text" className="w-full px-3 py-2 mt-2 border border-gray-400 rounded-lg hover:border-black" onChange={handleChange} value={customerInfo.email} placeholder="Enter Your Email" name="email"/>
      <input type="text" className="w-full px-3 py-2 mt-2 border border-gray-400 rounded-lg hover:border-black" onChange={handleChange} value={customerInfo.password} placeholder="Enter Your Passowrd" name="password"/>
      {manageLogin === 'Sign Up' ? <input type="text" className="w-full px-3 py-2 border border-gray-400 rounded-lg mt-2 hover:border-black" name="confirmPassword" onChange={handleChange} value={customerInfo.confirmPassword} placeholder="Confirm Passoword"/> : ''}
      <div className="w-full flex justify-between text-sm mt-[-8px] cursor-pointer">
          <p className="hover:text-[#f21c1c]">Forgot Password?</p>
          {
            manageLogin === 'Login' ?
            <p onClick={() => setManageLogin('Sign Up')} className="cursor-pointer hover:text-[#f21c1c]">Create Account</p> :
            <p onClick={() => setManageLogin('Login')} className="cursor-pointer hover:text-[#f21c1c]">Login Here</p> 
          }
      </div>
      <button 
        onClick={() => flag === true ? toast.success("Logged In Sucesfully") && navigate('/home') : null} 
        className="bg-[#f21c1c] text-white font-semibold px-10 py-2 mt-4 rounded-lg">
        {manageLogin === 'Login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  )

}

export default Login
