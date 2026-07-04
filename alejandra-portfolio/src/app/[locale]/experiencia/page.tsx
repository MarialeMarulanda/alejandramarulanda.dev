import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Experience from "@/features/experience/Experience";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/experiencia">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("experience")} — Alejandra Marulanda` };
}

export default async function ExperiencePage({
  params,
}: PageProps<"/[locale]/experiencia">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page">
      <Experience />
    </div>
  );
}
