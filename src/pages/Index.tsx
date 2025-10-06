import { Button } from "@/components/ui/button";
import productImage from "@/assets/vydox-product.png";
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
              alt="Vydox Male Virility Solution" 
              className="w-64 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 leading-tight animate-fade-in [animation-delay:100ms]">
          Boost Your Energy & Confidence
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-center text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms] max-w-sm mx-auto">
          Natuurlijke ondersteuning voor vitaliteit en prestaties. Klinisch bewezen L-Arginine formule.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 mb-8 animate-fade-in [animation-delay:300ms]">
          <Button 
            size="lg" 
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-cta hover:shadow-cta-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.open('https://your-affiliate-link.com', '_blank')}
          >
            Buy Now
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full h-14 text-lg font-semibold border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.open('https://your-prelander.com', '_blank')}
          >
            Learn More
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-col gap-3 text-center text-sm text-trust animate-fade-in [animation-delay:400ms]">
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
