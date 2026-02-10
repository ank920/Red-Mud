import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isFilled(value: FormDataEntryValue | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const requiredFields = [
    "organizationType",
    "projectDescription",
    "intendedTimeline",
    "primaryMotivation",
    "confidentialityRequirements",
    "contactEmail",
    "organizationName"
  ];

  const missingRequired = requiredFields.some((field) => !isFilled(formData.get(field)));

  if (missingRequired) {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }

  return NextResponse.redirect(new URL("/contact?submitted=1", request.url), 303);
}
