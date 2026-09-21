"use client";

import SiteHeader from "../../components/site-header";
import { Appear, Parallax } from "../../components/motion-primitives";
import { HONEYPOTS, montarMensagem } from "../../../lib/contato";
import { whatsappLink } from "../../../lib/vetta";


const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

const DELAY = {
  image: 0.1,
  heading: 0.1,
  lead: 0.2,
  field: (i: number) => 0.3 + i * 0.1,
  message: 0.7,
  submit: 0.8
} as const;

const RULE = "absolute bottom-0 left-0 w-full h-px bg-bone-edge";

const INPUT_LABEL =
  "block text-bone font-display text-xs font-bold leading-[16.2px] tracking-[-0.5px]";
const INPUT_FIELD =
  "flex-1 w-auto min-w-0 p-0 bg-transparent border-0 outline-none font-body text-xs font-normal leading-[19.2px] tracking-[-0.5px] text-bone placeholder:text-bone-soft";
const INPUT_FILL = "h-full";

type FieldSpec = {
  label: string;
  name: string;
  required: boolean;
  kind?: "select";
  type?: "text" | "email";
  placeholder?: string;
};

const FIELDS: FieldSpec[] = [
  { label: "Nome*", name: "Nome", type: "text", placeholder: "Seu nome", required: true },
  { label: "Empresa*", name: "Empresa", type: "text", placeholder: "Nome do seu negócio", required: true },
  { label: "Tipo de projeto", name: "Projeto", kind: "select", required: true },
  { label: "E-mail", name: "Email", type: "email", placeholder: "voce@empresa.com.br", required: false }
];

const CATEGORIES = ["Site institucional", "Landing page", "Loja virtual", "Outro"];

function Field({ f, index }: { f: FieldSpec; index: number }) {
  return (
    <Appear
      className="flex-1 grow shrink-0 basis-0 w-px h-[min-content] flex relative flex-col justify-start items-start content-start gap-2.5 max-tab:flex-none max-tab:w-full"
      initial={{ opacity: 0.001, y: 20 }}
      transition={{ ...SPRING, delay: DELAY.field(index) }}
    >
      <label className="w-full h-[min-content] flex relative flex-col justify-start items-start content-start gap-2.5">
        <div className="w-full h-auto flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
          <p className={INPUT_LABEL}>{f.label}</p>
        </div>
        <div className="w-full h-10 flex relative items-center overflow-hidden shrink-0">
          {f.kind === "select" ? (
            <>
              <select
                className={`${INPUT_FIELD} ${INPUT_FILL} w-full appearance-none pr-6.5 invalid:text-[#999] cursor-pointer`}
                name={f.name}
                required={f.required}
                defaultValue=""
              >
                <option value="" className="text-black">
                  Selecione
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} className="text-black">
                    {c}
                  </option>
                ))}
              </select>
              <div
                className="w-4 h-4 block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none bg-[#999]"
                style={{
                  maskImage:
                    'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22><path d=%22M 3.5 6 L 8 10.5 L 12.5 6%22 fill=%22transparent%22 stroke=%22black%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>")',
                  maskRepeat: "no-repeat",
                  maskSize: "16px",
                  maskPosition: "50%"
                }}
                aria-hidden="true"
              />
            </>
          ) : (
            <input
              className={`${INPUT_FIELD} ${INPUT_FILL}`}
              type={f.type}
              name={f.name}
              required={f.required}
              placeholder={f.placeholder}
            />
          )}
          <div className={RULE} aria-hidden="true" />
        </div>
      </label>
    </Appear>
  );
}

