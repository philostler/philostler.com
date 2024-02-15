"use client";
import {
  Header,
  ProfilePhoto,
  GitHubLinkButton,
  LinkedInLinkButton,
} from "@/components";

const page = () => (
  <main className="flex flex-col items-center min-h-screen m-24">
    <Header />
    <ProfilePhoto className="mb-8" />
    <div className="flex flex-col gap-y-3">
      <GitHubLinkButton />
      <LinkedInLinkButton />
    </div>
  </main>
);

export default page;
