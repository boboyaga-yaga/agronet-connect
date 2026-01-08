import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Agricultural Investment in Nigeria",
    excerpt: "How technology is transforming the way investors connect with farmers across Africa.",
    author: "Dr. Adaeze Okonkwo",
    date: "January 5, 2026",
    category: "Industry Insights",
    readTime: "5 min read",
  },
  {
    title: "5 Tips for First-Time Farm Investors",
    excerpt: "Essential advice for those looking to start their agricultural investment journey.",
    author: "Oluwaseun Adeleke",
    date: "January 2, 2026",
    category: "Investor Guide",
    readTime: "7 min read",
  },
  {
    title: "How Agronet Verifies Farmers",
    excerpt: "A deep dive into our rigorous verification process that builds trust.",
    author: "Fatima Abubakar",
    date: "December 28, 2025",
    category: "Platform Updates",
    readTime: "4 min read",
  },
  {
    title: "Success Story: From Small Farm to Thriving Business",
    excerpt: "How one farmer used Agronet to scale their operations and attract investment.",
    author: "Emeka Chukwu",
    date: "December 20, 2025",
    category: "Success Stories",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-accent mb-8"
            >
              <BookOpen className="w-4 h-4" />
              <span>Agronet Blog</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Insights & <span className="text-gradient">Updates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Stay informed about agricultural investment trends, platform updates, 
              and success stories from our community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full flex flex-col">
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium w-fit mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Get the latest insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
