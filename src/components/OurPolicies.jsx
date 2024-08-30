import { useContext } from "react";
import { ShopContext } from '../context/ContextShop';
import assets from "../assets/assets";

const OurPolicies = () => {
    const { policyTextExchange, policyTextExhange2, policyReturn, policyReturn2, policySupport, policySupport2 } = useContext(ShopContext);

    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-24 text-xs sm:text-sm md:text-base text-[#414141] cursor-pointer font-mono">
            <div>
                <img src={assets.exchange_icon} alt="exchange icon" className="w-12 m-auto mb-5 overflow-hidden border rounded-md shadow-md hover:border-[#777676]" />
                <p>{policyTextExchange}</p>
                <p className="text-gray-400 hover:text-[#414141]">{policyTextExhange2}</p>
            </div>
            <div>
                <img src={assets.quality_icon} alt="quality icon" className="w-12 m-auto mb-5 overflow-hidden border rounded-md shadow-md hover:border-[#777676]" />
                <p>{policyReturn}</p>
                <p className="text-gray-400 hover:text-[#414141]">{policyReturn2}</p>
            </div>
            <div>
                <img src={assets.support_img} alt="support icon" className="w-11 m-auto mb-5 overflow-hidden border rounded-lg shadow-md hover:border-[#777676]" />
                <p>{policySupport}</p>
                <p className="text-gray-400 hover:text-[#414141]">{policySupport2}</p>
            </div>
        </div>
    );
};

export default OurPolicies;
