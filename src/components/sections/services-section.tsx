import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Settings } from 'lucide-react'; // Generic icons

// Define service data
interface Service {
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
}

const services: Service[] = [
  {
    title: "Angular Development",
    description: "Building dynamic and responsive user interfaces with the powerful Angular framework.",
    icon: Code, // Placeholder icon, consider a more specific one if available or SVG
  },
  {
    title: "Node.js Development",
    description: "Creating fast, scalable, and efficient server-side applications using Node.js.",
    icon: Server,
  },
  {
    title: ".NET Development",
    description: "Developing robust and secure web applications and services with the versatile .NET platform.",
    icon: Settings, // Placeholder icon
  },
  {
    title: "MySQL Database Solutions",
    description: "Designing and managing reliable and performant MySQL databases for your applications.",
    icon: Database,
  },
  {
    title: "MS SQL Server Solutions",
    description: "Implementing and administering powerful MS SQL Server databases for enterprise needs.",
    icon: Database, // Can use the same icon or find a slightly different one
  },
   {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements.",
    icon: Code,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Leveraging cutting-edge technologies to build solutions that drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 flex flex-col animate-fade-in">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 <div className="p-3 rounded-full bg-primary/10 text-primary">
                   <service.icon className="w-6 h-6" />
                 </div>
                 <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
