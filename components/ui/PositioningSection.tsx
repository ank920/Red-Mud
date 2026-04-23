import Link from "next/link";

type NavigationButton = {
    label: string;
    href: string;
    variant?: "primary" | "ghost-white";
};

type PositioningSectionProps = {
    title: string;
    description: string;
    buttons?: NavigationButton[];
    id?: string;
};

export function PositioningSection({
    title,
    description,
    buttons = [],
    id = "positioning-title"
}: PositioningSectionProps) {
    return (
        <section className="positioning-section reveal" aria-labelledby={id}>
            <div className="container">
                <div className="positioning-content">
                    <h2 id={id}>{title}</h2>
                    <p>{description}</p>
                    {buttons.length > 0 && (
                        <div className="positioning-buttons">
                            {buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className="btn btn-slide"
                                >
                                    {button.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
