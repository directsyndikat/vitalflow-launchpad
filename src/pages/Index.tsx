import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-abstract.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-[680px] w-full flex flex-col items-center">
        {/* Circular Profile Picture */}
        <div className="mb-4 animate-fade-in">
          <img 
            src={profileImage} 
            alt="Vitality and wellness" 
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-center text-foreground mb-2 animate-fade-in [animation-delay:100ms]">
          Boost Your Energy & Confidence
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-center text-muted-foreground mb-10 animate-fade-in [animation-delay:200ms]">
          Natural, Safe & Effective!
        </p>

        {/* CTA Buttons - Stacked Vertically */}
        <div className="w-full max-w-[600px] space-y-3 animate-fade-in [animation-delay:300ms]">
          <Button 
            size="lg" 
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            onClick={() => window.open('https://apritrun.com/clickout/24605/334954/?', '_blank')}
          >
            Buy Now
          </Button>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full h-12 text-base font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full shadow-sm hover:shadow-md transition-all duration-200"
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
