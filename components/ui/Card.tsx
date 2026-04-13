import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { MotionCardWrapper } from "./MotionCardWrapper";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
}

export function Card({ title, children, className = "", icon: Icon, imageSrc, imageAlt }: CardProps) {
  const headerClassName = [
    "card-header",
    !title && Icon ? "card-header-icon-only" : ""
  ].filter(Boolean).join(" ");

  return (
    <MotionCardWrapper className={`card ${className}`}>
      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={imageAlt || title || "Card image"} loading="lazy" />
        </div>
      )}
      {(title || Icon) && (
        <div className={headerClassName}>
          {Icon && (
            <span className="card-icon-badge">
              <Icon size={20} color="var(--accent)" strokeWidth={2} />
            </span>
          )}
          {title && (
            <h3>{title}</h3>
          )}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </MotionCardWrapper>
  );
}
