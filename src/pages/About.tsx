import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  Leaf,
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  ArrowRight,
  Building2,
  GraduationCap,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Full visibility into investments, farm operations, and returns.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Rigorous verification processes that build confidence.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connecting farmers and investors for mutual growth.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Driving sustainable agriculture across Africa.",
  },
];

const team = [
  { name: "Bryan Jerry Bassey", role: "CEO & Founder", initials: "BJ" },
  { name: "Emmanuella", role: "CTO", initials: "EC" },
  { name: "Adanini Taiwo", role: "Head of Operations", initials: "HOO" },
  { name: "Faratech Organizations", role: "Head of Tech", initials: "FA" },
];

const partners = [
  { name: "Mountain Top University", type: "Educational Partner", icon: GraduationCap },
  { name: "Faratech Organizations", type: "Strategic Investor", icon: Building2 },
];

const About = () => {
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
              <Leaf className="w-4 h-4" />
              <span>About Agronet</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Building Africa's Agricultural{" "}
              <span className="text-gradient">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Agronet is a product of Polaruma, dedicated to transforming African agriculture 
              through technology, transparency, and trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard>
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To create a trustworthy, scalable agricultural investment ecosystem where farmers 
                gain visibility, structure, and funding, while investors gain transparency and confidence.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="p-4 rounded-xl bg-accent/10 w-fit mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become Africa's leading agricultural fintech platform, empowering millions of 
                farmers and investors to build sustainable wealth together.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Leadership Team</h2>
            <p className="mt-4 text-muted-foreground">The people driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Partners</h2>
            <p className="mt-4 text-muted-foreground">Trusted institutions working with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <GlassCard key={partner.name} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <partner.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.type}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join the Agronet Community
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Whether you're a farmer seeking investment or an investor looking for opportunities, 
            we're here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/auth/register">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/help">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
