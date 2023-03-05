import Footer from '../landing-page/Footer/Footer';
import Hero from './Hero/Hero';
import OrderNow from './OrderNow/OrderNow';
import Popular from './Popular/Popular';
import Timeline from './Timeline/Timeline';
import Value from './Value/Value';

type Props = {};

const ProductStory = (props: Props) => {
    return (
        <>
            <Hero />
            <Value />
            <Popular />
            <Timeline />
            <OrderNow />
            <Footer />
        </>
    );
};

export default ProductStory;
