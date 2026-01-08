import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { Newspaper, Download, Mail, Calendar, ArrowRight } from "lucide-react";

const pressReleases = [
  {
    title: "Agronet Raises ₦500M in Series A Funding",
    date: "January 3, 2026",
    excerpt: "The agricultural investment platform secures funding to expand across West Africa.",
  },
  {
    title: "Partnership with Mountain Top University Announced",
    date: "December 15, 2025",
    excerpt: "Strategic partnership to support agricultural education and research.",
  },
  {
    title: "Agronet Reaches 1,000 Verified Farmers Milestone",
    date: "November 20, 2025",
    excerpt: "Platform celebrates major milestone in farmer verification program.",
  },
  {
    title: "Faratech Organizations Joins as Institutional Investor",
    date: "October 5, 2025",
    excerpt: "Leading investment firm commits ₦150M to agricultural investments via Agronet.",
  },
];

const mediaKit = [
  { name: "Brand Guidelines", format: "PDF", size: "2.4 MB" },
  { name: "Logo Pack", format: "ZIP", size: "5.1 MB" },
  { name: "Executive Bios", format: "PDF", size: "1.2 MB" },
  { name: "Fact Sheet", format: "PDF", size: "0.8 MB" },
];

const Press = () => {
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
              <Newspaper className="w-4 h-4" />
              <span>Press & Media</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Agronet in the <span className="text-gradient">News</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Latest press releases, media resources, and contact information for journalists.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Press Releases</h2>
            <p className="mt-4 text-muted-foreground">Latest announcements from Agronet</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {release.date}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{release.title}</h3>
                  <p className="text-muted-foreground">{release.excerpt}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Media Kit</h2>
            <p className="mt-4 text-muted-foreground">Download brand assets and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="text-center">
                  <Download className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.format} • {item.size}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            For press inquiries, please contact our communications team:
          </p>
          <p className="text-accent font-semibold mb-10">press@agronet.com</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/help">
              Contact Press Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Press;
