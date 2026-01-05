// Imports
import Image from "next/image";
import Link from "next/link";

//
function CareersSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6"
      aria-label="Explore careers at home care"
    >
      <div className="rounded-lg border border-primary/20 shadow-2xl overflow-hidden relative">
        {/*  */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={"/images/career.webp"}
            fill
            alt=""
          />
        </div>

        {/*  */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/90 to-primary/85">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative p-6 md:p-12 lg:p-16 mb-3">
          <h2 className="font-black text-2xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Looking To Join Home Care Staff?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl">
            Are you passionate about making a positive contribution to the lives
            and wellbeing of adults?
          </p>

          {/* <p className="my-4 text-white text-lg">For Employes :</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-3">
                                Employer Support
                            </h3>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                We focus on building strong relationships and adaptable arrangements that work for everyone. Use our services as needed, with no long-term contract required.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-3">
                                Transparent Pricing
                            </h3>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                Our rates include staff taxes and liability coverage with no additional VAT, ensuring you only pay the quoted amount.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
                            <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-3">
                                Flexible Contracts
                            </h3>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                We offer competitive pricing structures for long-term partnerships and are available to discuss your staffing needs 24/7.
                            </p>
                        </div>
                    </div> */}

          <Link
            href={"/careers"}
            aria-label="Explore careers at Noor Home Care"
            className="bg-light-secondary hover:bg-secondary/90 text-primary font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Careers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;
