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

        // Validate required fields
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

        // If there are errors, don't submit
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Submit the form
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

    return (
        <form className="card intake-form" onSubmit={handleSubmit} noValidate>
            <fieldset>
                <legend>
                    Organization category <span className="required-indicator" aria-label="required">*</span>
                </legend>
                <div className="radio-grid">
                    <label>
                        <input
                            type="radio"
                            name="organizationType"
                            value="Alumina Producers & Refinery Operators"
                            aria-required="true"
                            aria-invalid={errors.organizationType ? "true" : "false"}
                        />
                        Alumina Producers & Refinery Operators
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="organizationType"
                            value="Government & Public-Sector Institutions"
                            aria-required="true"
                            aria-invalid={errors.organizationType ? "true" : "false"}
                        />
                        Government & Public-Sector Institutions
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="organizationType"
                            value="Strategic & Institutional Investors"
                            aria-required="true"
                            aria-invalid={errors.organizationType ? "true" : "false"}
                        />
                        Strategic & Institutional Investors
                    </label>
                </div>
                {errors.organizationType && (
                    <span className="form-error" role="alert" aria-live="assertive">
                        {errors.organizationType}
                    </span>
                )}
            </fieldset>

            <div className="form-grid">
                <label className="col-span-2">
                    Organization name <span className="required-indicator" aria-label="required">*</span>
                    <input
                        type="text"
                        name="organizationName"
                        placeholder="Full legal or operating name"
                        aria-required="true"
                        aria-invalid={errors.organizationName ? "true" : "false"}
                    />
                    {errors.organizationName && (
                        <span className="form-error" role="alert" aria-live="assertive">
                            {errors.organizationName}
                        </span>
                    )}
                </label>

                <label>
                    Contact name <span className="required-indicator" aria-label="required">*</span>
                    <input
                        type="text"
                        name="contactName"
                        placeholder="Your full name"
                        aria-required="true"
                        aria-invalid={errors.contactName ? "true" : "false"}
                    />
                    {errors.contactName && (
                        <span className="form-error" role="alert" aria-live="assertive">
                            {errors.contactName}
                        </span>
                    )}
                </label>

                <label>
                    Email address <span className="required-indicator" aria-label="required">*</span>
                    <input
                        type="email"
                        name="contactEmail"
                        placeholder="your.email@organization.com"
                        aria-required="true"
                        aria-invalid={errors.contactEmail ? "true" : "false"}
                    />
                    {errors.contactEmail && (
                        <span className="form-error" role="alert" aria-live="assertive">
                            {errors.contactEmail}
                        </span>
                    )}
                </label>

                <label className="col-span-2">
                    Project context or engagement objective <span className="required-indicator" aria-label="required">*</span>
                    <textarea
                        name="projectContext"
                        placeholder="Please describe the scope, timeline, and decision-making context for this inquiry."
                        aria-required="true"
                        aria-invalid={errors.projectContext ? "true" : "false"}
                    />
                    {errors.projectContext && (
                        <span className="form-error" role="alert" aria-live="assertive">
                            {errors.projectContext}
                        </span>
                    )}
                </label>

                <label className="col-span-2">
                    Geographic focus (optional)
                    <input
                        type="text"
                        name="geography"
                        placeholder="Country, state, or specific site"
                    />
                </label>

                <label className="col-span-2">
                    Additional context or attachments (optional)
                    <textarea
                        name="additionalInfo"
                        placeholder="Any other relevant information"
                    />
                </label>
            </div>

            <p className="form-note">
                <strong>Confidentiality:</strong> All submissions are treated as confidential and reviewed
                internally before external distribution. We do not share contact details or project
                information without explicit consent.
            </p>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
        </form>
    );
}
