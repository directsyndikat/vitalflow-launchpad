import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-abstract.png";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: 'var(--gradient-bg)' }}>
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Circular Profile Picture */}
        <div className="mb-6 animate-fade-in">
          <img 
            src={profileImage} 
            alt="Vitality and wellness" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3 leading-tight animate-fade-in [animation-delay:100ms]">
          Boost Your Energy & Confidence
        </h1>

        {/* Subtitle */}
        <p className="text-base text-center text-foreground/80 mb-8 animate-fade-in [animation-delay:200ms]">
          Natural, Safe & Effective!
        </p>

        {/* CTA Buttons - Stacked Vertically */}
        <div className="w-full space-y-4 animate-fade-in [animation-delay:300ms]">
          <Button 
            size="lg" 
            className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-cta hover:shadow-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2 border-primary/20"
            onClick={() => window.open('https://apritrun.com/clickout/24605/334954/?', '_blank')}
          >
            Buy Now
          </Button>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[var(--shadow-secondary)] hover:shadow-[var(--shadow-secondary-hover)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2 border-secondary/20"
            onClick={() => window.open('https://apritrun.com/clickout/24606/334955/?', '_blank')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
