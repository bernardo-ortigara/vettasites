
export type NavLinkStyles = {
  className: string;
  className2: string;
  className3: string;
  className4: string;
};
export type ClientLogoStyles = {
  className: string;
  className2: string;
  className3: string;
  className4?: string;
  className5: string;
};
export type MediaTileStyles = {
  className: string;
  className2?: string;
  className3: string;
  className4?: string;
  className5: string;
  className6: string;
  className7: string;
  className8: string;
  className9: string;
  className10: string;
  className11: string;
};
export type MediaCardStyles = {
  className: string;
  className3: string;
  className2?: string;
};

export const navLinkStyles: NavLinkStyles[] = [
    { className: "w-auto justify-start items-start content-start", className2: "w-auto", className3: "w-auto", className4: "w-auto" },
    { className: "w-auto justify-start items-start content-start", className2: "w-auto", className3: "w-auto", className4: "w-auto" },
    { className: "w-auto justify-start items-start content-start", className2: "w-auto", className3: "w-auto", className4: "w-auto" },
    { className: "w-auto justify-center items-center content-center", className2: "w-auto", className3: "w-auto", className4: "w-auto" }
];
export const clientLogoStyles: ClientLogoStyles[] = [
    { className: "w-[13.9375rem]", className2: "w-[13.9375rem]", className3: "w-[13.9375rem]", className4: "left-0", className5: "aspect-[auto_246/64]" },
    { className: "w-56", className2: "w-56", className3: "w-56", className4: "left-0", className5: "aspect-[auto_206/45]" },
    { className: "w-56", className2: "w-56", className3: "w-56", className4: "left-0", className5: "aspect-[auto_524/90]" },
    { className: "w-56", className2: "w-56", className3: "w-56", className4: "left-0", className5: "aspect-[auto_302/64]" },
    { className: "w-56", className2: "w-56", className3: "w-56", className5: "aspect-[auto_416/52]" }
];
export const mediaTileStyles: MediaTileStyles[] = [
    { className: "w-full h-[30.9rem] sticky top-12.5 max-desk:top-6 max-tab:h-[30.5625rem]", className2: "h-full", className3: "z-1", className5: "aspect-[auto_1392/752]", className6: "aspect-[auto_1392/752]", className7: "w-auto", className8: "w-auto", className9: "w-3/5", className10: "w-auto", className11: "w-auto" },
    { className: "w-full h-[30.9rem] sticky top-22.5 max-desk:top-16 max-tab:h-[30.5625rem]", className2: "h-full", className3: "z-2", className5: "aspect-[auto_2728/1536]", className6: "aspect-[auto_2728/1536]", className7: "w-auto", className8: "w-auto", className9: "w-[58%]", className10: "w-auto", className11: "w-auto" },
    { className: "w-full h-[30.9rem] sticky top-32.5 max-desk:top-26 max-tab:h-[30.5625rem]", className2: "h-full", className3: "z-3", className5: "aspect-[auto_1280/896]", className6: "aspect-[auto_1280/896]", className7: "w-auto", className8: "w-auto", className9: "w-[54.5%]", className10: "w-auto", className11: "w-auto" },
    { className: "w-full relative", className3: "z-3", className4: "bg-bone", className5: "aspect-[auto_1408/768]", className6: "aspect-[auto_1408/768]", className7: "w-auto", className8: "w-auto", className9: "w-[55.5%]", className10: "w-auto", className11: "w-auto" }
];
export const mediaCardStyles: MediaCardStyles[] = [
    { className: "aspect-[auto_1280/896]", className3: "2xl:aspect-[auto_1280/896]" },
    { className: "aspect-[auto_896/1280]", className2: "2xl:left-0", className3: "2xl:aspect-[auto_896/1280]" },
    { className: "aspect-[auto_1024/1024]", className2: "2xl:left-0", className3: "2xl:aspect-[auto_1024/1024]" }
];
