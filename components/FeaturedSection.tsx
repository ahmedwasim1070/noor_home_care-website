// Imports
import Image from "next/image";
import { Utensils, ShoppingBag, Pill, Heart, Home, Users, Clock, icons } from 'lucide-react';

// 
function FeaturedSection() {
    const specialization = [
        {
            icon: Utensils,
            title: 'Meal Preparation',
            description: "Nutritious meals prepared with care",
        },
        {
            icon: Pill,
            title: 'Medical Reminders',
            description: "Timely medication management",
        },
        {
            icon: ShoppingBag,
            title: 'Errands & Shopping',
            description: "Assistance with daily errands",
        },
        {
            icon: Heart,
            title: 'Companionship',
            description: "Friendly support and conversation",
        },
    ]
    // 
    const services = [
        {
            icon: Heart,
            title: "Personalized Assistance",
            description: "From meal preparation and medication reminders to mobility support and personal hygiene, we're here to help you manage daily activities with ease.",
            features: ["Meal Preparation", "Medication Reminders", "Mobility Support", "Personal Hygiene"]
        },
        {
            icon: Home,
            title: "Household Support",
            description: "Light housekeeping, errands, and meal planning to ensure your home stays a safe and welcoming environment.",
            features: ["Light Housekeeping", "Running Errands", "Meal Planning", "Home Safety"]
        },
        {
            icon: Users,
            title: "Respite Care",
            description: "Temporary relief for primary caregivers, allowing them time to recharge while their loved one is well supported.",
            features: ["Caregiver Relief", "Flexible Scheduling", "Professional Support", "Peace of Mind"]
        },
        {
            icon: Clock,
            title: "Flexible Care Options",
            description: "Whether you need hourly support, full-time care, or something in between, we're here to provide the right care at the right time.",
            features: ["Hourly Support", "Full-Time Care", "Part-Time Options", "Customized Plans"]
        }
    ];

    return (
        <section>
            {/*  */}
            <div className="max-w-7xl mx-auto px-6 pb-6 md:pb-8 pt-12 md:pt-20">
                {/*  */}
                <div className="shadow-2xl rounded-lg border border-primary/20 overflow-hidden flex flex-row">
                    <div className="w-[50%] relative">
                        <Image className="h-full" src={'/images/hero.webp'} width={1920} height={1080} alt="Noor Home Care - Business Directory and Home Care Logo" />

                        <div className="absolute inset-0 bg-black/20 p-8 flex justify-center items-center ">
                            <div className="backdrop-blur-xl rounded-lg p-6 space-y-2 min-w-full text-center">
                                <h5 className="font-bold text-3xl text-white">We Specalize In  </h5>
                                <p className="text-white">Our Professional Team is specialized in  </p>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="w-[50%] bg-primary p-4">
                        <div className="grid grid-cols-2 gap-6">
                            {specialization.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-white flex flex-col items-center justify-center rounded-lg p-4 text-center">
                                        <Icon className="w-12 h-12 text-secondary my-2" />
                                        <p className="text-xl font-bold text-primary">{item.title}</p>
                                        <p className="text-gray-500">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}

export default FeaturedSection;