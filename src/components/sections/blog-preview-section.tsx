import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder data - Replace with dynamic fetching later
const blogPosts = [
  { id: '1', title: 'The Power of Angular for Modern Web Apps', excerpt: 'Discover why Angular remains a top choice for building complex, high-performance applications.', imageUrl: 'https://picsum.photos/600/400?random=6', date: '2024-07-15', dataAiHint: 'code computer screen' },
  { id: '2', title: 'Scaling Your Backend with Node.js', excerpt: 'Explore strategies and best practices for building scalable and efficient Node.js backends.', imageUrl: 'https://picsum.photos/600/400?random=7', date: '2024-07-10', dataAiHint: 'server room network' },
  { id: '3', title: 'Choosing Between MySQL and MS SQL', excerpt: 'A comparative guide to help you select the right database for your .NET project.', imageUrl: 'https://picsum.photos/600/400?random=8', date: '2024-07-05', dataAiHint: 'database diagram connection' },
];

const BlogPreviewSection = () => {
  return (
    <section id="blog-preview" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Latest Insights</h2>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80">
              Stay updated with our thoughts on technology and development.
            </p>
          </div>
          <Button variant="outline" asChild className="flex-shrink-0">
            <Link href="/blog">View All Posts <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in">
             <CardHeader className="p-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.dataAiHint}
                />
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <CardTitle className="text-xl mb-2 leading-snug">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto text-accent">
                  <Link href={`/blog/${post.id}`}>Read More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
