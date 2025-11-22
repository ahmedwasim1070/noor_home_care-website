// 
function HomeAboutSection() {
    return (
        <section aria-label="Overview of our services">
            {/*  */}
            <div className="max-w-7xl mx-auto px-6">
                <article className="rounded-2xl p-4 md:p-8 shadow-2xl border border-primary/20">
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center ">
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-2xl font-bold text-primary" >
                                With Our Home Care Service
                            </h2>
                        </div>
                        <p>
                            <strong className="font-semibold text-primary" >Noor Home Care</strong> provides professional,
                            compassionate home care services designed to help individuals live independently and comfortably in their own homes.
                            Home care means bringing quality support directly to you—whether you need assistance with daily activities,
                            personal care, companionship, or specialized support tailored to your unique needs.
                        </p>
                        <p>
                            Our services are available throughout <strong className="font-semibold text-secondary" >Kingston upon Hull, UK</strong>,
                            ensuring that families across the region have access to reliable, person-centered care when they need it most.
                        </p>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default HomeAboutSection;