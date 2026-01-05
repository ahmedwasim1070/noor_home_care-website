// Imports
import { Heart } from "lucide-react";

// Types
type WelcomeVariant = "home" | "careers";

//
interface WelcomeSectionProps {
  variant?: WelcomeVariant;
}

function WelcomeSection({ variant = "home" }: WelcomeSectionProps) {
  // Content Configuration
  const content = {
    home: {
      title: "Welcome to Noor Home Care",
      subtitle: "Professional Home Care Services in Kingston upon Hull, UK",
    },
    careers: {
      title: "Join Our Compassionate Team",
      subtitle:
        "Rewarding Career Opportunities for Carers in Kingston upon Hull, UK",
    },
  };

  const currentContent = content[variant];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-6">
      <article className="text-center">
        {/* Icon */}
        <div className="inline-block my-2">
          <Heart
            aria-hidden="true"
            className="w-16 h-16 mx-auto text-secondary animate-pulse"
          />
        </div>

        {/* Dynamic Heading */}
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">
          {currentContent.title}
        </h2>

        {/* Dynamic Sub-heading */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          {currentContent.subtitle}
        </p>
      </article>
    </section>
  );
}

export default WelcomeSection;
