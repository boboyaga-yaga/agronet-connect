import { cn } from "@/lib/utils";
import { CheckCircle, Clock, XCircle, Shield } from "lucide-react";

type VerificationStatus = "verified" | "pending" | "rejected" | "unverified";

interface VerificationBadgeProps {
  status: VerificationStatus;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const statusConfig = {
  verified: {
    icon: CheckCircle,
    label: "Verified",
    className: "bg-accent/10 text-accent border-accent/20",
  },
  pending: {
    icon: Clock,
    label: "Pending",
    className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  },
  rejected: {
    icon: XCircle,
    label: "Rejected",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  unverified: {
    icon: Shield,
    label: "Unverified",
    className: "bg-muted text-muted-foreground border-muted",
  },
};

const sizeConfig = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

const iconSizeConfig = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export const VerificationBadge = ({
  status,
  size = "md",
  showLabel = true,
}: VerificationBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        config.className,
        sizeConfig[size]
      )}
    >
      <Icon className={iconSizeConfig[size]} />
      {showLabel && <span>{config.label}</span>}
    </div>
  );
};
