import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Placeholder data - Replace with dynamic fetching later
const portfolioItems = [
  { id: '1', title: 'Project Alpha', description: 'A scalable web application for enterprise resource planning.', imageUrl: 'https://picsum.photos/600/400?random=1', tags: ['Angular', 'Node.js', 'MySQL'], dataAiHint: 'software dashboard' },
  { id: '2', title: 'Project Beta', description: 'Cross-platform mobile app for enhanced customer engagement.', imageUrl: 'https://picsum.photos/600/400?random=2', tags: ['.NET', 'MS SQL'], dataAiHint: 'mobile application' },
  { id: '3', title: 'Project Gamma', description: 'Real-time data processing pipeline for IoT devices.', imageUrl: 'https://picsum.photos/600/400?random=3', tags: ['Node.js', 'MySQL'], dataAiHint: 'data processing chart' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Showcasing successful projects and demonstrating our expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in">
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={item.dataAiHint}
                />
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                 <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {/* Optional: Add a link to a case study page */}
                {/* <Button variant="link" asChild>
                  <Link href={`/portfolio/${item.id}`}>View Details</Link>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Optional: Link to a full portfolio page */}
        {/* <div className="text-center mt-12">
          <Button variant="outline">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
