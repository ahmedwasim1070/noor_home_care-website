// Imports
import Image from "next/image";
import Link from "next/link";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// 
function FooterSection() {
    // Providers
    // Global
    const { contactInfo, primaryNav } = useGlobalProvider();

    return (
        <footer className="min-w-full bg-linear-to-br from-primary/95 via-primary/90 to-primary/85 py-12 px-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-10">
                {/*  */}
                <nav className="list-none space-y-4">
                    {primaryNav.map((item, idx) => (
                        <li key={idx}>
                            <Link className={` underline hover:text-secondary ${item.isActive ? 'text-secondary' : 'text-white'}`} href={item.href}> {item.label}</Link>
                        </li>
                    ))}
                </nav>

                {/*  */}
                <div className="text-center space-y-4">
                    <p className="text-white">Looking for a career at Noor Home Care ?</p>

                    <Link
                        className="bg-light-secondary py-3 px-5 text-primary rounded-md text-lg font-semibold border hover:bg-secondary"
                        href={'/careers'}
                        aria-label="Explore careers at Noor Home Care"
                    >Explorer Careers</Link>
                </div>

                {/*  */}
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <Link href={'/'} className="group flex flex-row items-center gap-x-2">
                        <p className="text-white font-bold text-lg group-hover:text-secondary transition-colors">Noor Home Care</p>

                        <Image className="group-hover:opacity-60 transition-opacity" src={'./logo.svg'} width={60} height={45} alt="Noor Home Care - Business Directory and Home Care Logo" />
                    </Link>

                    {/*  */}
                    <div className="text-center space-y-1">
                        {contactInfo.map((info, idx) => (
                            <p className={`${idx % 2 != 0 ? 'text-light-secondary' : 'text-white'}`} key={idx}>{info}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/*  */}
            <p className="text-white font-semibold text-center mt-10">© Copyright Noor Home Care 2024.</p>
        </footer>
    );
}

export default FooterSection;