import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ContextShop";

const Products = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProductData = () => {
      const foundProduct = products.find(item => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setMainImage(foundProduct.image[0]);
      }
    };

    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="text-center"></div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Show Main Product Image */}
        <div className="flex-1">
          <img src={mainImage} alt="Main Product" className="w-full h-auto" />
        </div>
        
        {/* Show Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((imgSrc, index) => (
              <img 
                src={imgSrc} 
                key={index} 
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" 
                alt={`Product Image ${index}`} 
              />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
