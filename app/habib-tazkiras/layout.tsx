import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Habib Tazkira's — Hair, Beauty & Bridal Salon in Chittagong",
  description:
    'Relax. Revive. Restore. Chittagong\u2019s finest hair, beauty & makeup salon — a franchise of Jawed Habib, Mumbai. Bridal packages from ৳7,000. Open daily 10 AM – 9 PM at GEC, 2 No Gate & Khulshi.',
};

export default function HabibLayout({ children }: { children: React.ReactNode }) {
  return children;
}
