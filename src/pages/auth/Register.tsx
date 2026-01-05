import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Mail, Lock, User, ArrowRight, Sprout, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type UserRole = "farmer" | "investor";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("investor");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: fullName,
          },
        },
      });

      if (authError) {
        if (authError.message.includes("already registered")) {
          toast.error("This email is already registered. Please sign in instead.");
        } else {
          toast.error(authError.message);
        }
        return;
      }

      if (authData.user) {
        // Insert the user role
        const { error: roleError } = await supabase.from("user_roles").insert({
          user_id: authData.user.id,
          role: role,
        });

        if (roleError) {
          console.error("Error setting role:", roleError);
          toast.error("Account created but failed to set role. Please contact support.");
        } else {
          toast.success("Account created successfully!");
          // Navigate based on role
          if (role === "farmer") {
            navigate("/dashboard/farmer");
          } else {
            navigate("/dashboard/investor");
          }
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="p-2 rounded-xl bg-primary/10">
              <Leaf className="w-6 h-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Agronet</span>
              <span className="text-[10px] text-muted-foreground -mt-1">by Polaruma</span>
            </div>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Create account</h1>
            <p className="mt-2 text-muted-foreground">
              Join Agronet and start your journey
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setRole("farmer")}
              className={cn(
                "p-4 rounded-xl border-2 transition-all duration-300 text-left",
                role === "farmer"
                  ? "border-accent bg-accent/10"
                  : "border-border bg-card hover:border-muted-foreground/50"
              )}
            >
              <Sprout className={cn(
                "w-6 h-6 mb-2",
                role === "farmer" ? "text-accent" : "text-muted-foreground"
              )} />
              <div className={cn(
                "font-semibold",
                role === "farmer" ? "text-accent" : "text-foreground"
              )}>
                I'm a Farmer
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Manage farm & get investments
              </div>
            </button>

            <button
              type="button"
              onClick={() => setRole("investor")}
              className={cn(
                "p-4 rounded-xl border-2 transition-all duration-300 text-left",
                role === "investor"
                  ? "border-accent bg-accent/10"
                  : "border-border bg-card hover:border-muted-foreground/50"
              )}
            >
              <TrendingUp className={cn(
                "w-6 h-6 mb-2",
                role === "investor" ? "text-accent" : "text-muted-foreground"
              )} />
              <div className={cn(
                "font-semibold",
                role === "investor" ? "text-accent" : "text-foreground"
              )}>
                I'm an Investor
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Invest in verified farms
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 h-12 bg-card border-border focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-card border-border focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-card border-border focus:border-accent"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : `Sign up as ${role === "farmer" ? "Farmer" : "Investor"}`}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground text-center">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
          </p>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-accent hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="relative z-10 max-w-md text-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex p-6 rounded-3xl bg-primary/10 border border-primary/20 mb-8">
              {role === "farmer" ? (
                <Sprout className="w-16 h-16 text-accent" />
              ) : (
                <TrendingUp className="w-16 h-16 text-accent" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {role === "farmer" 
                ? "Empower Your Farm" 
                : "Smart Agricultural Investing"
              }
            </h2>
            <p className="text-muted-foreground">
              {role === "farmer"
                ? "Get verified, access investments, and manage your farm operations with powerful tools designed for African agriculture."
                : "Connect with verified farmers, track investments transparently, and build wealth through sustainable agriculture."
              }
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
