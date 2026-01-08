import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Cookie, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
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
                <Cookie className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Cookie Policy</h1>
                <p className="text-muted-foreground">Last updated: January 8, 2026</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
                  <p>Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
                  <ul className="list-disc pl-6 mt-4 space-y-4">
                    <li>
                      <strong className="text-foreground">Essential Cookies:</strong> Required for the platform to function properly. These cannot be disabled.
                    </li>
                    <li>
                      <strong className="text-foreground">Authentication Cookies:</strong> Keep you logged in and secure during your session.
                    </li>
                    <li>
                      <strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences.
                    </li>
                    <li>
                      <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how you use our platform to improve it.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
                  <p>We may use third-party services that set their own cookies, including:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Payment processors (Paystack)</li>
                    <li>Analytics providers</li>
                    <li>Customer support tools</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
                  <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our platform. Most browsers allow you to:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Updates to This Policy</h2>
                  <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                  <p>If you have questions about our use of cookies, please contact us at privacy@agronet.com.</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cookies;
