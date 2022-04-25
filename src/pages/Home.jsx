import './Home.css'

import Header from '../components/Header/Header'
import AboutSection from '../components/About/AboutSection'
import ReviewSection from '../components/Reviews/ReviewSection'
import TourSection from '../components/Tours/TourSection'
import FAQ from '../components/Footer/FAQ'


const Home = () => {
    
    return (
        <>
            <Header/>
            <AboutSection/>
            <TourSection/>
            <ReviewSection/>
            <FAQ/>
        </>
    )
}

export default Home
