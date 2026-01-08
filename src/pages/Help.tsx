import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Search,
  FileText,
  Users,
  Wallet,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: Users, title: "Account", count: 12 },
  { icon: Wallet, title: "Payments", count: 8 },
  { icon: Shield, title: "Security", count: 6 },
  { icon: FileText, title: "Verification", count: 10 },
];

const faqs = [
  {
    question: "How do I get verified as a farmer?",
    answer: "Submit your CAC documents, land details with GPS coordinates, valid ID, and bank details (BVN). Our team typically reviews applications within 3-5 business days.",
  },
  {
    question: "What is the minimum investment amount?",
    answer: "Minimum investment amounts vary by farm, typically starting from ₦200,000. Each farm listing shows its specific minimum investment requirement.",
  },
  {
    question: "How are returns calculated and paid?",
    answer: "Returns are calculated based on harvest yields and market prices. Payouts are made at the end of each farming cycle, typically every 4-6 months.",
  },
  {
    question: "Is my investment insured?",
    answer: "We partner with agricultural insurance providers to offer optional insurance coverage on investments. Details are provided for each farm opportunity.",
  },
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
              <HelpCircle className="w-4 h-4" />
              <span>Help Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              How Can We <span className="text-gradient">Help?</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Browse by Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="text-center">
                  <category.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Still Need Help?</h2>
            <p className="mt-4 text-muted-foreground">Our support team is here for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="text-center">
              <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with our support team</p>
              <Button variant="heroOutline" size="sm">Start Chat</Button>
            </GlassCard>

            <GlassCard className="text-center">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">support@agronet.com</p>
              <Button variant="heroOutline" size="sm">Send Email</Button>
            </GlassCard>

            <GlassCard className="text-center">
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-4">+234 800 AGRONET</p>
              <Button variant="heroOutline" size="sm">Call Us</Button>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Help;
