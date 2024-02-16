"use client";
import {
  Header,
  ProfilePhoto,
  GitHubLinkButton,
  LinkedInLinkButton,
  TravelledSection,
} from "@/components";

const page = () => (
  <main className="flex flex-col gap-y-8 items-center min-h-screen m-24">
    <Header />
    <ProfilePhoto />
    <div className="flex flex-col items-center">
      <TravelledSection />
    </div>
    <div className="flex flex-col gap-y-3">
      <GitHubLinkButton />
      <LinkedInLinkButton />
    </div>
  </main>
);

export default page;
