import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

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

    // Add to cart functionality
    const[cartItems, setCartItems] = useState({})

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);   // copy of cartItems

        if(!size){
            toast.error('Please Select Product Size')   // toastify error message
            return
        }
    
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
        toast.success('Item Added To Cart Sucessfully')
    };

    // getting the cart count functionality
    const getCartCount = () => {
        let totalCount = 0;
    
        for (const category in cartItems) {
            for (const item in cartItems[category]) {
                if (cartItems[category][item] > 0) {
                    totalCount += cartItems[category][item];
                    console.log(totalCount)
                }
            }
        }
        return totalCount;
    };

    // calculate the total price of the products in cart
    const getCartAmount =  () => {
        let totalCartAmount = 0;
    
        for (const productId in cartItems) {
            let productInfo = products.find((compareProduct) => compareProduct._id === productId);
    
            if (productInfo) {
                for (const size in cartItems[productId]) {
                    try {
                        if (cartItems[productId][size] > 0) {
                            totalCartAmount += productInfo.price * cartItems[productId][size];
                        }
                    } catch (error) {
                        console.error("Error processing item:", error);
                    }
                }
            }
        }
        return totalCartAmount;
    };

    // update quantity of the product in cart page
    const updateCartQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }
    

    // buy now functionality
    const [buyNow, setBuyNow] = useState({})

    const handleBuyNow = (itemId, size) => {
        let buyData = structuredClone(buyNow)

        if(!size){
            toast.error("Please Select Product Size")
            return
        }
        if (buyData[itemId]) {
            if (buyData[itemId][size]) {
                buyData[itemId][size] += 1;
            } else {
                buyData[itemId][size] = 1;
            }
        } else {
            buyData[itemId] = {};
            buyData[itemId][size] = 1;
        }
        setBuyNow(buyData)
        toast.success("Ready to place your order!")
    }
    
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
        cartItems,
        addToCart,
        buyNow,
        handleBuyNow,
        getCartCount,
        updateCartQuantity,
        getCartAmount,
    };

    return (
        <ShopContext.Provider value={allValue}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShoppingContextProvider };
