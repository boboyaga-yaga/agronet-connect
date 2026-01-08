import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: January 8, 2026</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing or using Agronet's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. User Accounts</h2>
                  <p>To use our services, you must create an account and provide accurate, complete information. You are responsible for:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Farmer Verification</h2>
                  <p>Farmers must complete our verification process before accessing investment features. This includes submitting valid CAC documents, land documentation, identification, and bank details. Agronet reserves the right to reject or revoke verification status.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Investment Terms</h2>
                  <p>All investments made through Agronet carry inherent risks. By investing:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>You acknowledge agricultural investments may result in partial or total loss</li>
                    <li>Returns are not guaranteed and depend on various factors</li>
                    <li>You have conducted your own due diligence</li>
                    <li>You meet the minimum investment requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Prohibited Activities</h2>
                  <p>Users are prohibited from:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Providing false or misleading information</li>
                    <li>Engaging in fraudulent activities</li>
                    <li>Attempting to circumvent security measures</li>
                    <li>Using the platform for money laundering</li>
                    <li>Violating any applicable laws</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p>Agronet and Polaruma shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Governing Law</h2>
                  <p>These Terms shall be governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the courts of Lagos State.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact</h2>
                  <p>For questions about these Terms, please contact legal@agronet.com.</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
