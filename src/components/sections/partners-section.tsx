import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react"; // Assuming partners have LinkedIn and Email

// Placeholder data - Replace with actual partner details
interface Partner {
  name: string;
  title: string;
  avatarUrl?: string; // Optional avatar image URL
  avatarFallback: string; // Initials for fallback
  bio: string;
  linkedinUrl?: string; // Optional LinkedIn profile URL
  email?: string; // Optional email
}

const partners: Partner[] = [
  {
    name: "Varnindra Panchal", // Replace with actual name
    title: "Co-Founder & Lead Developer", // Replace with actual title
    avatarUrl: "/VpProfile.jpg", // Replace with actual image or remove
    avatarFallback: "P1", // Replace with initials
    bio: "Experienced full-stack developer specializing in Angular and Node.js, passionate about building scalable and efficient web solutions. Co-founder of VP Informatics.",
    linkedinUrl: "https://linkedin.com/in/partnerone", // Replace with actual URL
    email: "vpinformatics365@gmail.com", // Replace with actual email
  },
  {
    name: "Vatsal Patel", // Replace with actual name
    title: "Co-Founder & Database Architect", // Replace with actual title
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHw24gN-e59dQ/profile-displayphoto-shrink_400_400/B4DZPZDXvRGUAg-/0/1734513360484?e=1751500800&v=beta&t=1m5eBeg0gBiSfrANNEuDqxviOza4t_XRzi7ol4LiF4I", // Replace with actual image or remove
    avatarFallback: "P2", // Replace with initials
    bio: "Expert in database design and management (.NET, MySQL, MS SQL). Focused on data integrity, performance, and creating robust backend systems. Co-founder of VP Informatics.",
    linkedinUrl: "https://www.linkedin.com/in/vatsal-patel-64a7a227a", // Replace with actual URL
    email: "vpinformatics365@gmail.com", // Replace with actual email
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet Our Partners</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            The driving force behind VP Informatics' success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <Card key={partner.name} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader className="items-center pb-4">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  {partner.avatarUrl && <AvatarImage src={partner.avatarUrl} alt={partner.name} data-ai-hint="professional headshot"/>}
                  <AvatarFallback className="text-2xl bg-muted">{partner.avatarFallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
                <p className="text-sm text-accent">{partner.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{partner.bio}</p>
                <div className="flex justify-center space-x-4">
                  {partner.linkedinUrl && (
                    <a
                      href={partner.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${partner.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                   {partner.email && (
                    <a
                      href={`mailto:${partner.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${partner.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
