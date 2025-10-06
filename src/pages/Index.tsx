import { Button } from "@/components/ui/button";
import productImage from "@/assets/hero-abstract.png";
import { Shield, Lock, RotateCcw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Product Image */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <img 
              src={productImage} 
              alt="Natural vitality and wellness support" 
              className="w-64 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bebas text-center text-navy mb-2 leading-none animate-fade-in [animation-delay:100ms] tracking-wide">
          MALE ENHANCEMENT
        </h1>
        <h2 className="text-5xl md:text-6xl font-bebas text-center text-magenta mb-4 leading-none animate-fade-in [animation-delay:150ms] tracking-wide">
          GET MAXIMUM
        </h2>
        <h3 className="text-4xl md:text-5xl font-bebas text-center text-navy mb-6 leading-none animate-fade-in [animation-delay:200ms] tracking-wide">
          SEXUAL BENEFITS
        </h3>

        {/* Subheadline */}
        <p className="text-lg text-center font-semibold text-navy mb-8 animate-fade-in [animation-delay:250ms] max-w-sm mx-auto">
          Natural, Safe & Effective!
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 mb-8 animate-fade-in [animation-delay:300ms]">
          <Button 
            size="lg" 
            className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-cta hover:shadow-cta-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase"
            onClick={() => window.open('https://your-affiliate-link.com', '_blank')}
          >
            Buy Now
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full h-14 text-lg font-bold border-2 border-navy/30 hover:border-primary hover:bg-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-white text-navy uppercase"
            onClick={() => window.open('https://your-prelander.com', '_blank')}
          >
            Learn More
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-col gap-3 text-center text-sm text-trust font-medium animate-fade-in [animation-delay:400ms]">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>100% Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Discreet Shipping</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
