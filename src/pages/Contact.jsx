import NewsLetter from '../components/NewsLetter'
import assets from "../assets/assets"

const Contact = () => {
  return (
    <div>
      <div className="text-center font-mono text-2xl pt-10 border-t">
      <p className="text-[#414141]">Contact <span className="text-[#f21c1c] font-medium">Us :- </span></p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px] rounded-lg shadow-lg" src={assets.contact_img} alt="contact_image" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="font-mono text-gray-500">123 Tech Avenue <br/> Innovate City, IC 54321</p>
          <p className="font-mono text-gray-500">Phone: (+91) 4567890672 <br/>Email: support@shopsphere.com <br />For Jobs: hr@shopspherecarrers.com</p>
          <p className="font-semibold text-xl text-gray-600">Carrers at <span className="text-[#f21c1c] ">ShopsPhere</span></p>
          <p className="font-mono text-gray-500">Join Our Team!! Explore job openings.</p>
          <button className="bg-[#f21c1c] text-white border-gray-400 rounded-lg py-3 px-6 text-xs font-medium cursor-pointer">Explore Jobs Openings</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact
