import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hover = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card p-6",
        hover && "hover:border-accent/20 hover:shadow-[0_8px_32px_-8px_hsl(152_76%_24%_/_0.2)] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
