"use client";

import { useState, FormEvent } from "react";

interface FormErrors {
    organizationType?: string;
    organizationName?: string;
    contactName?: string;
    contactEmail?: string;
    projectContext?: string;
}

export function ContactForm() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newErrors: FormErrors = {};

        if (!formData.get("organizationType")) {
            newErrors.organizationType = "Please select an organization type";
        }
        if (!formData.get("organizationName")) {
            newErrors.organizationName = "Organization name is required";
        }
        if (!formData.get("contactName")) {
            newErrors.contactName = "Contact name is required";
        }

        const email = formData.get("contactEmail") as string;
        if (!email) {
            newErrors.contactEmail = "Email address is required";
        } else if (!validateEmail(email)) {
            newErrors.contactEmail = "Please enter a valid email address";
        }

        if (!formData.get("projectContext")) {
            newErrors.projectContext = "Project context is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/intake", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                window.location.href = "/contact?submitted=1";
            } else {
                window.location.href = "/contact?error=1";
            }
        } catch (error) {
            window.location.href = "/contact?error=1";
        }
    };

    const fieldStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#374151',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.75rem 1rem',
        border: '1.5px solid #e2e8f0',
        borderRadius: '10px',
        fontSize: '0.95rem',
        color: '#0f172a',
        background: '#fff',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    };

    const errorStyle: React.CSSProperties = {
        fontSize: '0.8rem',
        color: '#dc2626',
        fontWeight: 500,
    };

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            style={{
                background: '#fff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
            }}
        >
            {/* Organization Type */}
            <div style={fieldStyle}>
                <span style={labelStyle}>
                    Organization Category <span style={{ color: '#dc2626' }}>*</span>
                </span>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    marginTop: '0.25rem',
                }}>
                    {[
                        { value: "Alumina Producers & Refinery Operators", label: "Alumina Producers & Refinery Operators" },
                        { value: "Government & Public-Sector Institutions", label: "Government & Public-Sector Institutions" },
                        { value: "Strategic & Institutional Investors", label: "Strategic & Institutional Investors" },
                    ].map((opt) => (
                        <label key={opt.value} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            padding: '0.75rem 1rem',
                            border: '1.5px solid #e2e8f0',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: '#374151',
                            background: '#fafafa',
                            transition: 'border-color 0.2s, background 0.2s',
                        }}>
                            <input
                                type="radio"
                                name="organizationType"
                                value={opt.value}
                                required
                                style={{ accentColor: '#9a1f1f', width: '16px', height: '16px', flexShrink: 0 }}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
                {errors.organizationType && (
                    <span style={errorStyle} role="alert">{errors.organizationType}</span>
                )}
            </div>

            {/* Two-col fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>
                        Organization Name <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="organizationName"
                        placeholder="Full legal or operating name"
                        aria-required="true"
                        style={inputStyle}
                    />
                    {errors.organizationName && (
                        <span style={errorStyle} role="alert">{errors.organizationName}</span>
                    )}
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle}>
                        Contact Name <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="contactName"
                        placeholder="Your full name"
                        aria-required="true"
                        style={inputStyle}
                    />
                    {errors.contactName && (
                        <span style={errorStyle} role="alert">{errors.contactName}</span>
                    )}
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle}>
                        Email Address <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                        type="email"
                        name="contactEmail"
                        placeholder="your.email@organization.com"
                        aria-required="true"
                        style={inputStyle}
                    />
                    {errors.contactEmail && (
                        <span style={errorStyle} role="alert">{errors.contactEmail}</span>
                    )}
                </div>

                <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>
                        Project Context or Engagement Objective <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <textarea
                        name="projectContext"
                        placeholder="Please describe the scope, timeline, and decision-making context for this inquiry."
                        aria-required="true"
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    />
                    {errors.projectContext && (
                        <span style={errorStyle} role="alert">{errors.projectContext}</span>
                    )}
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle}>Geographic Focus <span style={{ color: '#94a3b8', fontWeight: 400, textTransform: 'none', fontSize: '0.75rem' }}>(optional)</span></label>
                    <input
                        type="text"
                        name="geography"
                        placeholder="Country, state, or specific site"
                        style={inputStyle}
                    />
                </div>

                <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Additional Context <span style={{ color: '#94a3b8', fontWeight: 400, textTransform: 'none', fontSize: '0.75rem' }}>(optional)</span></label>
                    <textarea
                        name="additionalInfo"
                        placeholder="Any other relevant information"
                        rows={3}
                        style={{ ...inputStyle, resize: 'vertical' }}
                    />
                </div>
            </div>

            {/* Confidentiality note */}
            <p style={{
                fontSize: '0.85rem',
                color: '#64748b',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1rem 1.25rem',
                margin: 0,
                lineHeight: 1.6,
            }}>
                <strong style={{ color: '#374151' }}>Confidentiality:</strong> All submissions are treated as confidential and reviewed
                internally before external distribution. We do not share contact details or project
                information without explicit consent.
            </p>

            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    padding: '0.875rem 2.5rem',
                    background: isSubmitting ? '#94a3b8' : '#9a1f1f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.02em',
                    alignSelf: 'flex-start',
                    transition: 'background 0.2s, transform 0.15s',
                }}
            >
                {isSubmitting ? "Submitting..." : "Submit Inquiry →"}
            </button>
        </form>
    );
}
