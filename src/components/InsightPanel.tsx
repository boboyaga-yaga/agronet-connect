import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InsightPanelProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  delay?: number;
}

export const InsightPanel = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  className,
  delay = 0,
}: InsightPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "insight-panel group hover:border-accent/30 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-muted-foreground text-sm font-medium">{title}</span>
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          {value}
        </h3>
        
        {(subtitle || trendValue) && (
          <div className="flex items-center gap-2">
            {trendValue && (
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  trend === "up" && "bg-accent/10 text-accent",
                  trend === "down" && "bg-destructive/10 text-destructive",
                  trend === "neutral" && "bg-muted text-muted-foreground"
                )}
              >
                {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
              </span>
            )}
            {subtitle && (
              <span className="text-xs text-muted-foreground">{subtitle}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface InsightGridProps {
  children: React.ReactNode;
  className?: string;
}

export const InsightGrid = ({ children, className }: InsightGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {children}
    </div>
  );
};
