import { auth } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';

type Props = {
    isOpen: boolean;
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
        title: 'About',
        link: '/about',
    },
    {
        title: 'Contact',
        link: '/contact',
    },
];

const NavbarMenu = ({ isOpen }: Props) => {
    const router = useRouter();
    const [signOut, loading] = useSignOut(auth);
    return (
        <ul
            className={`${
                isOpen ? 'flex' : 'hidden'
            } font-heading absolute top-14 right-8 mx-auto w-60 flex-col items-start gap-y-4 bg-gray-900 px-4 py-4 font-semibold md:static md:flex md:w-auto md:flex-row md:gap-y-0 md:space-x-12 md:py-0`}
        >
            {LINKS.map((link) => (
                <LinkItem
                    key={link.title}
                    title={link.title}
                    link={link.link}
                    isActive={router.pathname === link.link}
                />
            ))}
            <Button
                size="sm"
                className="nav-item md:hidden"
                isLoading={loading}
                onClick={() => signOut()}
            >
                Sign Out
            </Button>
        </ul>
    );
};

export default NavbarMenu;

const LinkItem = ({
    title,
    link,
    isActive,
}: {
    title: string;
    link: string;
    isActive: boolean;
}) => {
    return (
        <li className="nav-item">
            <Link
                className={cn('duration-300 hover:text-blue-600', {
                    'text-blue-600': isActive,
                })}
                href={link}
            >
                {title}
            </Link>
        </li>
    );
};
