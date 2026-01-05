import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InsightPanel, InsightGrid } from "@/components/InsightPanel";
import { GlassCard } from "@/components/GlassCard";
import { VerificationBadge } from "@/components/VerificationBadge";
import {
  Leaf,
  Package,
  TrendingUp,
  TrendingDown,
  Wallet,
  BarChart3,
  FileText,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  ArrowUpRight,
  Calendar,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard/farmer", active: true },
  { icon: Package, label: "Inventory", href: "/dashboard/farmer/inventory" },
  { icon: Wallet, label: "Finances", href: "/dashboard/farmer/finances" },
  { icon: Users, label: "Investors", href: "/dashboard/farmer/investors" },
  { icon: FileText, label: "Documents", href: "/dashboard/farmer/documents" },
  { icon: Settings, label: "Settings", href: "/dashboard/farmer/settings" },
];

const recentTransactions = [
  { id: 1, type: "sale", description: "Rice sale - 50 bags", amount: "+₦750,000", date: "Today" },
  { id: 2, type: "expense", description: "Fertilizer purchase", amount: "-₦120,000", date: "Yesterday" },
  { id: 3, type: "investment", description: "Investment received", amount: "+₦2,000,000", date: "3 days ago" },
  { id: 4, type: "sale", description: "Maize sale - 30 bags", amount: "+₦420,000", date: "5 days ago" },
];

const FarmerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <span className="text-[10px] text-muted-foreground -mt-1">Farmer Portal</span>
            </div>
          </Link>

          {/* User Info */}
          <div className="glass-card p-4 mb-6 mt-16 lg:mt-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-accent font-semibold">AO</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">Adamu Okonkwo</p>
                <p className="text-xs text-muted-foreground">Rice Farmer</p>
              </div>
            </div>
            <div className="mt-3">
              <VerificationBadge status="verified" size="sm" />
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

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground w-full transition-colors">
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
                Good morning, Adamu 👋
              </motion.h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your farm today
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="glass" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="hero">
                <Plus className="w-4 h-4" />
                Add Record
              </Button>
            </div>
          </div>

          {/* Insight Panels */}
          <InsightGrid className="mb-8">
            <InsightPanel
              title="Stock in Hand"
              value="2,450 bags"
              subtitle="Rice (Grade A)"
              icon={Package}
              trend="up"
              trendValue="12%"
              delay={0}
            />
            <InsightPanel
              title="Monthly Revenue"
              value="₦4.2M"
              subtitle="vs ₦3.7M last month"
              icon={TrendingUp}
              trend="up"
              trendValue="13.5%"
              delay={0.1}
            />
            <InsightPanel
              title="Monthly Expenses"
              value="₦1.8M"
              subtitle="On budget"
              icon={TrendingDown}
              trend="neutral"
              trendValue="2%"
              delay={0.2}
            />
            <InsightPanel
              title="Net Profit"
              value="₦2.4M"
              subtitle="75% of monthly target"
              icon={Wallet}
              trend="up"
              trendValue="18%"
              delay={0.3}
            />
          </InsightGrid>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Terminal-Style Summary */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-agronet-black border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">farm_insights.sh</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="insight-panel">
                      <div className="text-muted-foreground text-xs font-mono mb-1">CURRENT_YIELD</div>
                      <div className="text-2xl font-bold text-accent">4.2 tons/ha</div>
                      <div className="text-xs text-accent/70 mt-1">↑ Above average</div>
                    </div>
                    <div className="insight-panel">
                      <div className="text-muted-foreground text-xs font-mono mb-1">FARM_SIZE</div>
                      <div className="text-2xl font-bold text-foreground">15 hectares</div>
                      <div className="text-xs text-muted-foreground mt-1">Active cultivation</div>
                    </div>
                  </div>

                  <div className="insight-panel">
                    <div className="text-muted-foreground text-xs font-mono mb-2">INVESTMENT_STATUS</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-foreground">₦8.5M</div>
                        <div className="text-xs text-muted-foreground">Total received</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-accent">3</div>
                        <div className="text-xs text-muted-foreground">Active investors</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>Season progress</span>
                        <span className="text-accent">67%</span>
                      </div>
                    </div>
                  </div>

                  <div className="insight-panel">
                    <div className="text-muted-foreground text-xs font-mono mb-2">NEXT_HARVEST</div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-foreground">March 15, 2026</div>
                        <div className="text-xs text-muted-foreground">Estimated: 63 tons</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Transactions */}
            <GlassCard delay={0.5} className="h-fit">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Recent Activity</h3>
                <Button variant="ghost" size="sm" className="text-accent">
                  View all
                </Button>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {tx.description}
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      tx.type === "expense" ? "text-destructive" : "text-accent"
                    )}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
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

export default FarmerDashboard;
