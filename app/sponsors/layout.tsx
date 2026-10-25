import { Metadata} from "next";

export const metadata: Metadata = {
  title: "Sponsorships",
  description: "Support Toronto Met Baja Racing for the 2026/2027 season. Explore sponsorship tiers, partner benefits, and in-kind support opportunities.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full text-center">
        {children}
      </div>
    </section>
  );
}
