// Imports
import { Heart } from 'lucide-react';

// 
function AboutSection() {
    return (
        <section className="min-w-full">
            {/* Hero Welcome Section */}
            <div className="max-w-7xl mx-auto px-6 pb-6 md:pb-8 pt-12 md:pt-20 ">
                <article className="text-center">
                    <div className="inline-block my-2">
                        <Heart className="w-16 h-16 mx-auto text-secondary animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-primary" >
                        Welcome to Noor Home Care
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                        Professional Home Care Services in Kingston upon Hull, UK
                    </p>
                </article>

                <article className="rounded-2xl p-4 md:p-8 shadow-2xl border border-primary/20">
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center ">
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary" >
                                About Us
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

                {/* Key Features Grid */}
                {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                        <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#05bfdb' }} />
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0a4d68' }}>Local Coverage</h3>
                        <p className="text-gray-600">Serving Kingston upon Hull and surrounding areas</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                        <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#05bfdb' }} />
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0a4d68' }}>Flexible Care</h3>
                        <p className="text-gray-600">Personalized plans tailored to your schedule and needs</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                        <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#05bfdb' }} />
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0a4d68' }}>Family Welcome</h3>
                        <p className="text-gray-600">Your loved ones are always encouraged to visit</p>
                    </div>
                </div> */}

                {/* About Us Section */}
                {/* <article className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#0a4d68' }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        About Us
                    </h2>
                    <div className="space-y-6 text-white text-lg leading-relaxed max-w-5xl mx-auto">
                        <p>
                            At Noor Home Care, we understand the importance of feeling safe, supported, and cared for in the comfort
                            of your own home. Our mission is to provide compassionate, high-quality care that empowers individuals to
                            maintain their independence while enjoying the familiar surroundings of home.
                        </p>
                        <p>
                            We believe that everyone deserves to live with dignity and peace of mind. That's why we create personalized
                            care plans tailored to meet your unique needs, ensuring that you receive the right level of support every step
                            of the way. Whether it's assistance with daily activities or companionship to brighten your day, our dedicated
                            team is here to help.
                        </p>
                        <p>
                            Family and friends are always welcome, and we encourage the connection and joy that come from being surrounded
                            by loved ones. At Noor Home Care, we're more than caregivers—we're companions who truly care.
                        </p>
                    </div>
                </article> */}

            </div>
        </section>
    );
}

export default AboutSection;