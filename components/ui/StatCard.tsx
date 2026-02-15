import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    value: string;
    label: string;
    description?: string;
    icon?: LucideIcon;
    className?: string;
}

export function StatCard({ value, label, description, icon: Icon, className = "" }: StatCardProps) {
    return (
        <figure className={`stat-card ${className}`}>
            {Icon && (
                <div className="stat-icon" aria-hidden="true">
                    <Icon className="h-8 w-8" />
                </div>
            )}
            <figcaption>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
                {description && <p className="stat-description">{description}</p>}
            </figcaption>
        </figure>
    );
}
