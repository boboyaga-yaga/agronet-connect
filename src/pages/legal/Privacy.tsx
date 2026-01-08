import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: January 8, 2026</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <p>We collect information you provide directly to us, such as when you create an account, complete your profile, or contact us for support. This includes:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Bank verification number (BVN) for identity verification</li>
                    <li>Business registration documents (CAC)</li>
                    <li>Farm location data and GPS coordinates</li>
                    <li>Financial transaction history</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Verify farmer identities and farm operations</li>
                    <li>Process investments and transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                  <p>We do not sell your personal information. We may share information with:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Service providers who assist in our operations</li>
                    <li>Financial institutions for payment processing</li>
                    <li>Law enforcement when required by law</li>
                    <li>Investors (limited farm profile information only)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                  <p>We implement appropriate security measures to protect your personal information, including encryption, secure servers, and regular security audits. All data is encrypted using AES-256 encryption standards.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                  <p>If you have questions about this Privacy Policy, please contact us at privacy@agronet.com or visit our Help Center.</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
