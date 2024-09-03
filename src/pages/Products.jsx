import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ContextShop";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Products = () => {
  const { productId } = useParams();
  const { products, priceCurrency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [ mainImage, setMainImage ] = useState("");
  const [selectSize, setSelectSize] = useState("")
  
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setMainImage(foundProduct.image[0]);
    }
  };


  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <NavLink to='/collection'>
        <button className="border pl-4 py-2 px-4 mb-4 rounded-lg text-sm text-black hover:bg-[#f21c1c] hover:text-white cursor-pointer">
          Explore Our Inventory
        </button>
      </NavLink>
      {/* Product Data */}
      <div className="flex gap-10 sm:gap-2 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row">
          {/* <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img 
                onClick={() => setMainImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product image ${index}`}
              />
            ))}
          </div> */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto cursor-pointer rounded-lg shadow-lg border" src={mainImage} alt="Main product" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-mono text-2xl mt-2 text-gray-600">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={assets.star_icon}/>
            <img className="w-3.5" src={assets.star_icon}/>
            <img className="w-3.5" src={assets.star_icon}/>
            <img className="w-3.5" src={assets.star_icon}/>
            <img className="w-3.5" src={assets.star_dull_icon}/>
            <p className="pl-2 text-gray-400 hover:text-[#f21c1c] cursor-pointer">(150) Reviews</p>
          </div>
          <p className="mt-4 text-2xl font-mono">{priceCurrency} {productData.price}</p>
          <p className="mt-4 text-gray-600 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Your Size :-</p>
            <div className="flex gap-5">
              {productData.sizes.map((sizesData) => (
                <button onClick={() => setSelectSize(sizesData)} className={`border border-gray-400 px-5 py-2 pt-2 rounded-lg cursor-pointer font-semibold ${sizesData === selectSize ? 'bg-[#f21c1c] text-white' : 'text-black'}`} key={sizesData}>{sizesData}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-row ">
            <button className="border-l border-t border-b bg-[#f21c1c] text-white border-gray-400 py-3 pt-3 px-3 text-sm font-semibold">ADD TO CART</button>
            <button className="border-r border-t border-b bg-white text-gray-400 border-gray-400 py-2 pt-2 px-4 text-sm font-semibold">BUY NOW</button>
          </div>
          <hr className="mt-6 sm:w-4/5 bg-gray-600"/>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Products;
