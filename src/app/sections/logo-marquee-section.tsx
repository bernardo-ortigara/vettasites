import ClientLogo from "../components/client-logo";
import { clientLogoStyles } from "../_styles";
import { logos as logosContent } from "../content";
import Ticker from "../components/ticker";
import Carousel from "../components/carousel";


const TICKER_SPEED = 50;
const GAP = 10;

export default function LogoMarqueeSection({ logos = logosContent } = {}) {
  const unique = logos.slice(0, clientLogoStyles.length);

  const deskCards = unique.map((d, i) => <ClientLogo key={i} d={d} styles={clientLogoStyles[i]} />);

  const mobileCards = unique.map((d, i) => (
    <div key={i} className="w-full h-42.5 flex relative rounded-[5px] flex-col justify-center items-center content-center gap-2.5 overflow-clip bg-bone-dim">
      <div className="w-26 h-4 block relative shrink-0">
        <img className="w-full h-4 block overflow-clip object-contain" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
      </div>
    </div>
  ));

  return (
    <div className="w-full block relative z-1 shrink-0">
      <section className="flex relative py-20 justify-end items-center content-center gap-2.5 overflow-clip bg-bone">
        <div className="w-[400vw] h-42.5 block relative shrink-0 max-tab:hidden">
          <Ticker
            className="h-42.5 flex items-center p-2.5 max-w-full max-h-full"
            speed={TICKER_SPEED}
            gap={GAP}
          >
            {deskCards}
          </Ticker>
        </div>

        <div className="hidden max-tab:block max-tab:w-full max-tab:px-5">
          <Carousel items={mobileCards} gap={GAP} />
        </div>
      </section>
    </div>
  );
}
