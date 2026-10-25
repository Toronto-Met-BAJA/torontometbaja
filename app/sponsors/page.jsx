"use client";

import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";
import {
  sponsors,
  sponsorshipPackage,
  sponsorshipPerks,
  sponsorshipTiers,
} from "@/config/data";

export default function SponsorsPage() {
  return (
    <div className="container mx-auto w-full max-w-7xl flex flex-col gap-12 px-4 py-8 sm:px-6 md:py-10 lg:px-8">
      <div className="text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#EE3124]">
          {sponsorshipPackage.season} Sponsorships
        </p>
        <h1 className={title()}>Partner With TMBR</h1>
        <p className="mt-4 text-lg text-default-600 max-w-3xl mx-auto">
          Invest in the next generation of engineers. Your support helps Toronto
          Met Baja Racing design, build, and race an all-new off-road vehicle and
          gives students hands-on engineering experience.
        </p>
      </div>

      <section className="flex flex-col gap-8 relative overflow-hidden" aria-labelledby="sponsorship-tiers">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3124]/5 -rotate-45 translate-x-32 -translate-y-32 pointer-events-none" />

        <div className="text-center flex flex-col gap-4 relative z-10">
          <h2 id="sponsorship-tiers" className="text-3xl font-bold italic tracking-tight">
            SUPPORT THE <span className="text-[#EE3124]">FUTURE</span> OF ENGINEERING
          </h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            Choose the level that fits you. We also welcome in-kind support:
            parts, software, and manufacturing services are credited at fair
            market value toward the equivalent tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10 text-left">
          {sponsorshipTiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col border-none bg-default-50/50 dark:bg-default-100/50 backdrop-blur-sm shadow-sm group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#EE3124] clip-path-slant pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardBody className="p-6 flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-1">
                  <Chip color={tier.color} variant="flat" size="sm" className="w-fit font-bold uppercase">
                    {tier.name}
                  </Chip>
                  <span className="text-3xl font-black italic mt-2">{tier.price}</span>
                </div>

                <p className="text-small text-default-600 min-h-[40px] font-medium">
                  {tier.description}
                </p>

                <ul className="flex flex-col gap-3 mt-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-default-700">
                      <svg aria-hidden="true" className="mt-1 shrink-0 text-[#EE3124]" width="14" height="14" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center py-4 relative z-10">
          <Button
            as={Link}
            style={{ backgroundColor: "#EE3124" }}
            size="lg"
            className="w-full sm:w-auto font-bold text-white"
            href={`mailto:${sponsorshipPackage.email}?subject=${encodeURIComponent(`${sponsorshipPackage.season} TMBR Sponsorship`)}`}
          >
            Become a Sponsor
          </Button>
          <Button
            as={Link}
            variant="bordered"
            size="lg"
            className="w-full sm:w-auto font-bold"
            href={sponsorshipPackage.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Sponsorship Package (PDF)
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6" aria-labelledby="sponsorship-perks">
        <div className="text-center">
          <h2 id="sponsorship-perks" className="text-3xl font-black italic">PERKS BREAKDOWN</h2>
          <p className="mt-3 text-default-600">Benefits are included according to the sponsorship tier above.</p>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
          {sponsorshipPerks.map((perk) => (
            <div key={perk.name} className="border-l-2 border-[#EE3124] pl-4">
              <dt className="font-bold text-default-800">{perk.name}</dt>
              <dd className="mt-2 text-default-600">{perk.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex flex-col gap-6" aria-labelledby="sponsorship-impact">
        <h2 id="sponsorship-impact" className="text-center text-3xl font-black italic">WHERE YOUR SUPPORT GOES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              name: "Build the new vehicle",
              description: "Fund the materials, precision machining, and manufacturing needed to build our new car from the ground up.",
            },
            {
              name: "Get us to competitions",
              description: "Help cover travel, registration, and logistics so our team and car can compete and represent our sponsors.",
            },
            {
              name: "Open the shop to everyone",
              description: "Support hands-on workshops with groups such as Women in Engineering, giving more students the chance to learn real shop skills.",
            },
          ].map((impact) => (
            <Card key={impact.name} className="border-none bg-default-50 dark:bg-default-100/50 shadow-sm">
              <CardBody className="p-6 gap-3">
                <h3 className="font-bold text-lg">{impact.name}</h3>
                <p className="text-default-600">{impact.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 border-t border-default-200 pt-12" aria-labelledby="current-partners">
        <div className="text-center">
          <h2 id="current-partners" className="text-3xl font-black italic text-default-800">OUR CURRENT PARTNERS</h2>
          <p className="mt-3 text-default-600">Thank you to the partners investing in our team and the next generation of engineers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 rounded-2xl bg-default-50 dark:bg-default-100/50 p-6 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE3124]"
            >
              <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white p-4">
                <Image radius="none" alt={sponsor.name} className="max-h-20 w-auto object-contain" src={sponsor.logoUrl} />
              </div>
              <span className="font-bold text-default-800">{sponsor.name}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="text-center rounded-2xl bg-default-50 dark:bg-default-100/50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold">Let&apos;s find the right fit.</h2>
        <p className="mt-3 text-default-600 max-w-2xl mx-auto">
          Choose a tier, or tell us what you can offer in cash, parts, or services.
          We would love to hear from you.
        </p>
        <Link className="mt-4 font-bold break-all" href={`mailto:${sponsorshipPackage.email}`}>
          {sponsorshipPackage.email}
        </Link>
      </div>
    </div>
  );
}
