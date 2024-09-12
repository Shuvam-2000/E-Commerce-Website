import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ContextShop";

const Footer = () => {

  const { footerText1 } = useContext(ShopContext)

  return (
    <div className=" text-[#414141]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div className="sm:border-r border-gray-300">
          <h1 className='sm:text-3xl text-3xl font-medium'>
            Shops<span className='text-[#f21c1c]'>Phere</span>
          </h1>
          <p className='mt-4 font-mono'>
            {footerText1}
          </p>
          <h2 className="mt-2 text-md font-mono">Connect With Us :-</h2>
          <div className="flex gap-2 mt-1 cursor-pointer">
            <FaFacebook className="mt-2 w-[20px] hover:hover:text-[#f21c1c]"/>
            <FaInstagramSquare className="mt-2 w-[20px] hover:hover:text-[#f21c1c]"/>
            <FaSquareXTwitter className="mt-2 w-[20px] hover:hover:text-[#f21c1c]"/>
            <FaYoutube className="mt-2 w-[20px] hover:hover:text-[#f21c1c]"/>
          </div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer font-mono sm:border-r border-gray-300">
          <h2 className='text-lg font-semibold mb-4 tracking-widest'>COMPANY</h2>
            <Link to='/' className="text-black">
              <p className='text-[#414141] hover:text-[#f21c1c]'>Home</p>
            </Link>
            <Link to='/collection' className="text-black">
              <p className='text-[#414141] hover:text-[#f21c1c]'>Our Shop</p>
            </Link>
            <Link to='/cart' className="text-black">
              <p className='text-[#414141] hover:text-[#f21c1c]'>Your Cart</p>
            </Link>
            <Link to='/aboutus' className="text-black">
              <p className='text-[#414141] hover:text-[#f21c1c]'>Know Us</p>
            </Link>
            <Link to='/contact' className="text-black">
              <p className="text-[#414141] hover:text-[#f21c1c]">Contact Us</p>
            </Link>
        </div>

        <div className="font-mono">
          <h2 className='text-lg font-semibold mb-4 tracking-widest'>CONTACT US</h2>
          <p className='mb-2'>123 Tech Avenue</p>
          <p className='mb-2'>Innovate City, IC 54321</p>
          <p className='mb-2 cursor-pointer'>Email: <span className="hover:text-[#f21c1c]">support@shopsphere.com</span></p>
          <p className="cursor-pointer">Phone: <span className="hover:text-[#f21c1c]">(+91) 4567890672</span></p>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-400 pt-4">
        <p>&copy; 2024 ShopsPhere. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

