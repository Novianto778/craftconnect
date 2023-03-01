import React from 'react';

type Props = {};

const AnimatedArrow = (props: Props) => {
    return (
        <div className="arrow ml-6 -rotate-90 cursor-pointer">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default AnimatedArrow;
