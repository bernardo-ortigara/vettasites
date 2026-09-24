import ClientLogo from "../components/client-logo";
import { clientLogoStyles } from "../_styles";
import { logos as logosContent } from "../content";
import Ticker from "../components/ticker";


const TICKER_SPEED = 50;
const GAP = 10;

export default function LogoMarqueeSection({ logos = logosContent } = {}) {
  const unique = logos.slice(0, clientLogoStyles.length);

  const cards = unique.map((d, i) => <ClientLogo key={i} d={d} styles={clientLogoStyles[i]} />);

  return (
    <div className="w-full block relative z-1 shrink-0">
      <section className="flex relative py-20 justify-end items-center content-center gap-2.5 overflow-clip bg-bone">
        <div className="w-[400vw] h-42.5 block relative shrink-0 opacity-32">
          <Ticker
            className="h-42.5 flex items-center p-2.5 max-w-full max-h-full"
            speed={TICKER_SPEED}
            gap={GAP}
          >
            {cards}
          </Ticker>
        </div>
      </section>
    </div>
  );
}
