const Orders = () => {

  return (
    <div className="border-t pt-12 pb-12">
      <div className="text-2xl">
      <h2 className="lg-text-4xl font-mono">Your <span className="text-[#f21c1c]">Orders :-</span></h2>
      </div>
      <div>
        {/* {
          products.slice(1,4).map((myOrder) => (
            <div key={myOrder} className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20 rounded-md" src={myOrder.image} alt=""/>
              </div>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Orders
