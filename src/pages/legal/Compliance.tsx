import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { GlassCard } from "@/components/GlassCard";
import { Scale, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const regulations = [
  {
    name: "NDPR",
    fullName: "Nigeria Data Protection Regulation",
    description: "We comply with NDPR requirements for data protection and privacy.",
  },
  {
    name: "CBN",
    fullName: "Central Bank of Nigeria Guidelines",
    description: "Our financial operations adhere to CBN regulatory requirements.",
  },
  {
    name: "SEC",
    fullName: "Securities and Exchange Commission",
    description: "Investment activities comply with SEC regulations where applicable.",
  },
  {
    name: "AML/CFT",
    fullName: "Anti-Money Laundering",
    description: "Robust KYC and AML procedures to prevent financial crimes.",
  },
];

const Compliance = () => {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Compliance</h1>
                <p className="text-muted-foreground">Regulatory compliance and certifications</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground">
                Agronet is committed to operating with the highest standards of regulatory compliance. 
                We work closely with regulatory bodies to ensure our platform meets all applicable requirements 
                for agricultural investment and financial services in Nigeria and across Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {regulations.map((reg, index) => (
                <GlassCard key={reg.name} delay={index * 0.1}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-accent font-bold">{reg.name}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{reg.fullName}</h3>
                      <p className="text-sm text-muted-foreground">{reg.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h2>
                <p>We are dedicated to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Maintaining transparent operations</li>
                  <li>Protecting user data and privacy</li>
                  <li>Preventing financial crimes</li>
                  <li>Ensuring fair treatment of all users</li>
                  <li>Regular compliance audits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Reporting Concerns</h2>
                <p>
                  If you have concerns about compliance or wish to report suspicious activity, 
                  please contact our compliance team at compliance@agronet.com. All reports are 
                  treated confidentially.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Questions</h2>
                <p>
                  For questions about our compliance practices, please contact compliance@agronet.com 
                  or visit our Help Center.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Compliance;
