import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products, showProduct, showFilter, setShowFilter, collectionHeading, collectionHeading2, priceCurrency, search, showSearch } = useContext(ShopContext);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(showProduct);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    const valueOfCategory = e.target.value;
    // If the value is already in the filter, remove it
    if (categoryFilter.includes(valueOfCategory)) {
      setCategoryFilter(prev => prev.filter(item => item !== valueOfCategory));
    // If the value is not in the filter, add it
    } else {
      setCategoryFilter(prev => [...prev, valueOfCategory]);
    }
  };

  const toggleSubCategory = (e) => {
    const valueSubCategory = e.target.value;
    
    if (subCategoryFilter.includes(valueSubCategory)) {
      // If the value is already in the filter, remove it
      const updatedSubCategoryFilter = subCategoryFilter.filter(item => item !== valueSubCategory);
      setSubCategoryFilter(updatedSubCategoryFilter);
    } else {
      // If the value is not in the filter, add it
      const updatedSubCategoryFilter = [...subCategoryFilter, valueSubCategory];
      setSubCategoryFilter(updatedSubCategoryFilter);
    }
  };

  const togglePrice = (e) => {
    const valueOfPrice = e.target.value;
    
    if (priceFilter.includes(valueOfPrice)) {
      // If the value is already in the filter, remove it
      const updatedPriceFilter = priceFilter.filter(item => item !== valueOfPrice);
      setPriceFilter(updatedPriceFilter);
    } else {
      // If the value is not in the filter, add it
      const updatedPriceFilter = [...priceFilter, valueOfPrice];
      setPriceFilter(updatedPriceFilter);
    }
  };
  

  const applyFilter = () => {
    let filteredProduct = [...products];

    // Apply filters
    if (showSearch && search) {
      filteredProduct = filteredProduct.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter.length > 0) {
      filteredProduct = filteredProduct.filter(product =>
        categoryFilter.includes(product.category)
      );
    }

    if (subCategoryFilter.length > 0) {
      filteredProduct = filteredProduct.filter(product =>
        subCategoryFilter.includes(product.subCategory)
      );
    }

    // price filter
    if (priceFilter.length > 0) {
      filteredProduct = filteredProduct.filter(product => {
        const price = product.price;
        if (priceFilter.includes('Hundred') && price >= 100 && price <= 200) {
          return true;
        }
        if (priceFilter.includes('Twohundred') && price > 200 && price <= 300) {
          return true;
        }
        if (priceFilter.includes('ThreeHundred') && price > 300 && price <= 400) {
          return true;
        }
        return false;
      });
    }

    // Apply sorting - price sorting
    switch (sortType) {
      case 'low-high':
        filteredProduct.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filteredProduct.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filteredProduct);
  };

  useEffect(() => {
    applyFilter();
  }, [categoryFilter, subCategoryFilter, priceFilter, products, showSearch, search, sortType]);

  return (
    <div className="sm:flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Product Filters */}
      <div className="min-w-60">
        <p 
          className="my-2 sm:text-xl text-sm items-center cursor-pointer gap-2 font-mono flex justify-between"
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
              <input type="checkbox" className="w-3 cursor-pointer" value={'ThreeHundred'} onChange={togglePrice} onClick={() => setShowFilter(!showFilter)} /> ₹300 - ₹400
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Page product shown right */}
      <div className="flex-1">
        <div className="flex justify-between text-xs sm:text-2xl mb-4">
          <p className="text-[#414141]">{collectionHeading} <span className="text-[#f21c1c] font-medium">{collectionHeading2} :-</span></p>

          {/* Product Sorting */}
          <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 sm:text-sm text-xs sm:px-2 pb-1 pt-1 rounded-md font-mono cursor-pointer text-center">
            <option value="relevant" className="bg-gray-300">Relevant Products</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low" className="bg-gray-300">Price: High to Low</option>
          </select>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 p-3">
          {filteredProducts.length > 0 ?
            filteredProducts.map((showProductData) => (
              <div key={showProductData._id} className="overflow-hidden border rounded-lg shadow-lg sm:hover:scale-110 duration-500 transition ease-in-out sm:hover:bg-[#ff4646] sm:hover:text-white">
                <Link to={`/products/${showProductData._id}`} className="block p-4">
                  <img src={showProductData.image} alt={showProductData.name} className="w-full h-40 sm:mb-5 rounded-lg" />
                  <p className="text-sm sm:text-lg font-serif mt-2 ml-2 text-[#414141] transition-colors duration-300 sm:hover:text-white">{showProductData.name}</p>
                  <p className="text-[#414141] font-semibold transition-colors duration-300 sm:hover:text-white mt-2 ml-2">{priceCurrency}{showProductData.price}</p>
                </Link>
              </div>
            )) : <p className="text-center text-md sm:text-lg font-serif text-[#ff4646] font-semibold mt-4 col-span-full">Oops!! No Products Available Now</p>}
        </div>
      </div>
    </div>
  );
};

export default Collection;


