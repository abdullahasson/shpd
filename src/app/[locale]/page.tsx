// Components
import HomeHeader from "@/components/HomeHeader"
import HeroBanner from '@/components/HeroBanner';
import HowItWorks from '@/components/HowItWorks';
import IntegrationsSection from '@/components/IntegrationsSection';
import AdvantagesSection from "@/components/AdvantagesSection"
import PricingSection from "@/components/PricingSection"
import MegaSignUpCta from "@/components/MegaSignUpCta"
import Footer from "@/components/Footer"

const Home = () => {
    return (
        <div className='main-page-wrapper'>
            <HomeHeader />
            <HeroBanner />
            <HowItWorks />
            <IntegrationsSection />
            <AdvantagesSection />
            <PricingSection />
            <MegaSignUpCta />
            <Footer />
        </div>
    )
}

export default Home;