// Imports
import Image from "next/image";
import Link from "next/link";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// 
function HeaderSection() {
    // Providers
    // Global
    const { pathname } = useGlobalProvider();

    // Main Nav
    const nav = [
        {
            label: 'Services',
            href: '/services',
            isActive: pathname === '/services',
        },
        {
            label: 'About Us',
            href: '/about-us',
            isActive: pathname === '/about-us',
        },
        {
            label: 'Join Us',
            href: '/join-us',
            isActive: pathname === '/join-us',
        },
    ]

    return (
        <header className="min-w-full sticky z-50 top-0 bg-background flex flex-row items-center justify-between px-8 py-4">

            {/*  */}
            <a href="/" className="flex flex-row items-center gap-x-4 cursor-pointer group">
                <Image className="group-hover:opacity-60 transition-opacity" src={'logo.svg'} width={65} height={50} alt="Noor Home Care - Business Directory and Home Care Logo" />

                <h1 className="text-primary font-black text-2xl hidden sm:block transition-colors group-hover:text-secondary">Noor Home Care</h1>
            </a>

            {/*  */}
            <nav className="hidden flex-row list-none gap-x-6 sm:flex">
                {nav.map((item, idx) => (
                    <li key={idx}>
                        <Link className={`font-semibold text-lg transition-colors hover:text-secondary ${item.isActive ? 'text-secondary' : 'text-primary'}`} href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </nav>
        </header>
    );

}

export default HeaderSection;