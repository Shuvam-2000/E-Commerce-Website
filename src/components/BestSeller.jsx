import { useContext } from 'react'
import { ShopContext } from '../context/ContextShop'

const BestSeller = () => {
    const { bestSellerText1, bestSellerText2, bestSellerBody, priceCurrency, bestSeller } = useContext(ShopContext)

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-9'>
                <p className="text-[#414141]">
                    {bestSellerText1} 
                    <span className="text-[#f21c1c] font-medium">{bestSellerText2}</span>
                </p>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#414141]">
                    {bestSellerBody}
                </p>
            </div>

            {/* Rendering the top 6 best-selling products */}
            <div className='grid grid-cols-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 gap-4 gap-y-6 cursor-pointer'>
                {bestSeller.map((bestSellingData) => (
                    <div key={bestSellingData._id} className="overflow-hidden border rounded-lg shadow-lg hover:scale-110 transition ease-in-out">
                        <img src={bestSellingData.image} alt={bestSellingData.name} className="w-full h-40 sm:mb-5 object-cover" />
                        <p className="text-center mb-2 text-xs font-medium">{bestSellingData.name}</p>
                        <p className="text-center text-xs mb-2 font-mono">{priceCurrency}{bestSellingData.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSeller
