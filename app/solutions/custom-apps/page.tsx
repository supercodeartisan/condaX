import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Custom apps" };

export default function CustomAppsPage() {
  return (
    <ServicePage
      title="Web and mobile products built for your customers."
      lede="When the product is the business — not an internal workaround — we design, build, and ship a custom app, with AI only if it serves the user."
      showPlans
      offerings={[
        { title: "Web apps", text: "Products that have to stay fast, secure, and changeable after launch." },
        { title: "Mobile", text: "Native or cross-platform when the work belongs on a phone." },
        { title: "Customer AI", text: "Assistants and personalisation on your data, with a path to a human." },
        { title: "After launch", text: "A monthly partnership if you want iteration without hiring a whole squad." },
      ]}
      stats={[
        { value: "Quoted", label: "Per product slice", text: "We do not sell a vague “app build.” We sell a scoped first release." },
        { value: "Design + eng", label: "In one conversation", text: "No throw-over-the-wall decks." },
        { value: "Production", label: "It has to run", text: "Launch includes the boring parts: access, backups, monitoring." },
        { value: "Worldwide", label: "Remote product teams", text: "English, async, no requirement to sit in our office." },
      ]}
    />
  );
}
