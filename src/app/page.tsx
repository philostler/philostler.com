"use client";
import {
  Header,
  Links,
  ProfilePhoto,
  TravelSection,
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
    <div className="flex flex-col gap-y-3 w-64">
      <Links />
    </div>
  </main>
);

export default page;
