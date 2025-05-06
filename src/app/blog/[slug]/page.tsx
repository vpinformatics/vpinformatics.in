import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Placeholder function to get post data by slug - Replace with actual data fetching
async function getPostData(slug: string) {
   // In a real app, fetch this from a CMS or database based on the slug
   const posts = [
      { id: '1', slug: 'the-power-of-angular', title: 'The Power of Angular for Modern Web Apps', content: '<p>This is the full content for the Angular post. It discusses components, services, modules, and more. <strong>Angular</strong> provides a robust framework...</p>', imageUrl: 'https://picsum.photos/800/400?random=6', date: '2024-07-15', dataAiHint: 'code computer screen'},
      { id: '2', slug: 'scaling-nodejs-backend', title: 'Scaling Your Backend with Node.js', content: '<p>Detailed content about scaling Node.js applications. Topics include clustering, microservices, caching, and database optimization...</p>', imageUrl: 'https://picsum.photos/800/400?random=7', date: '2024-07-10', dataAiHint: 'server room network'},
      { id: '3', slug: 'mysql-vs-mssql', title: 'Choosing Between MySQL and MS SQL', content: '<p>An in-depth comparison of MySQL and MS SQL Server, covering performance, features, licensing, and use cases relevant to .NET development...</p>', imageUrl: 'https://picsum.photos/800/400?random=8', date: '2024-07-05', dataAiHint: 'database diagram connection'},
       { id: '4', slug: 'dotnet-core-best-practices', title: 'Introduction to .NET Core Best Practices', content: '<p>Full content on .NET Core best practices...</p>', imageUrl: 'https://picsum.photos/800/400?random=12', date: '2024-06-28', dataAiHint: 'coding collaboration team' },
       { id: '5', slug: 'responsive-design-tailwind', title: 'Responsive Design Principles with Tailwind CSS', content: '<p>Complete guide to responsive design using Tailwind CSS...</p>', imageUrl: 'https://picsum.photos/800/400?random=13', date: '2024-06-20', dataAiHint: 'website design responsive devices' },
   ];
   // Simulate finding the post by slug
   const post = posts.find(p => p.slug === slug || p.id === slug); // Allow fetching by ID or slug for now
   if (!post) {
     return null;
   }
   return post;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | VP Informatics Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, '') + '...', // Simple excerpt from content
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Show 404 page if post not found
  }

  return (
    <div className="container py-16 md:py-24 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
             <Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog</Link>
        </Button>

      <article className="prose prose-lg dark:prose-invert max-w-none"> {/* Using Tailwind Typography */}
        <header className="mb-8">
             {post.imageUrl && (
                <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        priority // Prioritize loading the main image
                        data-ai-hint={post.dataAiHint}
                    />
                </div>
            )}
          <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
          <p className="text-muted-foreground text-sm">{post.date}</p>
        </header>

        {/* Render HTML content safely */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

      </article>

       <div className="mt-12 pt-8 border-t">
           <Button variant="outline" asChild>
             <Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4" /> View All Posts</Link>
           </Button>
       </div>
    </div>
  );
}

// Optional: Generate static paths if you know all slugs at build time
// export async function generateStaticParams() {
//   // Fetch all slugs from your CMS or database
//   const slugs = ['the-power-of-angular', 'scaling-nodejs-backend', 'mysql-vs-mssql', ...];
//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }
