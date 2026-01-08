import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  Sprout,
  Shield,
  BarChart3,
  Wallet,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Get Verified",
    description: "Complete our verification process to build trust with investors and access funding opportunities.",
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description: "Track inventory, expenses, sales, and profit/loss with our intuitive farm management tools.",
  },
  {
    icon: Wallet,
    title: "Access Funding",
    description: "Connect with verified investors ready to fund your agricultural operations.",
  },
  {
    icon: FileCheck,
    title: "Loan Ready",
    description: "Build a track record that prepares you for future bank loans and institutional funding.",
  },
];

const steps = [
  { step: "01", title: "Sign Up", description: "Create your free account as a farmer" },
  { step: "02", title: "Get Verified", description: "Submit CAC, land documents, and ID" },
  { step: "03", title: "Set Up Farm Profile", description: "Add farm details and production data" },
  { step: "04", title: "Attract Investors", description: "Get discovered by our investor network" },
];

const ForFarmers = () => {
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
              <Sprout className="w-4 h-4" />
              <span>For Farmers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Grow Your Farm with{" "}
              <span className="text-gradient">Verified Funding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Join thousands of verified farmers accessing investments, managing operations, 
              and building a sustainable agricultural business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/auth/register">
                  Register as Farmer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Join Agronet?</h2>
            <p className="mt-4 text-muted-foreground">Tools and funding to transform your farming operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-accent/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 1,200+ verified farmers already growing with Agronet
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/auth/register">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForFarmers;
