import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';
import { getSocialMediaProfiles } from '@/services/social-media'; // Assuming this exists

const Footer = async () => {
  const socialProfiles = await getSocialMediaProfiles(); // Fetch social profiles

  // Map platform names to Lucide icons
  const socialIcons: { [key: string]: React.ElementType } = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    // Add more platforms and icons as needed
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16 border-t">
      <div className="container px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info & Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">VP Informatics</h3>
          <p className="text-sm text-muted-foreground">
            Crafting Scalable Software Solutions.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91-9033652515, +91-9998088113</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:vpinformatics365@gmail.com" className="hover:text-accent transition-colors">
                vpinformatics365@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              <a href="http://www.vpinformatics.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                www.vpinformatics.in
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="/#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
             <li><Link href="/#partners" className="hover:text-accent transition-colors">Partners</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
             <li><Link href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Brochure</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            {socialProfiles.map((profile) => {
              const Icon = socialIcons[profile.platform];
              return Icon ? (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`Visit VP Informatics on ${profile.platform}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ) : null;
            })}
          </div>
           {/* Short Logo Placeholder */}
           <div className="flex items-center justify-center w-10 h-10 mt-4 rounded-full bg-primary text-primary-foreground font-bold text-lg">
            VP
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-4 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} VP Informatics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
