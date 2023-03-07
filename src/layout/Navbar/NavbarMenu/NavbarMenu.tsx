import { auth } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import useAuth from '@/shared/hooks/useAuth';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';
import { twMerge } from 'tailwind-merge';

type Props = {
    isOpen: boolean;
    isFixed: boolean;
};

const LINKS = [
    {
        title: 'Home',
        link: '/',
    },

    {
        title: 'Katalog',
        link: '/katalog',
    },
    {
        title: 'Docs',
        link: 'https://craftconnect-docs.netlify.app',
        target: '_blank',
    },
];

const NavbarMenu = ({ isOpen, isFixed }: Props) => {
    const router = useRouter();
    const [signOut, loading] = useSignOut(auth);
    const { currentUser } = useAuth();
    return (
        <ul
            className={cn(
                `${
                    isOpen ? 'flex' : 'hidden'
                } font-heading absolute top-14 right-8 z-300 mx-auto w-60 flex-col items-start gap-y-4 bg-black px-4 py-4 font-semibold text-white md:static md:flex md:w-auto md:flex-row md:gap-y-0 md:space-x-12 md:py-0`,
                {
                    'bg-black !text-white': isFixed,
                    'md:bg-transparent': !isFixed,
                    'text-black': !isFixed && router.pathname === '/',
                    '!text-white': isOpen,
                }
            )}
        >
            {LINKS.map((link, index) => {
                if (link.target) {
                    return (
                        <li className="nav-item" key={index}>
                            <a
                                className={
                                    (twMerge(
                                        'text-white duration-300 hover:text-blue-600'
                                    ),
                                    cn({
                                        'bg-black !text-white':
                                            isFixed || router.pathname !== '/',
                                    }))
                                }
                                href={link.link}
                                target={link.target}
                            >
                                {link.title}
                            </a>
                        </li>
                    );
                } else {
                    return (
                        <LinkItem
                            isFixed={isFixed}
                            key={link.title}
                            title={link.title}
                            link={link.link}
                            isActive={router.pathname === link.link}
                        />
                    );
                }
            })}
            {currentUser ? (
                <Button
                    size="sm"
                    className="nav-item bg-red-500 md:hidden"
                    isLoading={loading}
                    onClick={() => signOut()}
                >
                    Sign Out
                </Button>
            ) : (
                <Link href="/login" className="w-full">
                    <Button size="sm" fullWidth className="nav-item md:hidden">
                        Sign In
                    </Button>
                </Link>
            )}
        </ul>
    );
};

export default NavbarMenu;

const LinkItem = ({
    title,
    link,
    isActive,
    isFixed,
}: {
    isFixed: boolean;
    title: string;
    link: string;
    isActive: boolean;
}) => {
    const router = useRouter();
    return (
        <li className="nav-item">
            <Link
                className={
                    (twMerge('text-white duration-300 hover:text-blue-600'),
                    cn({
                        'text-blue-600': isActive,
                        'bg-black !text-white':
                            isFixed || router.pathname !== '/',
                    }))
                }
                href={link}
            >
                {title}
            </Link>
        </li>
    );
};
