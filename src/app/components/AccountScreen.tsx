import svgPaths from "../../imports/AccountScreen/svg-mn8e0uc6qr";
import imgUserProfile from "../../imports/AccountScreen/user_profile.png";
import imgHouseIcon from "../../imports/AccountScreen/483b6ee700e426885e53fc8e64b4d9a3593d3210.png";

function ChevronRight() {
  return (
    <svg fill="none" viewBox="0 0 8.75 14" className="w-[8.75px] h-[14px]">
      <path d={svgPaths.p167dbc00} fill="#D1D5DB" />
    </svg>
  );
}

const settingsItems = [
  {
    label: "Personal information",
    svgViewBox: "0 0 17.5 20",
    svgPath: "p38438700" as const,
  },
  {
    label: "Login & security",
    svgViewBox: "0 0 20 20",
    svgPath: "p1ae59100" as const,
  },
  {
    label: "Payments & payouts",
    svgViewBox: "0 0 15 20",
    svgPath: "p261a2480" as const,
  },
  {
    label: "Translation",
    svgViewBox: "0 0 20 20",
    svgPath: "p1c7a5700" as const,
  },
];

const supportItems = [
  {
    label: "Visit the Help Center",
    svgViewBox: "0 0 20 20",
    svgPath: "p10358450" as const,
  },
  {
    label: "Contact Support",
    svgViewBox: "0 0 20 20",
    svgPath: "p35b0fe80" as const,
  },
  {
    label: "Give us feedback",
    svgViewBox: "0 0 20 20",
    svgPath: "p3e99ec80" as const,
  },
];

export function AccountScreen() {
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <div className="flex-1 overflow-y-auto min-h-0 pb-6">
        {/* Header */}
        <div className="border-b border-[#ddd] px-6 pt-12 pb-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span
              className="text-[32px] text-[#222]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Profile
            </span>
            <div className="w-[17.5px] h-5">
              <svg fill="none" viewBox="0 0 17.501 20" className="w-full h-full">
                <path d={svgPaths.p35c66700} fill="#222" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
              <img src={imgUserProfile} alt="김민준" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p
                className="text-[24px] text-[#222]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                김민준
              </p>
              <button>
                <span
                  className="text-[14px] text-[#222] underline"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  Show profile
                </span>
              </button>
            </div>
            <svg fill="none" viewBox="0 0 10 16" className="w-2.5 h-4 shrink-0">
              <path d={svgPaths.p2a458f00} fill="#9CA3AF" />
            </svg>
          </div>
        </div>

        {/* Enf social banner */}
        <div className="px-6 py-6">
          <div className="border border-[#ddd] rounded-[12px] p-4 flex items-center justify-between shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="flex-1 pr-4">
              <p
                className="text-[16px] text-[#222]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                enf social your space
              </p>
              <p
                className="text-[14px] text-[#6b7280] mt-1"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                {`It's easy to start earning with your items.`}
              </p>
            </div>
            <div className="w-12 h-12 overflow-hidden shrink-0">
              <img src={imgHouseIcon} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Settings section */}
        <div className="px-6 py-4 flex flex-col gap-4">
          <h3
            className="text-[18px] text-[#222]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Settings
          </h3>
          <div className="flex flex-col gap-6">
            {settingsItems.map((item, i) => (
              <div key={item.label}>
                <button className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex items-center justify-center">
                      <svg fill="none" viewBox={item.svgViewBox} className="w-5 h-5">
                        <path d={(svgPaths as Record<string, string>)[item.svgPath]} fill="#222" />
                      </svg>
                    </div>
                    <span
                      className="text-[16px] text-[#222]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight />
                </button>
                {i < settingsItems.length - 1 && (
                  <div className="h-px bg-[#ddd] mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support section */}
        <div className="px-6 py-8 flex flex-col gap-4">
          <h3
            className="text-[18px] text-[#222]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Support
          </h3>
          <div className="flex flex-col gap-6">
            {supportItems.map((item, i) => (
              <div key={item.label}>
                <button className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex items-center justify-center">
                      <svg fill="none" viewBox={item.svgViewBox} className="w-5 h-5">
                        <path d={(svgPaths as Record<string, string>)[item.svgPath]} fill="#222" />
                      </svg>
                    </div>
                    <span
                      className="text-[16px] text-[#222]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight />
                </button>
                {i < supportItems.length - 1 && (
                  <div className="h-px bg-[#ddd] mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Log out + version */}
        <div className="px-6 pt-6 pb-12 flex flex-col gap-8">
          <button>
            <span
              className="text-[16px] text-[#222] underline"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Log out
            </span>
          </button>
          <span
            className="text-[12px] text-[#9ca3af]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Version 24.12.01
          </span>
        </div>
      </div>
    </div>
  );
}
