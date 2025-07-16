// Components
import HeroBanner from '@/components/HeroBanner';
import HowItWorks from '@/components/HowItWorks';
import IntegrationsSection from '@/components/IntegrationsSection';
// import AdvantagesSection from "@/components/AdvantagesSection"
import PricingSection from "@/components/PricingSection"
import MegaSignUpCta from "@/components/MegaSignUpCta"

const Home = () => {
    return (
        <div className='main-page-wrapper'>
            <HeroBanner />
            <HowItWorks />
            <IntegrationsSection />
            {/* <AdvantagesSection /> */}
            <PricingSection />
            <MegaSignUpCta />
            {/* Other components */}
        </div>
    )
}

export default Home;