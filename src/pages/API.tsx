import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { Code, Key, Zap, Shield, ArrowRight, Terminal } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "99.9% uptime with low latency responses across Africa.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "OAuth 2.0 authentication with encrypted data transfer.",
  },
  {
    icon: Code,
    title: "RESTful",
    description: "Clean, well-documented REST API endpoints.",
  },
];

const endpoints = [
  { method: "GET", path: "/v1/farmers", description: "List verified farmers" },
  { method: "GET", path: "/v1/farmers/:id", description: "Get farmer details" },
  { method: "POST", path: "/v1/investments", description: "Create investment" },
  { method: "GET", path: "/v1/portfolio", description: "Get user portfolio" },
];

const API = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-8"
            >
              <Code className="w-4 h-4" />
              <span>Developer API</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Build with <span className="text-gradient">Agronet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Integrate agricultural investment capabilities into your applications 
              with our comprehensive API.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="lg">
                <Key className="w-5 h-5" />
                Get API Key
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/docs">View Documentation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sample Endpoints</h2>
            <p className="mt-4 text-muted-foreground">A preview of what's available</p>
          </div>

          <div className="bg-agronet-black border border-white/10 rounded-2xl p-6 font-mono">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="ml-4 text-muted-foreground text-xs">api_endpoints.sh</span>
            </div>

            <div className="space-y-3">
              {endpoints.map((endpoint) => (
                <div key={endpoint.path} className="flex items-center gap-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    endpoint.method === "GET" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="text-foreground">{endpoint.path}</span>
                  <span className="text-muted-foreground">// {endpoint.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Terminal className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Get your API key and start integrating Agronet today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/auth/register">
              Create Developer Account
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default API;
