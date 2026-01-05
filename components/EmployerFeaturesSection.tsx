//

function EmployerFeaturesSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-12"
      aria-label="Employer staffing features"
    >
      <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Decorative Background Elements (Themed Blobs) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-8 md:p-12 lg:p-16">
          {/* Headings */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-black text-2xl md:text-4xl text-white mb-4">
              Staffing Solutions for Employers
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              We provide reliable, professional care staff tailored to your
              organization's specific requirements.
            </p>
          </div>

          {/* Grid Content (Previously Commented) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Employer Support */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-secondary/50 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-1 bg-secondary mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Employer Support
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                We focus on building strong relationships and adaptable
                arrangements that work for everyone. Use our services as needed,
                with no long-term contract required.
              </p>
            </div>

            {/* Feature 2: Transparent Pricing */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-secondary/50 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-1 bg-secondary mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Transparent Pricing
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Our rates include staff taxes and liability coverage with no
                additional VAT, ensuring you only pay the quoted amount.
              </p>
            </div>

            {/* Feature 3: Flexible Contracts */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-secondary/50 hover:bg-white/15 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="w-12 h-1 bg-secondary mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Flexible Contracts
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                We offer competitive pricing structures for long-term
                partnerships and are available to discuss your staffing needs
                24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployerFeaturesSection;
