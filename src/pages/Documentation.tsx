import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  BookOpen,
  Sprout,
  TrendingUp,
  Shield,
  Wallet,
  FileText,
  ArrowRight,
  Code,
} from "lucide-react";

const sections = [
  {
    icon: Sprout,
    title: "Farmer Guide",
    description: "Complete guide to registering, verification, and managing your farm on Agronet.",
    articles: ["Getting Started", "Verification Process", "Managing Inventory", "Attracting Investors"],
  },
  {
    icon: TrendingUp,
    title: "Investor Guide",
    description: "Learn how to browse farms, make investments, and track your portfolio.",
    articles: ["Finding Opportunities", "Due Diligence", "Making Investments", "Portfolio Management"],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Understand how we protect your data and investments.",
    articles: ["Account Security", "Two-Factor Authentication", "Privacy Settings", "Data Protection"],
  },
  {
    icon: Wallet,
    title: "Payments",
    description: "Everything about funding, withdrawals, and transaction management.",
    articles: ["Adding Funds", "Payment Methods", "Withdrawals", "Transaction History"],
  },
];

const Documentation = () => {
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
              <span>Documentation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Learn <span className="text-gradient">Agronet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Comprehensive guides and documentation to help you get the most out of Agronet.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <section.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {section.articles.map((article) => (
                      <li key={article}>
                        <Link
                          to="#"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                        >
                          <FileText className="w-4 h-4" />
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Docs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Code className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Developer API
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Build integrations with Agronet using our comprehensive API.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/api">
              View API Docs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documentation;
