import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestProducts from "../components/LatestProducts"
import NewsLetter from "../components/NewsLetter"
import OurPolicies from "../components/OurPolicies"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestProducts/>
      <BestSeller/>
      <OurPolicies/>
      <NewsLetter/>
    </div>
  )
}

export default Home
