import { useContext } from "react";
import { ShopContext } from "../context/ContextShop";
import assets from "../assets/assets";

const Collection = () => {
  const { products, showFilter, setShowFilter } = useContext(ShopContext);

  return (
    <div className="sm:flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Product Filters */}
      <div className="min-w-60">
        <p 
          className="my-2 text-xl items-center cursor-pointer gap-2 font-mono flex justify-between"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters :-
          <img 
            src={assets.dropdown_icon} 
            className={`h-2 text-black transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} 
            alt="Dropdown icon"
          />
        </p>

        {/* Sub Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Kids"} /> Kids
            </p>
          </div>
        </div>

        {/* Type of Wearables */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Topwear"} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Bottomwear"} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Winterwear"} /> Winterwear
            </p>
          </div>
        </div>

        {/* Price Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Price</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Hundred"} /> ₹100 - ₹200
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"Twohundred"} /> ₹200 - ₹300
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={"ThreeHundred"} /> ₹300 - ₹400
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Page product product shown right */}

    </div>
  );
};

export default Collection;
