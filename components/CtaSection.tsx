// Imports
import { Phone } from 'lucide-react';
// 
function CtaSection() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-block bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-primary/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-primary" >
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        Contact us today to learn more about our home care services
                    </p>
                    <a
                        href="tel:+447880283423"
                        aria-label="Call Noor Home Care at 07880 283423"
                        className="inline-flex bg-secondary items-center gap-2 sm:gap-3 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        Call 07880-283423
                    </a>
                </div>
            </div>
        </section>
    )
}
export default CtaSection