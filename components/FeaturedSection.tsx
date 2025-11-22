// Imports
import Image from "next/image";
import { Utensils, ShoppingBag, Pill, Heart, } from 'lucide-react';

// 
function FeaturedSection() {
    // 
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

    return (
        <section aria-label="Features and specialization of our Home Care">
            {/*  */}
            <div className="max-w-7xl mx-auto px-6">
                {/*  */}
                <div className="shadow-2xl rounded-lg border border-primary/20 overflow-hidden flex flex-col lg:flex-row">

                    {/*  */}
                    <div className="w-full lg:w-[50%] relative">
                        {/*  */}
                        <Image className="min-h-[500px] h-full object-cover" src={'/images/primary.webp'} width={1920} height={1080} alt="" />

                        {/*  */}
                        <div className="absolute inset-0 bg-black/20 p-4 sm:p-8 flex justify-center items-center ">
                            <div className="backdrop-blur-xl rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6 min-w-full text-center">
                                {/*  */}
                                <h2 className="font-bold text-2xl sm:text-3xl text-white">Our Features</h2>

                                {/*  */}
                                <article className="text-white">
                                    <div className="space-y-4 sm:space-y-6 text-left">
                                        <div className="flex items-start space-x-4">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-bold text-white" >Local Coverage</h4>
                                                <p className="text-sm sm:text-base text-gray-50">Serving Kingston upon Hull and surrounding areas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-bold text-white">Flexible Care</h4>
                                                <p className="text-sm sm:text-base text-gray-50">Personalized plans tailored to your schedule and needs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-bold text-white" >Family Welcome</h4>
                                                <p className="text-sm sm:text-base text-gray-50">Your loved ones are always encouraged to visit</p>
                                            </div>
                                        </div>
                                    </div>

                                </article>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="w-full lg:w-[50%] bg-linear-to-br from-primary/95 via-primary/90 to-primary/85 p-4">
                        {/*  */}

                        <h3 className="text-center text-white font-bold text-2xl sm:text-3xl my-4">We Specalize In</h3>
                        {/*  */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {specialization.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-white flex flex-col items-center justify-center rounded-lg p-4 text-center">
                                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-secondary my-2" />
                                        <p className="text-lg sm:text-xl font-bold text-primary">{item.title}</p>
                                        <p className="text-sm sm:text-base text-gray-500">{item.description}</p>
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