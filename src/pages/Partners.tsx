import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  Handshake,
  Building2,
  GraduationCap,
  Landmark,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Institutional Investors",
    description: "Partner with us to access vetted agricultural investment opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Collaborate on agricultural research and student programs.",
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description: "Integrate with our platform for agricultural lending solutions.",
  },
  {
    icon: Shield,
    title: "Insurance Providers",
    description: "Offer agricultural insurance to our farmer and investor network.",
  },
];

const currentPartners = [
  {
    name: "Mountain Top University",
    type: "Educational Partner",
    description: "Strategic partnership supporting agricultural education and research initiatives.",
    icon: GraduationCap,
  },
  {
    name: "Faratech Organizations",
    type: "Strategic Investor",
    description: "Leading investment firm committed to transforming African agriculture.",
    icon: Building2,
  },
];

const benefits = [
  "Access to verified farmers and investors",
  "Co-branded marketing opportunities",
  "Revenue sharing programs",
  "API integration support",
  "Dedicated partnership manager",
  "Priority support and onboarding",
];

const Partners = () => {
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
              <Handshake className="w-4 h-4" />
              <span>Partnerships</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Partner with <span className="text-gradient">Agronet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Join our ecosystem of partners working together to transform 
              African agriculture.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Partnership Opportunities</h2>
            <p className="mt-4 text-muted-foreground">Find the right partnership model for your organization</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, index) => (
              <GlassCard key={type.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <type.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Partners</h2>
            <p className="mt-4 text-muted-foreground">Trusted organizations working with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <partner.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
                      <p className="text-sm text-accent mb-3">{partner.type}</p>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Partnership Benefits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access exclusive benefits when you partner with Agronet.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 text-center">
              <Handshake className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Become a Partner</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to transform African agriculture.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/help">
                  Contact Partnerships
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
