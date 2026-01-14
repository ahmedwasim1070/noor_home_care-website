// Imports
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useGlobalProvider } from "@/providers/GlobalProvider";

//
function HeaderSection() {
  const { primaryNav } = useGlobalProvider();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="min-w-full sticky z-50 top-0 bg-background px-8 py-4 shadow-sm">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center gap-x-4 cursor-pointer group"
        >
          <Image
            className="group-hover:opacity-60 transition-opacity"
            src={"logo.svg"}
            width={65}
            height={50}
            alt="Noor Home Care"
          />
          <p className="text-primary font-black text-2xl hidden sm:block transition-colors group-hover:text-secondary">
            Noor Home Care
          </p>
        </Link>

        <nav className="hidden sm:flex">
          <ul className="flex flex-row list-none gap-x-8">
            {primaryNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={`font-semibold text-lg transition-colors hover:text-secondary ${
                    item.isActive ? "text-secondary" : "text-primary"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-primary p-1"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-background border-t border-gray-100 shadow-lg sm:hidden flex flex-col p-4 animate-in slide-in-from-top-5 fade-in duration-200">
          <ul className="flex flex-col gap-y-4">
            {primaryNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-lg block py-2 transition-colors hover:text-secondary ${
                    item.isActive ? "text-secondary" : "text-primary"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default HeaderSection;
