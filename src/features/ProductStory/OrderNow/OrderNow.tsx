import DotPattern from '@/assets/icon/dot-pattern.svg';
import Person from '@/assets/img/person.png';
import Button from '@/shared/components/Button/Button';
import Image from 'next/image';

type Props = {};

const OrderNow = (props: Props) => {
    return (
        <section className="h-screen min-h-screen w-full bg-primary-cream">
            <div className="container grid h-full grid-cols-12 content-center items-center justify-between gap-y-12 gap-x-0 overflow-hidden lg:gap-x-20">
                <div className="col-span-12 flex flex-col gap-y-8 lg:col-span-6">
                    <h2 className="font-volkhov text-5xl leading-[1.4]">
                        Pesan produk kami sekarang
                    </h2>
                    <p>
                        Segera miliki produk batik terbaik dari toko kami yang
                        bisa anda miliki.
                    </p>
                </div>
                <div className="z-10 col-span-12 flex w-max items-center lg:col-span-6 lg:gap-x-4">
                    <div className="relative">
                        <Image
                            src={DotPattern}
                            width={150}
                            height={150}
                            alt="pattern"
                            className="absolute -bottom-4 -right-10 -z-10 h-auto w-auto"
                        />
                        <Button className="ml-auto md:px-10 md:py-4">
                            Pesan Sekarang
                        </Button>
                    </div>
                    <div className="hidden h-full max-w-[20rem] md:block">
                        <Image
                            src={Person}
                            width={500}
                            height={500}
                            alt="person"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderNow;
