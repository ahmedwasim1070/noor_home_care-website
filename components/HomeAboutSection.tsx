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
                            At <strong className="font-semibold text-primary">Noor Home Care</strong>,
                            we specialize in providing dedicated support for the elderly and seniors exactly
                            where they feel most comfortable—their own home. We understand that every individual is unique,
                            which is why our services are fully flexible and tailored to meet your specific care needs and specialized requirements.
                        </p>
                        <p>
                            As a trusted local business, we are fully operational throughout <strong className="font-semibold text-secondary">Kingston upon Hull, UK</strong>,
                            ensuring that reliable, compassionate care is always accessible to our community.
                        </p>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default HomeAboutSection;