export default function GetInTouchSection() {
  return (
    <section
      className="w-full h-[min-content] flex relative z-1 flex-col justify-start items-center content-center gap-10 overflow-clip px-6 pt-6 pb-25 max-tab:pb-20"
    >
      <div className="w-full h-full block absolute top-0 left-0 overflow-clip bg-ink" />

      <SiteHeader variant="fluid" active="/contact" />
      <div className="w-full h-17.5 block relative shrink-0 overflow-clip" />

      <div
        className="w-full max-w-360 h-[min-content] flex relative justify-start items-start content-start gap-[127px] overflow-clip max-desk:flex-col max-desk:gap-20 max-desk:max-w-none"
      >
        <Appear
          className="w-143.5 h-195.75 flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5 rounded-[5px] overflow-clip max-desk:order-1 max-desk:justify-center max-desk:w-full tab:max-desk:h-180 max-tab:h-88.5"
          initial={{ opacity: 0.001, y: 70 }}
          transition={{ ...SPRING, delay: DELAY.image }}
        >
          <div className="w-[9%] h-[5%] block absolute top-[47.765%] left-[45.4704%] z-1 overflow-clip">
            <img loading="lazy" decoding="async"               className="w-full h-full block object-contain"

              alt=""
              width="208"
              height="147"
              src="/assets/media/images/237cf1bbfc22.png"
            />
          </div>

          <Parallax
            speed={90}
            className="w-full h-[120%] block relative shrink-0 rounded-[5px] overflow-clip max-desk:h-[140%]"
          >
            <div className="w-full h-full block absolute top-0 left-0 rounded-[5px]">
              <img loading="lazy" decoding="async"                 className="w-full h-full block rounded-[5px] overflow-clip object-cover object-center"

                alt="Men Orange BG"
                width="896"
                height="1280"
                sizes="(min-width: 1200px) 574px, calc(100vw - 48px)"
                src="/assets/media/images/c2319a79d95c.webp"
                srcSet="/assets/media/images/e2d3b0b2997d.webp 716w, /assets/media/images/c2319a79d95c.webp 896w"
              />
            </div>
          </Parallax>
        </Appear>

        <div className="flex-1 grow shrink-0 basis-0 w-px h-[min-content] flex relative flex-col justify-center items-start content-start gap-20 pt-20 overflow-clip max-desk:flex-none max-desk:order-0 max-desk:w-full max-desk:gap-12.5 max-desk:pt-0">
          <div className="w-full h-[min-content] flex relative flex-col justify-center items-start content-start gap-12.5 max-desk:gap-5">
            <Appear
              className="w-full h-auto flex relative flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
              initial={{ opacity: 0.001, y: 20 }}
              transition={{ ...SPRING, delay: DELAY.heading }}
            >
              <h1
                className="block text-bone font-display text-[4.375rem] font-bold leading-17.5 tracking-[-2.1px] tab:max-desk:text-[3.5rem] tab:max-desk:leading-14 max-tab:text-3xl max-tab:leading-7.5"

              >
                {"Vamos conversar”"}
              </h1>
            </Appear>

            <Appear
              className="w-full max-w-87.5 h-auto flex relative flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
              initial={{ opacity: 0.001, y: 20 }}
              transition={{ ...SPRING, delay: DELAY.lead }}
            >
              <p className="block text-bone-soft font-display text-xs font-bold leading-[16.2px] tracking-[-0.5px]">
                {"Conte o que você precisa e a gente volta com escopo, prazo e valor em até 24 horas."}
              </p>
            </Appear>
          </div>

          <form
            className="w-full h-[min-content] flex relative flex-col justify-start items-start content-start gap-12.5 max-tab:gap-5"
            onSubmit={(evento) => {
              evento.preventDefault();
              const dados = new FormData(evento.currentTarget);
              if (HONEYPOTS.some((campo) => String(dados.get(campo) ?? "").trim() !== "")) return;
              window.open(whatsappLink(montarMensagem(dados)), "_blank", "noopener");
            }}
          >
            <div className="w-full h-[min-content] flex relative justify-center items-center content-center gap-5 max-tab:flex-col">
              <Field f={FIELDS[0]} index={0} />
              <Field f={FIELDS[1]} index={1} />
            </div>
            <div className="w-full h-[min-content] flex relative justify-center items-center content-center gap-5 max-tab:flex-col">
              <Field f={FIELDS[2]} index={2} />
              <Field f={FIELDS[3]} index={3} />
            </div>

            <Appear
              className="w-full h-[min-content] flex relative flex-col justify-center items-center content-center gap-2.5 overflow-clip"
              initial={{ opacity: 0.001, y: 20 }}
              transition={{ ...SPRING, delay: DELAY.message }}
            >
              <label className="w-full h-[min-content] flex relative flex-col justify-start items-start content-start gap-2.5">
                <div className="w-full h-auto flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className={INPUT_LABEL}>Mensagem</p>
                </div>
                <div className="w-full h-auto min-h-25 flex relative items-center overflow-hidden shrink-0">
                  <textarea
                    className={`${INPUT_FIELD} form-field-input w-full h-25 min-h-25 resize-y [white-space:break-spaces] overflow-y-auto`}
                    name="Mensagem"
                    placeholder="Conte o que o seu negócio precisa..."
                  />
                  <div className={RULE} aria-hidden="true" />
                </div>
              </label>
            </Appear>

            <Appear
              className="w-full h-10 block relative"
              initial={{ opacity: 0.001, y: 20 }}
              transition={{ ...SPRING, delay: DELAY.submit }}
            >
              <button
                className="w-full h-full flex relative justify-center items-center content-center rounded-[10px] bg-bone-edge cursor-pointer text-center"
                type="submit"
              >
                <div className="w-auto h-auto flex relative flex-col justify-start text-center whitespace-pre select-none">
                  <p className={INPUT_LABEL}>Enviar no WhatsApp</p>
                </div>
              </button>
            </Appear>

            {HONEYPOTS.map((name) => (
              <input
                key={name}
                type="text"
                name={name}
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                className="absolute scale-0"
              />
            ))}
          </form>
        </div>
      </div>
    </section>
  );
}
