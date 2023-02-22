import React from 'react';
import Category from './Category/Category';
import Gallery from './Gallery/Gallery';
import ProductStory from './ProductStory/ProductStory';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div>
            <div className="h-screen w-full bg-red-400"></div>
            {/* <ProductStory /> */}
            <Gallery />
            <Category />
        </div>
    );
};

export default LandingPage;
