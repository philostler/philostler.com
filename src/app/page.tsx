import Image from "next/image";

const page = () => (
  <main className="flex flex-col items-center justify-between min-h-screen m-24">
    <Image
      alt="Phil Ostler's Profile"
      className="border-4 border-gray-950 rounded-full"
      height={200}
      priority
      src="/profile.jpg"
      width={200}
    />
  </main>
);

export default page;
