import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Bank-Level Encryption",
    description: "All data is encrypted using AES-256 encryption, the same standard used by banks worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Multi-factor authentication and secure session management protect your account.",
  },
  {
    icon: Eye,
    title: "Privacy Protection",
    description: "Your personal and financial data is never shared without explicit consent.",
  },
  {
    icon: FileCheck,
    title: "Verified Users",
    description: "Rigorous KYC verification ensures all participants are legitimate and trustworthy.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform is hosted on enterprise-grade infrastructure with 99.9% uptime.",
  },
];

const certifications = [
  "PCI DSS Compliant",
  "NDPR Compliant",
  "ISO 27001 Standards",
  "Regular Security Audits",
];

const Security = () => {
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
              <Shield className="w-4 h-4" />
              <span>Security First</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Your Security is Our{" "}
              <span className="text-gradient">Priority</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              We employ industry-leading security measures to protect your data, 
              investments, and trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How We Protect You</h2>
            <p className="mt-4 text-muted-foreground">Multiple layers of security at every step</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications & Compliance</h2>
            <p className="mt-4 text-muted-foreground">Meeting the highest security standards</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Have Security Concerns?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Our security team is here to help. Reach out with any questions or concerns.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/help">
              Contact Security Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Security;
