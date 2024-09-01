import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products, showProduct, showFilter, setShowFilter, collectionHeading, collectionHeading2, priceCurrency } = useContext(ShopContext);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(showProduct);

  const toggleCategory = (e) => {
    const valueOfCategory = e.target.value;
    if (categoryFilter.includes(valueOfCategory)) {
      setCategoryFilter(prev => prev.filter(item => item !== valueOfCategory));
    } else {
      setCategoryFilter(prev => [...prev, valueOfCategory]);
    }
  };

  const toggleSubCategory = (e) => {
    const valueSubCategory = e.target.value;
    if (subCategoryFilter.includes(valueSubCategory)) {
      setSubCategoryFilter(prev => prev.filter(item => item !== valueSubCategory));
    } else {
      setSubCategoryFilter(prev => [...prev, valueSubCategory]);
    }
  };

  const togglePrice = (e) => {
    const valueOfPrice = e.target.value;
    if (priceFilter.includes(valueOfPrice)) {
      setPriceFilter(prev => prev.filter(item => item !== valueOfPrice));
    } else {
      setPriceFilter(prev => [...prev, valueOfPrice]);
    }
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (categoryFilter.length > 0) {
      filtered = filtered.filter(product => categoryFilter.includes(product.category));
    }

    if (subCategoryFilter.length > 0) {
      filtered = filtered.filter(product => subCategoryFilter.includes(product.subCategory));
    }

    if (priceFilter.length > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        if (priceFilter.includes('Hundred') && price >= 100 && price <= 200) {
          return true;
        }
        if (priceFilter.includes('Twohundred') && price > 200 && price <= 300) {
          return true;
        }
        if (priceFilter.includes('ThreeHundred') && price > 300 && price <= 400) {
          return true;
        }else{
          return false;
        }
      });
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [categoryFilter, subCategoryFilter, priceFilter, products]);

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
            className={`h-2 text-black transition-transform duration-300 ${showFilter ? 'rotate-90' : ''} sm:hidden`} 
            alt="Dropdown icon"
          />
        </p>

        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Type of Wearables */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>

        {/* Price Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Price</p>
          <div className="flex flex-col gap-2 text-sm font-mono text-gray-600">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Hundred'} onChange={togglePrice} onClick={() => setShowFilter(!showFilter)} /> ₹100 - ₹200
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'Twohundred'} onChange={togglePrice} onClick={() => setShowFilter(!showFilter)} /> ₹200 - ₹300
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3 cursor-pointer" value={'ThreeHundred'} onChange={togglePrice}onClick={() => setShowFilter(!showFilter)} /> ₹300 - ₹400
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Page product shown right */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <p className="text-[#414141]">{collectionHeading} <span className="text-[#f21c1c] font-medium">{collectionHeading2} :-</span></p>

          {/* Product Sorting */}
          <select className="border border-gray-300 text-sm px-2 rounded-md font-mono cursor-pointer">
            <option value="relevant" className="bg-gray-300">Relevant Products</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low" className="bg-gray-300">Price: High to Low</option>
          </select>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 p-3">
          {filteredProducts.map((showProductData) => (
              <div key={showProductData._id} className="overflow-hidden border rounded-lg shadow-lg hover:scale-110 transition ease-in-out hover:bg-[#ff4646] hover:text-white">
                <Link to={`/products/${showProductData._id}`} className="block p-4">
                  <img src={showProductData.image} alt={showProductData.name} className="w-full h-40 sm:mb-5 object-cover" />
                  <p className="text-sm sm:text-lg font-serif text-[#414141] transition-colors duration-300 hover:text-white">{showProductData.name}</p>
                  <p className="text-[#414141] font-semibold transition-colors duration-300 hover:text-white mt-2">{priceCurrency}{showProductData.price}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

