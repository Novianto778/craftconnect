import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-black py-16">
            <div className="container grid grid-cols-12 gap-y-8 text-white md:gap-x-12">
                <div className="col-span-12 flex flex-col gap-y-8 md:col-span-3">
                    <Image
                        src="/logo.svg"
                        width={500}
                        height={500}
                        alt="logo"
                        className="w-full max-w-[200px]"
                    />
                    <p className="text-sm font-medium">
                        Memperkenalkan customer dengan produk lokal terbaik
                        buatan UMKM lokal Indonesia.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="grid grid-cols-3 gap-x-8">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="font-semibold">Perusahaan</h2>
                            <p className="text-sm font-medium">Tentang</p>
                            <p className="text-sm font-medium">Bantuan</p>
                            <p className="text-sm font-medium">FAQ</p>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="font-semibold">Kontak</h2>
                            <p className="text-sm font-medium">(+62) 822221</p>
                            <p className="text-sm font-medium">
                                craft@gmail.com
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="font-semibold">Lainnya</h2>
                            <p className="text-sm font-medium">Berita</p>
                            <p className="text-sm font-medium">Kebijakan</p>
                            <p className="text-sm font-medium">Blog</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 flex flex-col gap-y-4 md:col-span-3">
                    <h2 className="font-semibold">Ikuti Kami</h2>
                    <div className="flex gap-x-4">
                        <div className="h-8 w-8 cursor-pointer rounded-full">
                            <Image
                                src="/icon/facebook.svg"
                                width={50}
                                height={50}
                                alt="facebook"
                            />
                        </div>
                        <div className="h-8 w-8 cursor-pointer rounded-full">
                            <Image
                                src="/icon/instagram.svg"
                                width={50}
                                height={50}
                                alt="instagram"
                            />
                        </div>
                        <div className="h-8 w-8 cursor-pointer rounded-full">
                            <Image
                                src="/icon/twitter.svg"
                                width={50}
                                height={50}
                                alt="twitter"
                            />
                        </div>
                    </div>
                    <p className="font-medium">Temukan Aplikasi Kami</p>
                    <div className="flex w-max cursor-pointer items-center gap-x-2 rounded-full bg-white px-6 py-2">
                        <Image
                            src="/icon/playstore.svg"
                            width={50}
                            height={50}
                            alt="playstore"
                            className="h-6 w-6"
                        />

                        <p className="font-medium text-black">Download</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
