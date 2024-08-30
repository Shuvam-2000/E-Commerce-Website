import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

const ShoppingContextProvider = ({ children }) => {
    
    // Storing all the necessary data and info for the home page in variables
    const priceCurrency = '₹';
    const deliveryCharge = 40;
    const text1 = "Explore";
    const text2 = "Our";
    const text3 = "Collections";
    const bodyText = "Discover a wide range of our newest additions and trends. Our latest collection caters to all your needs.";
    const bestSellerText1 = "Our Best"
    const bestSellerText2 = "Sellers"
    const bestSellerBody = "Discover the hottest products that everyone's talking about."
    const policyTextExchange = "Flexible Exchange Terms"
    const policyTextExhange2 = "Hassle-Free Exchange"
    const policyReturn = "7-Days Return Policy"
    const policyReturn2 = "Shop with Confidence: 7-Day Returns"
    const policySupport = "Best customer support"
    const policySupport2 = "Round-the-Clock Customer Assistance"


    // state for opening the sidebar in the mobie view - home page
    const[menuVisible, setMenuVisible] = useState(false)
    
    // State to store and manage 10 products from the products array in assests - home page
    const [exploreProducts, setExploreProducts] = useState([]);

    useEffect(() => {
        setExploreProducts(products.slice(0, 12));
    },[products]);
    

    // state to render the bestselling top 6 best selling item from the explore product - home page
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestSellingProduct = exploreProducts.filter((item) => item.bestseller === true)
        setBestSeller(bestSellingProduct.slice(0, 6))
    },[exploreProducts])

    // Storing all the data in an object
    const value = {
        menuVisible,
        setMenuVisible,
        products,
        priceCurrency,
        deliveryCharge,
        text1,
        text2,
        text3,
        bodyText,
        exploreProducts,
        bestSellerText1,
        bestSellerText2,
        bestSellerBody,
        bestSeller,
        policyTextExchange,
        policyTextExhange2,
        policyReturn,
        policyReturn2,
        policySupport,
        policySupport2,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShoppingContextProvider };
