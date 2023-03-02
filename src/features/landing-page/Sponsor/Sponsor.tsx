import Image from 'next/image';
import React from 'react';

type Props = {};

const Sponsor = (props: Props) => {
    return (
        <section className="container flex min-h-[40vh] items-center">
            <div className="mx-auto flex max-w-[800px] flex-wrap justify-center gap-4">
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor1.svg`}
                        alt="sponsor"
                        width={120}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor2.svg`}
                        alt="sponsor"
                        width={120}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor3.svg`}
                        alt="sponsor"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor4.svg`}
                        alt="sponsor"
                        width={180}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor5.svg`}
                        alt="sponsor"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor6.svg`}
                        alt="sponsor"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor7.svg`}
                        alt="sponsor"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor8.svg`}
                        alt="sponsor"
                        width={180}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor9.svg`}
                        alt="sponsor"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="sponsor-item">
                    <Image
                        src={`/images/sponsor10.svg`}
                        alt="sponsor"
                        width={180}
                        height={50}
                    />
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
