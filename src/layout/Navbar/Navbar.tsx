import Button from '@/shared/components/Button/Button';
import useAuth from '@/shared/hooks/useAuth';
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BsChatQuote } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [router.pathname]);

    const profileImageRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(profileImageRef, () => setOpenPopover(false));

    return (
        <>
            <div className="w-full">
                <section className="relative z-500">
                    <nav
                        className={cn(
                            'fixed top-0 flex h-[60px] w-full justify-between',
                            {
                                'bg-black text-white':
                                    isFixed || router.pathname !== '/',
                                'bg-transparent text-black':
                                    !isFixed && router.pathname === '/',
                                // fixed: router.pathname === '/',
                            }
                        )}
                    >
                        <div className="md:p-auto container flex w-full items-center py-6">
                            <Link
                                href="/"
                                className={cn(
                                    'font-heading text-2xl font-bold',
                                    {
                                        'md:text-white': !isFixed,
                                        'text-white': isFixed,
                                    }
                                )}
                            >
                                <Image
                                    src="/logo.png"
                                    width={200}
                                    height={200}
                                    alt="logo"
                                    className="w-full max-w-[200px]"
                                />
                            </Link>
                            <NavbarMenu isFixed={isFixed} isOpen={isOpen} />
                            {currentUser ? (
                                <div className="hidden items-center space-x-5 md:flex">
                                    <Link href="/chat">
                                        <BsChatQuote size={20} />
                                    </Link>

                                    <div
                                        className="relative"
                                        ref={profileImageRef}
                                    >
                                        {currentUser?.avatar ? (
                                            <Image
                                                src={
                                                    currentUser?.avatar as string
                                                }
                                                width={36}
                                                height={36}
                                                alt="user profile"
                                                className="max-h-[36px] max-w-[36px] cursor-pointer rounded-full border border-white"
                                                onClick={() =>
                                                    setOpenPopover(
                                                        (prev) => !prev
                                                    )
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
                            ) : (
                                <div className="hidden items-center space-x-5 md:flex">
                                    <Link href="/login">
                                        <Button size="sm">Login</Button>
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="hidden lg:block"
                                    >
                                        <Button
                                            size="sm"
                                            className="hidden bg-orange-500 lg:block"
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                            )}
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
