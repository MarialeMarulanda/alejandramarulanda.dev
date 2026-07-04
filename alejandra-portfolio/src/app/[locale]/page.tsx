import { setRequestLocale } from "next-intl/server";
import Hero from "@/features/hero/Hero";
import HomeContent from "@/features/home/HomeContent";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
}
