import type { Metadata } from "next";

import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export const metadata: Metadata = {
  title: "Waitlist",
};

export default function WaitlistPage() {
  return <WaitlistCTA />;
}
