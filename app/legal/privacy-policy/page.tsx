import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-28 pb-24 lg:pt-32">
      <h1 className="font-display text-[40px] font-light md:text-[52px]">Privacy policy</h1>
      <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-px-white-64">
        <p>
          Placeholder policy for the Condax Information Technology Solutions (Condax) site. Replace
          with counsel-reviewed copy before launch — including international transfers and any AI
          vendors used on client work.
        </p>
        <p>
          We collect what a contact form and basic analytics need. We do not sell personal data. Client
          project files stay in the tenancy agreed for that engagement; we do not use them to train
          public models.
        </p>
        <p>
          Job applications: when you apply via Careers, we process the information you submit
          (including CV and answers) to evaluate fit for roles at Condax. Application data is
          retained only as long as needed for hiring, then deleted or archived under our retention
          rules. Replace this paragraph with counsel-reviewed wording before launch.
        </p>
      </div>
    </main>
  );
}
