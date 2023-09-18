import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactUs from '../components/features/ContactUs'
import HeroSection from '../components/features/HeroSection'
import ProductSection from '../components/features/ProductSection'

const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroSection/>
        <ProductSection/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default HomePage