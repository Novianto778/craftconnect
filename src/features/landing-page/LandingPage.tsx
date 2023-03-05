import AboutUs from './AboutUs/AboutUs';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Hero from './Hero/Hero';
import JoinUs from './JoinUs/JoinUs';
import Keunggulan from './Keunggulan/Keunggulan';
import Pendapat from './Pendapat/Pendapat';
import ProductStory from './ProductStory/ProductStory';
import Sponsor from './Sponsor/Sponsor';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div className="landing-page">
            <Hero />
            <AboutUs />
            <Sponsor />
            <ProductStory />
            <Keunggulan />
            <Gallery />
            <Category />
            <JoinUs />
            <Pendapat />
            <Footer />
        </div>
    );
};

export default LandingPage;
