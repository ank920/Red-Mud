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
  return (
    <MotionCardWrapper className={`card ${className}`}>
      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={imageAlt || title || "Card image"} loading="lazy" />
        </div>
      )}
      {(title || Icon) && (
        <div className="card-header pb-2 mb-2" style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid var(--line)", gap: "0.25rem" }}>
          {Icon && (
            <span className="card-icon-badge" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: "var(--accent-soft)",
              marginBottom: "0.25rem",
            }}>
              <Icon size={20} style={{ color: "var(--accent)" }} strokeWidth={2} />
            </span>
          )}
          {title && (
            <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
        {children}
      </div>
    </MotionCardWrapper>
  );
}
