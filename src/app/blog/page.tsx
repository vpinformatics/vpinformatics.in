import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Placeholder data - Replace with dynamic fetching later
const allBlogPosts = [
  { id: '1', title: 'The Power of Angular for Modern Web Apps', excerpt: 'Discover why Angular remains a top choice for building complex, high-performance applications.', imageUrl: 'https://picsum.photos/600/400?random=6', date: '2024-07-15', dataAiHint: 'code computer screen' },
  { id: '2', title: 'Scaling Your Backend with Node.js', excerpt: 'Explore strategies and best practices for building scalable and efficient Node.js backends.', imageUrl: 'https://picsum.photos/600/400?random=7', date: '2024-07-10', dataAiHint: 'server room network' },
  { id: '3', title: 'Choosing Between MySQL and MS SQL', excerpt: 'A comparative guide to help you select the right database for your .NET project.', imageUrl: 'https://picsum.photos/600/400?random=8', date: '2024-07-05', dataAiHint: 'database diagram connection' },
  { id: '4', title: 'Introduction to .NET Core Best Practices', excerpt: 'Learn about essential practices for writing clean, maintainable, and performant .NET Core code.', imageUrl: 'https://picsum.photos/600/400?random=12', date: '2024-06-28', dataAiHint: 'coding collaboration team' },
   { id: '5', title: 'Responsive Design Principles with Tailwind CSS', excerpt: 'Master the art of creating fully responsive layouts using the utility-first approach of Tailwind CSS.', imageUrl: 'https://picsum.photos/600/400?random=13', date: '2024-06-20', dataAiHint: 'website design responsive devices' },
];

export default function BlogPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Insights, tutorials, and thoughts on software development from the VP Informatics team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {allBlogPosts.map((post) => (
           <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in">
             <CardHeader className="p-0">
               <Link href={`/blog/${post.id}`} className="block">
                 <Image
                   src={post.imageUrl}
                   alt={post.title}
                   width={600}
                   height={400}
                   className="w-full h-48 object-cover"
                   data-ai-hint={post.dataAiHint}
                 />
                </Link>
             </CardHeader>
             <CardContent className="pt-6 flex-grow">
               <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
               <CardTitle className="text-xl mb-2 leading-snug">
                <Link href={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                    {post.title}
                 </Link>
               </CardTitle>
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

      {/* Optional: Add Pagination if many posts */}
    </div>
  );
}
