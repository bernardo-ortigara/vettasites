import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHero from "./_sections/project-hero";
import ProjectCase from "./_sections/project-case";
import NextProject from "./_sections/next-project";
import FrequentlyAskedQuestionsSection from "../../../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../../../sections/let-work-together-section";
import { getNextProjects, getProject, projects } from "../../../content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found — VETTA" };

  const title = `${p.title} — VETTA`;
  const url = `/work/portfolio/${p.slug}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: { title, description: p.summary, type: "article", url, images: [p.image.src] },
    twitter: { card: "summary_large_image", title, description: p.summary, images: [p.image.src] }
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-foreground">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-foreground">
          <ProjectHero p={project} />
          <ProjectCase p={project} />
          <NextProject projects={getNextProjects(project.slug, 2)} />
        </div>
        <FrequentlyAskedQuestionsSection index="(03)" />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
