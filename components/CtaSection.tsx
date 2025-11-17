// Imports
import { Phone } from 'lucide-react';

// 
function CtaSection() {
    return (
        <section className='pt-8 md:pt-12 pb-20'>
            <div className="text-center mt-12 ">
                <div className="inline-block bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-primary/20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0a4d68' }}>
                        Ready to Get Started?
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                        Contact us today to learn more about our home care services
                    </p>
                    <a
                        href="tel:+447880283423"
                        className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        style={{ backgroundColor: '#05bfdb' }}
                    >
                        <Phone className="w-6 h-6" />
                        Call 07880-283423
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CtaSection