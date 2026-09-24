"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { useBreakpointValue } from "./motion-primitives";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";


export type StaggeredFont = {
  fontFamily: string;
  fontSize: string;
  fontStyle?: string;
  fontWeight?: number;
  letterSpacing: string;
  lineHeight: string;
  textAlign?: CSSProperties["textAlign"];
};

export type ResponsiveFont = { base: StaggeredFont; tab?: StaggeredFont; desk?: StaggeredFont };

function useResponsiveFont(font: ResponsiveFont): StaggeredFont {
  const [resolved, setResolved] = useState<StaggeredFont>(font.desk ?? font.base);

  useEffect(() => {
    const tab = window.matchMedia("(min-width: 810px)");
    const desk = window.matchMedia("(min-width: 1200px)");
    const pick = () => setResolved(desk.matches ? font.desk ?? font.base : tab.matches ? font.tab ?? font.base : font.base);
    pick();
    tab.addEventListener("change", pick);
    desk.addEventListener("change", pick);
    return () => {
      tab.removeEventListener("change", pick);
      desk.removeEventListener("change", pick);
    };
  }, [font]);

  return resolved;
}

export default function StaggeredText({
  text: fullText,
  delay = 0.1,
  duration = 0.7,
  font,
  color,
  variable = false,
  halfOpacity = false,
  highlight,
  weight: weightOverride,
  ghostWeight = 400,
  indent,
  trimIndentOnMobile = false,
  className,
  style
}: {
  text: string;
  delay?: number;
  duration?: number;
  font: ResponsiveFont;
  color?: string;
  variable?: boolean;
  halfOpacity?: boolean;
  /** Palavras pintadas com o degradê de destaque da marca */
  highlight?: string[];
  weight?: number;
  ghostWeight?: number;
  indent?: { base?: string; tab?: string; desk?: string };
  /** Tira os espaços do começo no celular, onde o texto não divide a linha com nada */
  trimIndentOnMobile?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const mobile = useBreakpointValue({ base: true, tab: false, desk: false });
  const text = trimIndentOnMobile && mobile ? fullText.trimStart() : fullText;
  const resolvedFont = useResponsiveFont(font);
  const resolvedIndent = useBreakpointValue({ base: indent?.base ?? "0px", tab: indent?.tab, desk: indent?.desk });
  const [lines, setLines] = useState<string[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ghostRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const inView = useInView(containerRef);

  useLayoutEffect(() => {
    const measure = () => {
      const el = ghostRef.current;
      if (!el) return;
      const node = el.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) return;

      const range = document.createRange();
      const found: string[] = [];
      let current = "";
      let bottom = -1;

      for (let i = 0; i < text.length; i++) {
        range.setStart(node, 0);
        range.setEnd(node, i + 1);
        const rect = range.getBoundingClientRect();
        if (bottom === -1) bottom = rect.bottom;
        if (rect.bottom > bottom + 2) {
          found.push(current);
          current = text[i];
          bottom = rect.bottom;
        } else {
          current += text[i];
        }
      }
      if (current) found.push(current);
      setLines(found.length > 0 ? found : [text]);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text, resolvedFont, ghostWeight, resolvedIndent]);

  useEffect(() => {
    if (!inView || hasAnimated || lines.length === 0) return;
    controls.start((i: number) => ({
      y: 0,
      transition: { delay: i * delay, duration, ease: [0.44, 0, 0.34, 0.98] }
    }));
    setHasAnimated(true);
  }, [inView, hasAnimated, lines.length, controls, delay, duration]);

  // Trechos marcados pela posição no texto inteiro, para sobreviver a qualquer quebra de linha
  const highlighted = useMemo(() => {
    const marks = new Array<boolean>(text.length).fill(false);
    for (const phrase of highlight ?? []) {
      for (let at = text.indexOf(phrase); at !== -1; at = text.indexOf(phrase, at + phrase.length)) {
        marks.fill(true, at, at + phrase.length);
      }
    }
    return marks;
  }, [text, highlight]);
  const renderLine = (line: string, offset: number) => {
    if (!highlight?.length) return line;
    const parts: ReactNode[] = [];
    let start = 0;
    for (let k = 1; k <= line.length; k++) {
      if (k < line.length && highlighted[offset + k] === highlighted[offset + start]) continue;
      const chunk = line.slice(start, k);
      parts.push(highlighted[offset + start] ? <span key={start} className="vetta-highlight">{chunk}</span> : chunk);
      start = k;
    }
    return parts;
  };

  const halfway = useMemo(() => text.length / 2, [text.length]);
  const weight = weightOverride ?? (variable ? 700 : 500);
  // Cada linha é um span separado, então o justify do CSS não alcança: estica
  // as linhas uma a uma, menos a última, como num parágrafo justificado.
  const justify = resolvedFont.textAlign === "justify";

  return (
    <>
      <div
        ref={ghostRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "pre-wrap",
          ...resolvedFont,
          fontWeight: ghostWeight,
          fontVariationSettings: "normal",
          textIndent: resolvedIndent,
          width: style?.width ?? "100%"
        }}
      >
        {text}
      </div>
      <div
        ref={containerRef}
        className={className}
        style={{
          ...style,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color,
          ...resolvedFont
        }}
      >
        {lines.map((line, i) => {
          const offset = lines.slice(0, i).reduce((sum, l) => sum + l.length, 0);
          const opacity = halfOpacity && offset >= halfway ? 0.5 : 1;
          const stretch = justify && i < lines.length - 1;
          return (
            <span
              key={i}
              style={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                marginBottom: 0,
                textIndent: i === 0 ? resolvedIndent : undefined,
                lineHeight: resolvedFont.lineHeight
              }}
            >
              <motion.span
                custom={i}
                initial={{ y: "120%" }}
                animate={controls}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre-wrap",
                  ...resolvedFont,
                  ...(stretch && { width: "100%", textAlignLast: "justify" }),
                  color,
                  opacity,
                  fontWeight: weight,
                  fontVariationSettings: `"wght" ${weight}`,
                  WebkitClipPath: "inset(0 0 0 0)",
                  clipPath: "inset(0 0 0 0)",
                  willChange: "transform",
                  lineHeight: resolvedFont.lineHeight
                }}
              >
                {renderLine(stretch ? line.trimEnd() : line, offset) || " "}
              </motion.span>
            </span>
          );
        })}
      </div>
    </>
  );
}
