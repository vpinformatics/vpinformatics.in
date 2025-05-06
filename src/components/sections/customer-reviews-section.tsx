import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react"; // Using Star for ratings

// Placeholder data - Replace with dynamic fetching later
const reviews = [
  { id: '1', name: 'Client A Inc.', review: 'VP Informatics delivered an exceptional product on time and within budget. Their team is highly skilled and professional.', rating: 5, avatarFallback: 'CA', avatarUrl: 'https://picsum.photos/100/100?random=9' },
  { id: '2', name: 'Startup B Solutions', review: 'Working with VP Informatics was a great experience. They understood our requirements perfectly and provided valuable insights.', rating: 5, avatarFallback: 'SB', avatarUrl: 'https://picsum.photos/100/100?random=10' },
  { id: '3', name: 'Enterprise C Corp.', review: 'Their expertise in .NET and SQL Server was crucial for our project\'s success. Highly recommended.', rating: 4, avatarFallback: 'EC', avatarUrl: 'https://picsum.photos/100/100?random=11' },
];

const CustomerReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Building trust through successful collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4 border">
                     {review.avatarUrl && <AvatarImage src={review.avatarUrl} alt={review.name} data-ai-hint="company logo person"/>}
                    <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground text-sm italic border-l-4 border-accent pl-4">
                  "{review.review}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Optional: Link to a full testimonials page */}
        {/* <div className="text-center mt-12">
          <Button variant="outline">
            <Link href="/testimonials">More Testimonials</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
