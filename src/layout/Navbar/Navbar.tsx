import useAuth from '@/shared/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BsChatQuote } from 'react-icons/bs';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import { CgProfile } from 'react-icons/cg';
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [router.pathname]);

    const profileImageRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(profileImageRef, () => setOpenPopover(false));

    return (
        <>
            <div className="w-full">
                <section className="relative">
                    <nav className="flex h-[60px] w-full justify-between bg-gray-900 text-white">
                        <div className="md:p-auto container flex w-full items-center py-6">
                            <Link
                                href="/"
                                className="font-heading text-2xl font-bold"
                            >
                                CraftConnect
                            </Link>
                            <NavbarMenu isOpen={isOpen} />
                            <div className="hidden items-center space-x-5 md:flex">
                                <Link href="/chat">
                                    <BsChatQuote size={20} />
                                </Link>
                                <div className="mr-6 hidden items-center md:flex">
                                    <RiShoppingCartLine size={20} />
                                    <span className="absolute -mt-5 ml-4 flex">
                                        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                                    </span>
                                </div>
                                <div className="relative" ref={profileImageRef}>
                                    {currentUser?.avatar ? (
                                        <Image
                                            className="cursor-pointer"
                                            src={currentUser?.avatar as string}
                                            width={36}
                                            height={36}
                                            alt="user profile"
                                            onClick={() =>
                                                setOpenPopover((prev) => !prev)
                                            }
                                        />
                                    ) : (
                                        <CgProfile size={20} />
                                    )}
                                    {openPopover && (
                                        <ProfileDropdown
                                            currentUser={currentUser!}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mr-6 flex items-center md:hidden">
                            <RiShoppingCartLine size={20} />
                            <span className="absolute -mt-5 ml-4 flex">
                                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                            </span>
                        </div>
                        <button
                            className="navbar-burger mr-12 self-center md:hidden"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <HiOutlineMenuAlt1 size={24} />
                        </button>
                    </nav>
                </section>
            </div>
        </>
    );
};

export default Navbar;
