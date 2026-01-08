import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { VerificationBadge } from "@/components/VerificationBadge";
import {
  TrendingUp,
  Shield,
  BarChart3,
  Eye,
  Wallet,
  PieChart,
  ArrowRight,
  MapPin,
  Building2,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Farmers Only",
    description: "Every farmer undergoes strict verification with CAC, land documents, and identity checks.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Track your investments in real-time with detailed performance analytics.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Access comprehensive farm data, yield projections, and risk assessments.",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description: "Invest safely through our integrated Paystack payment gateway.",
  },
];

const featuredInvestors = [
  {
    name: "Mountain Top University",
    type: "Educational Institution",
    invested: "₦25,000,000",
    farms: 8,
    icon: GraduationCap,
  },
  {
    name: "Faratech Organizations",
    type: "Top Institutional Investor",
    invested: "₦150,000,000",
    farms: 25,
    icon: Building2,
  },
];

const verifiedFarmers = [
  {
    name: "Adamu Okonkwo",
    farm: "Rice Farm",
    location: "Kano State",
    size: "15 hectares",
    roi: "18%",
    minInvestment: "₦500,000",
  },
  {
    name: "Fatima Ibrahim",
    farm: "Maize & Cassava",
    location: "Kaduna State",
    size: "25 hectares",
    roi: "22%",
    minInvestment: "₦300,000",
  },
  {
    name: "Chukwu Emeka",
    farm: "Poultry Farm",
    location: "Enugu State",
    size: "5 hectares",
    roi: "25%",
    minInvestment: "₦200,000",
  },
];

const ForInvestors = () => {
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
              <TrendingUp className="w-4 h-4" />
              <span>For Investors</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Invest in Africa's{" "}
              <span className="text-gradient">Agricultural Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Access verified farm investments with transparent tracking, 
              strong returns, and positive impact on African agriculture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/auth/register">
                  Start Investing
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

      {/* Featured Investors */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Top Investors</h2>
            <p className="mt-4 text-muted-foreground">Trusted institutions investing through Agronet</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredInvestors.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <investor.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{investor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{investor.type}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-accent">{investor.invested}</div>
                          <div className="text-xs text-muted-foreground">Total Invested</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{investor.farms}</div>
                          <div className="text-xs text-muted-foreground">Farms Funded</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Invest with Agronet?</h2>
            <p className="mt-4 text-muted-foreground">Transparency, security, and strong returns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.1}>
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Farmers */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Farms</h2>
            <p className="mt-4 text-muted-foreground">Browse verified investment opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verifiedFarmers.map((farmer, index) => (
              <motion.div
                key={farmer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{farmer.name}</h3>
                      <p className="text-sm text-muted-foreground">{farmer.farm}</p>
                    </div>
                    <VerificationBadge status="verified" size="sm" showLabel={false} />
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {farmer.location}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Farm Size</span>
                      <span className="text-foreground font-medium">{farmer.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expected ROI</span>
                      <span className="text-accent font-semibold">{farmer.roi}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min. Investment</span>
                      <span className="text-foreground font-medium">{farmer.minInvestment}</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full" size="sm" asChild>
                    <Link to="/auth/register">Invest Now</Link>
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Start Growing Your Wealth
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 15,000+ investors earning returns from verified African farms
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/auth/register">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForInvestors;
