"use client";
import {
  Header,
  Links,
  ProfilePhoto,
  TravelSection,
  WorkSection,
  LocationSection,
} from "@/components";
import { logVersion } from "./logVersion";

logVersion();

const page = () => (
  <main className="flex flex-col gap-y-8 items-center min-h-screen m-24">
    <ProfilePhoto />
    <div className="flex flex-col gap-y-3">
      <LocationSection />
      <WorkSection />
      <TravelSection />
    </div>
    <div className="flex flex-col gap-y-3 w-64">
      <Links />
    </div>
    <Header />
  </main>
);

export default page;
