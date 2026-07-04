import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import About from "@/features/about/About";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sobre-mi">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("about")} — Alejandra Marulanda` };
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/sobre-mi">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page">
      <About />
    </div>
  );
}
