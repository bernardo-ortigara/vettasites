export const dynamic = "force-static";

const BODY = [
  "# VETTA — Premium Design Studio & Portfolio",
  "",
  "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
  "",
  "## Routes",
  "",
  "- [Home](/) — Services, selected work, pricing, and answers to the questions we get most.",
  "- [Portfolio](/work/portfolio) — Case studies across art direction, photography, and strategy.",
  "- [About](/about) — How the studio works, the team, awards, and process.",
  "- [Contact](/contact) — Start a project or ask a question.",
  "",
].join("\n");

export function GET() {
  return new Response(BODY, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
