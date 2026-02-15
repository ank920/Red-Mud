"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    id: string;
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function AccordionItem({ id, title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentId = `accordion-content-${id}`;
    const buttonId = `accordion-button-${id}`;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="accordion-item">
            <h3>
                <button
                    id={buttonId}
                    className="accordion-button"
                    onClick={handleToggle}
                    onKeyDown={handleKeyDown}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                >
                    <span className="accordion-title">{title}</span>
                    <ChevronDown
                        className={`accordion-icon ${isOpen ? "accordion-icon-open" : ""}`}
                        aria-hidden="true"
                    />
                </button>
            </h3>
            <div
                id={contentId}
                className={`accordion-content ${isOpen ? "accordion-content-open" : ""}`}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
            >
                <div className="accordion-body">{children}</div>
            </div>
        </div>
    );
}

interface AccordionProps {
    children: React.ReactNode;
    className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
    return <div className={`accordion ${className}`}>{children}</div>;
}
