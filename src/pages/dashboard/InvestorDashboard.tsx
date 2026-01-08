import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InsightPanel, InsightGrid } from "@/components/InsightPanel";
import { GlassCard } from "@/components/GlassCard";
import { VerificationBadge } from "@/components/VerificationBadge";
import {
  Leaf,
  TrendingUp,
  Wallet,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Filter,
  MapPin,
  Sprout,
  ArrowUpRight,
  PieChart,
  Building2,
  GraduationCap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

const sidebarLinks = [
  { icon: BarChart3, label: "Overview", href: "/dashboard/investor", active: true },
  { icon: Sprout, label: "Farmers", href: "/dashboard/investor/farmers" },
  { icon: PieChart, label: "Portfolio", href: "/dashboard/investor/portfolio" },
  { icon: Wallet, label: "Transactions", href: "/dashboard/investor/transactions" },
  { icon: Settings, label: "Settings", href: "/dashboard/investor/settings" },
];

const verifiedFarmers = [
  {
    id: 1,
    name: "Adamu Okonkwo",
    farm: "Rice Farm",
    location: "Kano State",
    size: "15 hectares",
    roi: "18%",
    status: "verified" as const,
    invested: false,
    minInvestment: "₦500,000",
  },
  {
    id: 2,
    name: "Fatima Ibrahim",
    farm: "Maize & Cassava",
    location: "Kaduna State",
    size: "25 hectares",
    roi: "22%",
    status: "verified" as const,
    invested: true,
    minInvestment: "₦300,000",
  },
  {
    id: 3,
    name: "Chukwu Emeka",
    farm: "Poultry Farm",
    location: "Enugu State",
    size: "5 hectares",
    roi: "25%",
    status: "verified" as const,
    invested: true,
    minInvestment: "₦200,000",
  },
];

const featuredInvestors = [
  { name: "Mountain Top University", amount: "₦25M", icon: GraduationCap },
  { name: "Faratech Organizations", amount: "₦150M", icon: Building2 },
];

const InvestorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, profile, signOut, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth/login");
    }
  }, [user, isLoading, navigate]);

  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    }
    return "U";
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><div className="text-accent">Loading...</div></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-xl border-b border-border z-50 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10">
            <Leaf className="w-5 h-5 text-accent" />
          </div>
          <span className="font-bold text-foreground">Agronet</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transition-transform duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <Link to="/" className="hidden lg:flex items-center gap-2 mb-8">
            <div className="p-2 rounded-xl bg-primary/10">
              <Leaf className="w-6 h-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Agronet</span>
              <span className="text-[10px] text-muted-foreground -mt-1">Investor Portal</span>
            </div>
          </Link>

          {/* User Info */}
          <div className="glass-card p-4 mb-6 mt-16 lg:mt-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-semibold">{getInitials()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{profile?.full_name || "Investor"}</p>
                <p className="text-xs text-muted-foreground">Investor</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  link.active
                    ? "bg-primary/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground w-full transition-colors">
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl lg:text-3xl font-bold text-foreground"
              >
                Investment Overview 📊
              </motion.h1>
              <p className="text-muted-foreground mt-1">
                Track your portfolio and discover new opportunities
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="glass" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="hero">
                Browse Farmers
              </Button>
            </div>
          </div>

          {/* Insight Panels */}
          <InsightGrid className="mb-8">
            <InsightPanel
              title="Total Invested"
              value="₦12.5M"
              subtitle="Across 3 farms"
              icon={Wallet}
              trend="up"
              trendValue="Active"
              delay={0}
            />
            <InsightPanel
              title="Expected Returns"
              value="₦15.2M"
              subtitle="End of season"
              icon={TrendingUp}
              trend="up"
              trendValue="21.6%"
              delay={0.1}
            />
            <InsightPanel
              title="Active Investments"
              value="3"
              subtitle="2 harvesting soon"
              icon={Sprout}
              trend="neutral"
              trendValue="On track"
              delay={0.2}
            />
            <InsightPanel
              title="ROI This Year"
              value="19.4%"
              subtitle="vs 12% market avg"
              icon={BarChart3}
              trend="up"
              trendValue="+7.4%"
              delay={0.3}
            />
          </InsightGrid>

          {/* Verified Farmers Section */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-semibold text-foreground">Verified Farmers</h2>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 lg:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search farmers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-card border-border"
                  />
                </div>
                <Button variant="glass" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {verifiedFarmers.map((farmer, index) => (
                <motion.div
                  key={farmer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <GlassCard hover className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <span className="text-accent font-semibold">
                            {farmer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{farmer.name}</h3>
                          <p className="text-sm text-muted-foreground">{farmer.farm}</p>
                        </div>
                      </div>
                      <VerificationBadge status={farmer.status} size="sm" showLabel={false} />
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {farmer.location}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Farm Size</span>
                        <span className="text-foreground font-medium">{farmer.size}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Expected ROI</span>
                        <span className="text-accent font-semibold">{farmer.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Min. Investment</span>
                        <span className="text-foreground font-medium">{farmer.minInvestment}</span>
                      </div>
                    </div>

                    <Button
                      variant={farmer.invested ? "glass" : "hero"}
                      className="w-full"
                      size="sm"
                    >
                      {farmer.invested ? (
                        <>
                          View Investment
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      ) : (
                        "Invest Now"
                      )}
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portfolio Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-agronet-black border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">portfolio_overview.sh</span>
              </div>
              <Button variant="ghost" size="sm" className="text-accent">
                Detailed Report
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="insight-panel">
                <div className="text-muted-foreground text-xs font-mono mb-1">INVESTMENT_01</div>
                <div className="font-semibold text-foreground mb-1">Fatima Ibrahim - Maize</div>
                <div className="text-accent font-bold">₦5,000,000</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
              </div>

              <div className="insight-panel">
                <div className="text-muted-foreground text-xs font-mono mb-1">INVESTMENT_02</div>
                <div className="font-semibold text-foreground mb-1">Chukwu Emeka - Poultry</div>
                <div className="text-accent font-bold">₦4,500,000</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">50%</span>
                </div>
              </div>

              <div className="insight-panel">
                <div className="text-muted-foreground text-xs font-mono mb-1">INVESTMENT_03</div>
                <div className="font-semibold text-foreground mb-1">Adamu Okonkwo - Rice</div>
                <div className="text-accent font-bold">₦3,000,000</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-accent rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">33%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default InvestorDashboard;
