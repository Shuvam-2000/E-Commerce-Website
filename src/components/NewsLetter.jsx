
const NewsLetter = () => {

  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl font-medium text-[#414141]">Get In Touch <span className="text-[#f21c1c]">For More Updates</span></h2>
      <p className="text-gray-600 mt-3 text-xs sm:text-sm">Stay updated with our latest news and exclusive offers subscribe to our newsletter.</p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" required />
        <button type="submit" className="bg-[#f21c1c] text-sm py-4 px-10 text-white font-mono">SUBMIT</button>
      </form>
    </div>
  )
}

export default NewsLetter
