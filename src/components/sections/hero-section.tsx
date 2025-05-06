import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-primary/10 to-background animate-fade-in">
       {/* Optional: Add a subtle background pattern or image */}
       {/* <Image
        src="https://picsum.photos/1920/1080?grayscale" // Replace with a relevant background if desired
        alt="Abstract background"
        layout="fill"
        objectFit="cover"
        quality={50}
        className="opacity-5 z-0"
        data-ai-hint="abstract technology background"
      /> */}
      <div className="container relative z-10 text-center px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-15xl leading-tight">
        Precision-Driven Web Development
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
        Innovative solutions engineered for long-term success.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href="/#contact">Let's get started!</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href="/#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
