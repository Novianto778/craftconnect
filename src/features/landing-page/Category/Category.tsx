import Besi from '@/features/landing-page/Category/assets/besi.png';
import Kaca from '@/features/landing-page/Category/assets/kaca.png';
import Kain from '@/features/landing-page/Category/assets/kain.png';
import Kayu from '@/features/landing-page/Category/assets/kayu.png';
import Keramik from '@/features/landing-page/Category/assets/keramik.png';
import Image from 'next/image';

type Props = {};

const Category = (props: Props) => {
    return (
        <section className="container min-h-screen pb-20" id="category">
            <h2 className="py-12 text-center font-volkhov text-4xl font-bold">
                Kategory
            </h2>
            <div className="category-container font-volkhov">
                <div className="kain h-full w-full">
                    <Image
                        src={Kain}
                        alt="kain"
                        width={300}
                        height={300}
                        className="-translate-x-10 translate-y-20 object-cover"
                    />
                    <p className="absolute top-10 right-20 text-4xl font-semibold tracking-widest">
                        Kain
                    </p>
                </div>
                <div className="keramik h-full w-full">
                    <Image
                        src={Keramik}
                        alt="keramik"
                        width={220}
                        height={220}
                        className="h-auto w-52 -translate-x-16 translate-y-8 object-cover"
                    />
                    <p className="absolute top-10 right-8 text-4xl font-semibold tracking-widest">
                        Keramik
                    </p>
                </div>
                <div className="kayu group h-full w-full">
                    <Image
                        src={Kayu}
                        alt="kayu"
                        width={260}
                        height={260}
                        className="absolute bottom-0 right-0 h-auto w-32 object-cover md:w-52"
                    />
                    <p className="absolute top-14 left-12 text-4xl font-semibold tracking-widest">
                        Kayu
                    </p>
                </div>
                <div className="kaca h-full w-full">
                    <Image
                        src={Kaca}
                        alt="kaca"
                        width={300}
                        height={300}
                        className="absolute -bottom-24 -left-24 object-cover"
                    />
                    <p className="absolute top-14 right-12 text-4xl font-semibold tracking-widest">
                        Kaca
                    </p>
                </div>
                <div className="besi h-full w-full">
                    <Image
                        src={Besi}
                        alt="besi"
                        width={320}
                        height={320}
                        className="absolute -top-24 -right-24 object-cover"
                    />
                    <p className="absolute bottom-14 left-12 text-4xl font-semibold tracking-widest">
                        Besi
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Category;
