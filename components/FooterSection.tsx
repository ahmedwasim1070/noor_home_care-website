// Imports
import Image from "next/image";
import Link from "next/link";
import { contactInfo, primaryNavItems, socials } from "@/config/constants";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider";

//
function FooterSection() {
  // Provider
  const { pathname } = useGlobalProvider();

  return (
    <footer className="min-w-full bg-linear-to-br from-primary/95 via-primary/90 to-primary/85 py-12 px-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-10">
        {/*  */}
        <nav className="list-none space-y-4">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <Link
                className={` underline hover:text-secondary ${pathname === item.href ? "text-secondary" : "text-white"}`}
                title={item.title}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </nav>

        {/*  */}
        <div className="text-center space-y-4">
          <p className="text-white">Looking for a career at Noor Home Care ?</p>

          <Link
            className="bg-light-secondary py-3 px-5 text-primary rounded-md text-lg font-semibold border hover:bg-secondary"
            href={"/careers"}
            aria-label="Explore careers at Noor Home Care"
          >
            Explorer Careers
          </Link>

          {/* Social Icons Container */}
          <div className="flex flex-row justify-center items-center gap-x-5 pt-6">
            {socials.map((item) => (
              <span
                key={item.platform}
                className={`p-3 rounded-full border border-white transition-colors ${item.hoverClass} cursor-pointer`}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${item.platform} - Noor Home Care UK`}
                  aria-label={`Visit our ${item.platform} page`}
                  className="text-white transition-colors duration-300 "
                >
                  {item.platformLogo}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center justify-center gap-y-3">
          <Link
            href={"/"}
            className="group flex flex-row items-center gap-x-2"
            aria-label="Return to Noor Home Care UK Homepage"
          >
            <p className="text-white font-bold text-lg group-hover:text-secondary transition-colors">
              Noor Home Care
            </p>

            <Image
              className="group-hover:opacity-60 transition-opacity"
              src={"./logo.svg"}
              width={60}
              height={45}
              alt="Noor Home Care - Business Directory and Home Care Logo"
            />
          </Link>

          {/*  */}
          <div className="text-center space-y-1">
            {contactInfo.map((info, idx) => (
              <p
                className={`${idx % 2 != 0 ? "text-light-secondary" : "text-white"}`}
                key={idx}
              >
                {info}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <p className="text-white font-semibold text-center mt-10">
        © Copyright Noor Home Care 2024.
      </p>
    </footer>
  );
}

export default FooterSection;
