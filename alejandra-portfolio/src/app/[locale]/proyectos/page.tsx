import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Projects from "@/features/portfolio/Projects";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/proyectos">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("projects")} — Alejandra Marulanda` };
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/proyectos">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page">
      <Projects />
    </div>
  );
}
