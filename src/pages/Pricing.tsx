import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { CheckCircle, ArrowRight, Sprout, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const farmerPlans = [
  {
    name: "Free",
    price: "₦0",
    period: "/month",
    description: "Get started with basic farm management",
    features: [
      "Basic farm dashboard",
      "Inventory tracking",
      "Monthly reports",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "₦5,000",
    period: "/month",
    description: "Full access to investor network",
    features: [
      "Everything in Free",
      "Verification badge",
      "Investor visibility",
      "Advanced analytics",
      "Priority support",
      "Loan application ready",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

const investorPlans = [
  {
    name: "Individual",
    price: "Free",
    period: "",
    description: "Perfect for individual investors",
    features: [
      "Browse verified farmers",
      "Investment tracking",
      "Basic portfolio analytics",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Institution",
    price: "Custom",
    period: "",
    description: "For organizations and institutions",
    features: [
      "Everything in Individual",
      "Bulk investment tools",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
      "Priority deal flow",
    ],
    cta: "Contact Sales",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Choose the plan that works for you. No hidden fees, no surprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Farmer Pricing */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm text-accent mb-4">
              <Sprout className="w-4 h-4" />
              <span>For Farmers</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Farmer Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {farmerPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className={cn(
                  "h-full relative",
                  plan.popular && "border-accent"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-agronet-black text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/auth/register">{plan.cta}</Link>
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm text-accent mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>For Investors</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Investor Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {investorPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className={cn(
                  "h-full relative",
                  plan.popular && "border-accent"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-agronet-black text-xs font-semibold rounded-full">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/auth/register">{plan.cta}</Link>
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our help center or contact our team for assistance.
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/help">
              Visit Help Center
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
