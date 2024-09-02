import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ContextShop"
import assets from "../assets/assets"
import { useLocation } from "react-router-dom"

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)

    const [visible, setvisible] = useState(false)
    
    // uselocation() is used to only show the searchbar in inventory page
    const location = useLocation();

    useEffect(() => {
        if( location.pathname.includes('collection')){
            setvisible(true)
        }else{
            setvisible(false)
        }
    },[location])

return showSearch && visible ? (
    <div className="bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-4 mx-3 rounded-full w-3/4 sm:w-1/2 hover:border-[black]">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search"/>
        <img className="w-4 cursor-pointer hover:scale-110 transition ease-in-out" src={assets.search_icon}/>
      </div>
        <img onClick={() => setShowSearch(false)} className="inline w-3 mb-1 hover:scale-110 transition ease-in-out cursor-pointer" src={assets.cross_icon} />
    </div>
  ) : ""
}

export default SearchBar
