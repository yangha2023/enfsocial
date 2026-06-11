import svgPaths from "../../imports/DetailScreen/svg-3b79iowmd8";
import imgSofa from "../../imports/DetailScreen/bc24407b3cd24e21a36110aff1e69a44ddae9b0f.png";
import imgHost from "../../imports/DetailScreen/93261e682a4fc24925831eb042e025379dab45ab.png";

interface DetailScreenProps {
  onBack: () => void;
}

export function DetailScreen({ onBack }: DetailScreenProps) {
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white relative">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {/* Product image */}
        <div className="relative rounded-bl-[12px] rounded-br-[12px] overflow-hidden h-[340px] w-full">
          <img src={imgSofa} alt="Velvet Modular Sofa" className="w-full h-full object-cover" />

          {/* Back button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
          >
            <svg fill="none" viewBox="0 0 10 16" className="w-2.5 h-4">
              <path d={svgPaths.p31e57680} fill="#222" />
            </svg>
          </button>

          {/* Action buttons */}
          <div className="absolute top-6 right-6 flex gap-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
              <svg fill="none" viewBox="0 0 14 16" className="w-3.5 h-4">
                <path d={svgPaths.p366d0c80} fill="#222" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
              <svg fill="none" viewBox="0 0 16 16" className="w-4 h-4">
                <path d={svgPaths.p26e94600} fill="#222" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Product details */}
        <div className="px-6 pt-6 flex flex-col gap-6">
          {/* Title + rating */}
          <div className="flex flex-col gap-2">
            <h1
              className="text-[30px] text-[#222] tracking-[-0.75px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Velvet Modular Sofa
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <svg fill="none" viewBox="0 0 13.5 12.0013" className="w-3 h-3">
                  <path d={svgPaths.pbb95ef2} fill="#222" />
                </svg>
                <span
                  className="text-[14px] text-[#222]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  4.8
                </span>
              </div>
              <span className="text-[14px] text-[#4b5563]">•</span>
              <span
                className="text-[14px] text-[#4b5563] underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                124 reviews
              </span>
              <span className="text-[14px] text-[#4b5563]">•</span>
              <span
                className="text-[14px] text-[#4b5563] underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Gangnam-gu, Seoul
              </span>
            </div>
          </div>

          <div className="h-px bg-[#ddd]" />

          {/* Host */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img src={imgHost} alt="Host" className="w-full h-full object-cover" />
            </div>
            <div>
              <p
                className="text-[18px] text-[#222]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                Hosted by Minji Kim
              </p>
              <p
                className="text-[14px] text-[#6b7280]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Host since 2021 • Superhost
              </p>
            </div>
          </div>

          <div className="h-px bg-[#ddd]" />

          {/* Description */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[16px] text-[#374151] leading-[26px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Experience luxury and comfort with our signature Velvet Modular Sofa. Designed for
              modern living spaces, this piece offers both aesthetic elegance and functional
              versatility. The forest green velvet fabric is soft to the touch and durable for
              everyday use.
            </p>
            <p
              className="text-[16px] text-[#374151] leading-[26px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Perfect for minimalists who appreciate high-quality craftsmanship. This unit can be
              rearranged to fit any room layout, making it a perfect addition to your home or office
              studio.
            </p>
            <button className="flex items-center gap-1">
              <span
                className="text-[16px] text-[#222] underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Show more
              </span>
              <svg fill="none" viewBox="0 0 6.25 10" className="w-1.5 h-2.5">
                <path d={svgPaths.p249e0c00} fill="#222" />
              </svg>
            </button>
          </div>

          <div className="h-px bg-[#ddd]" />

          {/* What this item offers */}
          <div className="flex flex-col gap-4">
            <h2
              className="text-[20px] text-[#222]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              What this item offers
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="w-6 flex items-center justify-center shrink-0">
                  <svg fill="none" viewBox="0 0 22.5 18" className="w-[22.5px] h-[18px]">
                    <path d={svgPaths.pf611200} fill="#222" />
                  </svg>
                </div>
                <span
                  className="text-[16px] text-[#222]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  Express Delivery
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 flex items-center justify-center shrink-0">
                  <svg fill="none" viewBox="0 0 18 18" className="w-[18px] h-[18px]">
                    <path d={svgPaths.p21b5b570} fill="#222" />
                  </svg>
                </div>
                <span
                  className="text-[16px] text-[#222]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  2-Year Warranty
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 flex items-center justify-center shrink-0">
                  <svg fill="none" viewBox="0 0 18 18" className="w-[18px] h-[18px]">
                    <path d={svgPaths.p234710c0} fill="#222" />
                  </svg>
                </div>
                <span
                  className="text-[16px] text-[#222]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  Free Returns within 30 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-24 bg-white border-t border-[#ddd] flex items-center justify-between px-6 shrink-0 z-40">
        <div>
          <div className="flex items-center gap-1">
            <span
              className="text-[20px] text-[#222]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              ₩840,000
            </span>
            <span
              className="text-[14px] text-[#6b7280]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              per unit
            </span>
          </div>
          <span
            className="text-[12px] text-[#4b5563] underline"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Aug 24 – 29
          </span>
        </div>
        <button className="bg-[#ff385c] px-8 h-12 rounded-[8px] flex items-center justify-center">
          <span
            className="text-[16px] text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Reserve
          </span>
        </button>
      </div>
    </div>
  );
}
