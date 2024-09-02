import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

const ShoppingContextProvider = ({ children }) => {
    
    // Storing all the necessary data and info for the home page 
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
    const footerText1 = "Welcome to ShopsPhere, your ultimate destination for the latest dress and wearables.Our mission is to provide you with the highest quality products and unmatched customer service. Whether you're looking for trendy stylish dresses or casual wearables, we have something for everyone."

    // nessecary data for the inventory page
    const collectionHeading = "Explore"
    const collectionHeading2 = "Our Inventory"



    // state for opening the sidebar in the mobie view - home page
    const [menuVisible, setMenuVisible] = useState(false)
    
    // State to store and manage 10 products from the products array in assests - home page
    const [exploreProducts, setExploreProducts] = useState([]);

    useEffect(() => {
        setExploreProducts(products.slice(0, 12));
    },[products]);
    

    // state to render the bestselling top 6 best selling item from the explore product - home page
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestSellingProduct = exploreProducts.filter((item) => item.bestseller === true)
        setBestSeller(bestSellingProduct.slice(0, 5))
    },[exploreProducts])

    // state for showing the filters in the mobile screen - inventory(collection) page
    const [showFilter, setShowFilter] = useState(false);

    // state to show all the products from the products array on render - inventory(collection) page
    const [showProduct, setShowProduct] = useState([]);

    useEffect(() => {
        if (products) {   // check if product exists
        setShowProduct(products);  // if products exixt updtae the showProduct with the value of product
        }
    }, [products]);

    // state for the search bar in inventory(colllection page)
    const [search, setSearch] = useState("")
    const[showSearch, setShowSearch] = useState(false)




    // Storing all the data in an object
    const allValue = {
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
        footerText1,
        showFilter,
        setShowFilter,
        collectionHeading,
        collectionHeading2,
        showProduct,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={allValue}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShoppingContextProvider };
