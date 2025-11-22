// Imports
import { Heart } from 'lucide-react';

// 
function WelcomeSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-6">
            {/*  */}
            <article className="text-center">
                <div className="inline-block my-2">
                    <Heart aria-hidden="true" className="w-16 h-16 mx-auto text-secondary animate-pulse" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary" >
                    Welcome to Noor Home Care
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    Professional Home Care Services in Kingston upon Hull, UK
                </p>
            </article>

        </section>
    )
}

export default WelcomeSection