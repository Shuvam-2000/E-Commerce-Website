import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";
import { NavLink, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import assets from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Products = () => {
  const { productId } = useParams();
  const { products, priceCurrency, addToCart, handleBuyNow} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [ mainImage, setMainImage ] = useState("");
  const [selectSize, setSelectSize] = useState("")
  const [checkPinCode, setCheckCode] = useState("")
  const [otherProducts, setOtherProducts] = useState([])

  // slider for the review section
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

  // validation for the checking pin code
  const handleCheck = () => {
    if(checkPinCode === ''){
      toast.error("Please enter a pincode")
    }else if(isNaN(checkPinCode)){
      setCheckCode('')
      toast.error("Pincode should be a number")
    }else if(checkPinCode.length !== 6){
      setCheckCode('')
      toast.error("Pincode should be of 6 digits")
    }else{
      setCheckCode('')
      toast.success("Product Avaliable Now")   // it is for demo purpose 
    }
  }
  
  // show the actual product in the page
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setMainImage(foundProduct.image);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);


  // show the other products
  useEffect(() => {
    const OtherProduct = products.filter((item) => item.bestseller === true)
    setOtherProducts(OtherProduct.slice(0, 5))
  },[products])

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
          <p className="text-gray-700 text-sm font-serif tracking-widest">Check product avaliablity for your pincode :-</p>
          <div className="flex flex-row">
            <input value={checkPinCode} onChange={(e) => setCheckCode(e.target.value)} className=" mt-2 py-2 pt-2 px-2 b rounded-sm
            border-l border-t border-b border-gray-400" type="text" placeholder="Enter Your Pincode"/>
            <button onClick={handleCheck} className="border-t border-r border-b border-black mt-2 px-4 pl-4 pb-2 pt-2 rounded-b-sm bg-[#f21c1c] text-white">Check</button>
          </div>
          <div className="flex flex-row mt-8">
            <button onClick={() => addToCart(productData._id, selectSize)} className="border-l border-t border-b bg-[#f21c1c] text-white border-gray-400 py-3 pt-3 px-3 text-sm font-semibold">ADD TO CART</button>
            <button onClick={() => handleBuyNow(productData._id, selectSize)} className="border-r border-t border-b bg-white text-gray-400 border-gray-400 py-2 pt-2 px-4 text-sm font-semibold">BUY NOW</button>
          </div>
          <hr className="mt-6 sm:w-4/5 bg-gray-600"/>
          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1 tracking-wider">
              <p className="font-mono text-sm">Delivery in Two Days</p>
              <p className="font-mono text-sm">Easy Return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Top Customer Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border-t border-r border-l rounded-md px-5 py-3 font-mono text-xl"> Our Top Customers Say :-</b>
        </div>
        <Slider {...settings}>
        <div className="flex flex-col gap-2 border py-4 px-2 text-sm text-gray-600 rounded-sm">
          <h1 className="text-gray-700 font-mono text-xl mx-2">Ankit Kumar</h1>
          <div className="flex items-center gap-1 mx-2 mb-2">
              <p className="text-gray-500 font-mono tracking-wide">Rated :- </p>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
            </div>
          <p className="text-gray-400 font-mono mx-2 tracking-wide">Praised for its comfort and stylish design. Some noted that the sizing runs large.Praise for its comfort and stylish design. Some noted that the sizing runs large.</p>
        </div>
        <div className="flex flex-col gap-2 border py-4 px-2 text-sm text-gray-600 rounded-sm">
          <h1 className="text-gray-700 font-mono text-xl mx-2">Ananya Sharma</h1>
          <div className="flex items-center gap-1 mx-2 mb-2">
              <p className="text-gray-500 font-mono tracking-wide">Rated :- </p>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_dull_icon}/>
            </div>
          <p className="text-gray-400 font-mono mx-2 tracking-wide">Praised for its comfort and stylish design. Some noted that the sizing runs large.Praise for its comfort and stylish design. Some noted that the sizing runs large.</p>
        </div>
        <div className="flex flex-col gap-2 border py-4 px-2 text-sm text-gray-600 rounded-sm">
          <h1 className="text-gray-700 font-mono text-xl mx-2"> Priya Desai</h1>
          <div className="flex items-center gap-1 mx-2 mb-2">
              <p className="text-gray-500 font-mono tracking-wide">Rated :- </p>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
            </div>
          <p className="text-gray-400 font-mono mx-2 tracking-wide">Praised for its comfort and stylish design. Some noted that the sizing runs large.Praise for its comfort and stylish design. Some noted that the sizing runs large.</p>
        </div>
        <div className="flex flex-col gap-2 border py-4 px-2 text-sm text-gray-600 rounded-sm">
          <h1 className="text-gray-700 font-mono text-xl mx-2">Amit Singh</h1>
          <div className="flex items-center gap-1 mx-2 mb-2">
              <p className="text-gray-500 font-mono tracking-wide">Rated :- </p>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_dull_icon}/>
            </div>
          <p className="text-gray-400 font-mono mx-2 tracking-wide">Praised for its comfort and stylish design. Some noted that the sizing runs large.Praise for its comfort and stylish design. Some noted that the sizing runs large.</p>
        </div>
        <div className="flex flex-col gap-2 border py-4 px-2 text-sm text-gray-600 rounded-sm">
          <h1 className="text-gray-700 font-mono text-xl mx-2">Neha Gupta</h1>
          <div className="flex items-center gap-1 mx-2 mb-2">
              <p className="text-gray-500 font-mono tracking-wide">Rated :- </p>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
              <img className="w-3.5" src={assets.star_icon}/>
            </div>
          <p className="text-gray-400 font-mono mx-2 tracking-wide">Praised for its comfort and stylish design. Some noted that the sizing runs large.Praise for its comfort and stylish design. Some noted that the sizing runs large.</p>
        </div>
        </Slider>
      </div>

      <h1 className="flex justify-center mt-14 mb-2 text-[#414141] text-xl sm:text-2xl font-mono">
        Have a Look
        <span className="text-[#f21c1c] font-mono ml-2">At Our BestSellers :-</span>
      </h1>
      {/* Explore BestSelling Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 gap-4 gap-y-6 cursor-pointer mt-10'>
                {otherProducts.map((otherProductData) => (
                    <div key={otherProductData._id} className="overflow-hidden border rounded-lg shadow-lg hover:scale-110 transition ease-in-out">
                    <Link to={`/products/${otherProductData._id}`} className="block">
                        <img src={otherProductData.image} alt={otherProductData.name} className="w-full h-40 sm:mb-5 object-cover" />
                        <p className="text-center mb-2 text-xs font-medium">{otherProductData.name}</p>
                        <p className="text-center text-xs mb-2 font-mono">{priceCurrency}{otherProductData.price}</p>
                        </Link>
                    </div>
                ))}
            </div>      
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Products;
