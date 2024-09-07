import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets"
import { useContext } from "react";
import { ShopContext } from "../context/ContextShop";

const Navbar = () => {

  const {menuVisible, setMenuVisible, setShowSearch, getCartCount, cartItems} = useContext(ShopContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
        <h1 className='sm:text-3xl text-3xl'>
          Shops<span className='text-[#f21c1c]'>Phere</span>
        </h1>
      </Link>
      <ul className="flex gap-5 text-sm text-black">
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className="hidden sm:flex">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden"/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p className="hidden sm:flex">INVENTORY</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden"/>
        </NavLink>
        <NavLink to='/aboutus' className='flex flex-col items-center gap-1'>
          <p className="hidden sm:flex">WHO WE ARE</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden"/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className="hidden sm:flex">CONTACT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden"/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search-icon" className="sm:w-5 w-4 cursor-pointer" />
        <div className="group relative">
           <img src={assets.profile_icon} alt="profile-icon" className="sm:w-5 w-4 cursor-pointer"/>
           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
                <p className="cursor-pointer hover:text-[#f21c1c]">My Profile</p>
                <p className="cursor-pointer hover:text-[#f21c1c]">Orders</p>
                <p className="cursor-pointer hover:text-[#f21c1c]">Logout</p>
              </div>
           </div>
        </div>
        <Link to='/cart' className="relative">
            <img src={assets.cart_icon} alt="cart-icon" className="sm:w-5 sm:min-w-5 w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">{getCartCount(cartItems)} </p>
        </Link>
        <img src={assets.menu_icon} alt="menu-icon" className="w-5 cursor-pointer sm:hidden" onClick={() => setMenuVisible(true)}/>
      </div>

      {/* Sidebar menu for mobile*/}
      <div className={`absolute top-0 right-0 overflow-hidden bg-white transition-transform duration-300 ease-in-out ${menuVisible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
                <div onClick={() => setMenuVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <img src={assets.cross_icon} alt="" className="h-4 rotate-180"/>
                    <p>Close</p>
                </div>
                <NavLink className="py-2 pl-6 pt-4 border" to='/' onClick={() => setMenuVisible(false)}>HOME</NavLink>
                <NavLink className="py-2 pl-6 pt-4 border" to='/collection' onClick={() => setMenuVisible(false)}>INVENTORY</NavLink>
                <NavLink className="py-2 pl-6 pt-4 border" to='/aboutus' onClick={() => setMenuVisible(false)}>WHO WE ARE</NavLink>
                <NavLink className="py-2 pl-6 pt-4 border-b" to='/contact' onClick={() => setMenuVisible(false)}>CONTACT US</NavLink>
          </div>
      </div>

    </div>
  );
};

export default Navbar;
