import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = {
  title: "Process"
};

export default function ProcessPage() {
  return <PageFrame title="Process" />;
}
