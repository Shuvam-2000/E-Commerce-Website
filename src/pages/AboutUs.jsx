import assets from "../assets/assets"

const AboutUs = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t font-mono">
        <p className="text-[#414141]">Who <span className="text-[#f21c1c] font-medium">We Are :- </span></p>
      </div>
      <div className="my-14 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-lg" src={assets.about_img} alt="about_image" />
        <div className="flex flex-col font-mono justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to ShopsPhere, your one-stop destination for the latest fashion trends and timeless wardrobe essentials. At ShopsPhere, we believe that style is for everyone, and our mission is to make it easy and affordable to find outfits that express your individuality.

          From chic casuals to elegant formal wear, we curate a wide range of clothes and accessories that cater to all tastes and occasions. Whether you're looking for the latest season's must-haves or classic pieces that never go out of style, ShopsPhere has something for every fashion-forward shopper.
          </p>
          <p>Our commitment goes beyond just providing stylish wearables. We prioritize quality, comfort, and sustainability in every item we offer. With a seamless shopping experience, secure payment options, and fast delivery, we're here to make your fashion journey smooth and exciting.
          </p>
          <b className="text-gray-800 text-2xl font-mono">Our <span className="text-[#f21c1c]">Goal</span></b>
          <p>At ShopsPhere, our vision is to redefine the shopping experience by blending style, quality, and convenience.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
