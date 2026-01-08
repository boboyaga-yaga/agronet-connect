import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import {
  Users,
  Briefcase,
  MapPin,
  ArrowRight,
  Heart,
  Rocket,
  Globe,
  Coffee,
} from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive coverage for you and family" },
  { icon: Rocket, title: "Growth", description: "Learning budget and career development" },
  { icon: Globe, title: "Remote Friendly", description: "Work from anywhere in Africa" },
  { icon: Coffee, title: "Work-Life Balance", description: "Flexible hours and generous PTO" },
];

const openRoles = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria (Remote)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Lagos, Nigeria (Remote)",
    type: "Full-time",
  },
  {
    title: "Agricultural Specialist",
    department: "Operations",
    location: "Kano, Nigeria",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Support",
    location: "Lagos, Nigeria (Remote)",
    type: "Full-time",
  },
];

const Careers = () => {
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
              <Users className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Build the Future of{" "}
              <span className="text-gradient">African Agriculture</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Join a passionate team working to transform how farmers and investors 
              connect across Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Join Agronet?</h2>
            <p className="mt-4 text-muted-foreground">Benefits that matter</p>
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

      {/* Open Roles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Open Positions</h2>
            <p className="mt-4 text-muted-foreground">Find your next opportunity</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <Button variant="heroOutline" size="sm">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            We're always looking for talented people. Send us your resume!
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/help">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
