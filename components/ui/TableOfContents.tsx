"use client";

import { useEffect, useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

interface TOCItem {
    id: string;
    label: string;
}

interface TableOfContentsProps {
    items: TOCItem[];
    title?: string;
}

export function TableOfContents({ items, title = "On this page" }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [isFloatingOpen, setIsFloatingOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        items.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false);
            setIsFloatingOpen(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, id: string) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                setIsOpen(false);
                setIsFloatingOpen(false);
            }
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                className="toc-floating-button"
                onClick={() => setIsFloatingOpen(!isFloatingOpen)}
                aria-label="Toggle table of contents"
                aria-expanded={isFloatingOpen}
            >
                <BookOpen size={20} />
            </button>

            {/* Floating Menu Overlay */}
            {isFloatingOpen && (
                <>
                    <div
                        className="toc-floating-overlay"
                        onClick={() => setIsFloatingOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="toc-floating-menu">
                        <ul className="toc-list">
                            {items.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={(e) => handleClick(e, id)}
                                        onKeyDown={(e) => handleKeyDown(e, id)}
                                        className={activeId === id ? "toc-link-active" : ""}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}

            {/* Original TOC */}
            <nav className="toc" aria-label="Table of contents">
                {/* Mobile: Dropdown */}
                <div className="toc-mobile">
                    <button
                        className="toc-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="toc-list"
                        aria-label="Table of contents"
                    >
                        <span>Contents</span>
                        <ChevronDown className={`toc-icon ${isOpen ? "toc-icon-open" : ""}`} />
                    </button>
                    {isOpen && (
                        <ul id="toc-list" className="toc-list toc-list-mobile">
                            {items.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={(e) => handleClick(e, id)}
                                        onKeyDown={(e) => handleKeyDown(e, id)}
                                        className={activeId === id ? "toc-link-active" : ""}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Desktop: Sticky sidebar */}
                <div className="toc-desktop">
                    <ul className="toc-list">
                        {items.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => handleClick(e, id)}
                                    onKeyDown={(e) => handleKeyDown(e, id)}
                                    className={activeId === id ? "toc-link-active" : ""}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
