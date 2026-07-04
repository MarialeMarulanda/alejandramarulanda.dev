import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Education from "@/features/education/Education";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/educacion">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("education")} — Alejandra Marulanda` };
}

export default async function EducationPage({
  params,
}: PageProps<"/[locale]/educacion">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page">
      <Education />
    </div>
  );
}
