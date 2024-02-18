"use client";
import {
  Header,
  ProfilePhoto,
  GitHubLinkButton,
  LinkedInLinkButton,
  TravelSection,
  XLinkButton,
  WorkSection,
  LocationSection,
} from "@/components";

const page = () => (
  <main className="flex flex-col gap-y-8 items-center min-h-screen m-24">
    <Header />
    <ProfilePhoto />
    <div className="flex flex-col gap-y-3">
      <LocationSection />
      <WorkSection />
      <TravelSection />
    </div>
    <div className="flex flex-col gap-y-3">
      <GitHubLinkButton />
      <LinkedInLinkButton />
      <XLinkButton />
    </div>
  </main>
);

export default page;
