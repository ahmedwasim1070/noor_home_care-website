// Imports
import Image from "next/image";
import Link from "next/link";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// 
function FooterSection() {
    // Providers
    // Global
    const { pathname, contactInfo } = useGlobalProvider();

    // Primary Nav
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
        <footer className="min-w-full bg-primary py-12 px-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-10">
                {/*  */}
                <nav className="list-none space-y-4">
                    {nav.map((item, idx) => (
                        <li key={idx}>
                            <Link className={` underline hover:text-secondary ${item.isActive ? 'text-secondary' : 'text-white'}`} href={item.href}> {item.label}</Link>
                        </li>
                    ))}
                </nav>

                {/*  */}
                <div className="text-center space-y-4">
                    <p className=" text-white">Become a part of our team ?</p>

                    <p className=" text-light-secondary underline">Apply Now !</p>

                    <Link className="bg-light-secondary py-2 px-4 text-primary rounded-md text-lg font-semibold border hover:text-white hover:bg-transparent transition-colors" href={'/join-us'}>Join Us</Link>
                </div>

                {/*  */}
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <Link href={'/'} className="group flex flex-row items-center gap-x-2">
                        <h4 className="text-white font-bold text-lg group-hover:text-secondary transition-colors">Noor Home Care</h4>

                        <Image className="group-hover:opacity-60 transition-opacity" src={'./logo.svg'} width={60} height={45} alt="Noor Home Care - Business Directory and Home Care Logo" />
                    </Link>

                    {/*  */}
                    <div className="text-center space-y-1">
                        {contactInfo.map((info, idx) => (
                            <h5 className={`${idx % 2 != 0 ? 'text-light-secondary' : 'text-white'}`} key={idx}>{info}</h5>
                        ))}
                    </div>
                </div>
            </div>

            {/*  */}
            <h6 className="text-white font-semibold text-center mt-10">© Copyright Noor Home Care 2024.</h6>
        </footer>
    );
}

export default FooterSection;