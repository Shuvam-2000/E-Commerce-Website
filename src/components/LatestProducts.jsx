import { useContext } from "react"
import { ShopContext } from "../context/ContextShop"
import { Link } from "react-router-dom"


const LatestProducts = () => {

  // fetching the nessecary data through context api
  const { exploreProducts, text1, text2, text3, bodyText, priceCurrency } = useContext(ShopContext)

  return (
    <div className="my-10">
    {/* Body Title Section */}
      <div className="text-center py-8 sm:text-3xl text-2xl">
        <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-[#414141]">{text1} <span className="text-[#f21c1c] font-medium">{text2} {text3}</span></p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#414141]">
            {bodyText}
        </p>
      </div>

      {/* Rendering the products on the home page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreProducts.map((productData) => (
                  <div key={productData._id} className="overflow-hidden border rounded-lg shadow-lg hover:scale-110 duration-500 transition ease-in-out">
                      <Link to={`/products/${productData._id}`} className="block p-4">
                            <img src={productData.image} alt={productData.name} className="w-full h-40 sm:mb-5 px-2 rounded-lg" />
                            <p className="sm:text-lg text-sm font-serif mt-2 ml-2 sm:font-mono text-[#414141]">{productData.name}</p>
                            <p className="text-[#414141] font-bold mt-2 ml-2">{priceCurrency} {productData.price}</p>
                      </Link>
                  </div>
             ))}
      </div>
    </div>
  )
}

export default LatestProducts;
