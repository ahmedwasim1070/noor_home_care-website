// Imports
import Image from "next/image";
import { Heart, Home, Users, Clock, ArrowRight } from 'lucide-react';

function ServicesSection() {
    // 
    const services = [
        {
            icon: Heart,
            title: "Personalized Assistance",
            description: "From meal preparation and medication reminders to mobility support and personal hygiene, we're here to help you manage daily activities with ease.",
            image: '/images/service-01.webp',
            features: ["Meal Preparation", "Medication Reminders", "Mobility Support", "Personal Hygiene"]
        },
        {
            icon: Home,
            title: "Household Support",
            description: "Light housekeeping, errands, and meal planning to ensure your home stays a safe and welcoming environment.",
            image: '/images/service-02.webp',
            features: ["Light Housekeeping", "Running Errands", "Meal Planning", "Home Safety"]
        },
        {
            icon: Users,
            title: "Respite Care",
            description: "Temporary relief for primary caregivers, allowing them time to recharge while their loved one is well supported.",
            image: '/images/service-03.webp',
            features: ["Caregiver Relief", "Flexible Scheduling", "Professional Support", "Peace of Mind"]
        },
        {
            icon: Clock,
            title: "Flexible Care Options",
            description: "Whether you need hourly support, full-time care, or something in between, we're here to provide the right care at the right time.",
            image: '/images/service-04.webp',
            features: ["Hourly Support", "Full-Time Care", "Part-Time Options", "Customized Plans"]
        }
    ];

    return (
        <section aria-label="What we offer at our Home Care Services">
            {/*  */}
            <div className="max-w-7xl mx-auto px-6">
                {/*  */}
                <div className="shadow-2xl rounded-lg border border-primary/20 bg-linear-to-br from-primary/95 via-primary/90 to-primary/85 overflow-hidden p-4 sm:p-8">
                    {/*  */}
                    <div className='min-w-full text-center text-white space-y-2'>
                        <h2 className='text-3xl sm:text-4xl font-black'>What We Offer</h2>
                        <p className="text-base sm:text-lg text-gray-200 mx-auto leading-relaxed font-light">
                            Our services are designed to provide the <span className="font-semibold text-white">highest level of comfort and support</span>, tailored to your unique needs
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 p-1 sm:p-8'>
                        {services.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div className='bg-white/90 backdrop-blur-xl rounded-xl overflow-hidden' key={idx}>
                                    <div className='max-h-[300px] relative'>
                                        {/*  */}
                                        <Image className="w-full md:min-w-[250px] min-h-[250px]" src={item.image} width={400} height={300} alt={`${item.title} illustration`} />

                                        {/*  */}
                                        <div className="absolute inset-0 bg-linear-to-b from-white/30 to-black/70">
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <div className="absolute right-3 top-3 p-2 sm:p-3 bg-secondary rounded-xl">
                                                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-8">
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                                            {item.description}
                                        </p>

                                        {/* Features Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                                            {item.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2 text-gray-600"
                                                >
                                                    <ArrowRight className="w-5 h-5 mt-0.5 text-secondary" />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection