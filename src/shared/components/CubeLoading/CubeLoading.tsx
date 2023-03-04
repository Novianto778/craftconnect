import React from 'react';

type Props = {};

const CubeLoading = (props: Props) => {
    return (
        <div className="z-300 flex h-screen w-full items-center justify-center bg-gray-300/10">
            <div className="cube">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default CubeLoading;
