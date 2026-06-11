import svgPaths from "../../imports/SearchScreen/svg-ripzfygqqv";
import imgFurniture from "../../imports/SearchScreen/e1fd0aaea7ad3eccc082001e4d6dc66c0611a8af.png";
import imgSelling from "../../imports/SearchScreen/43a7f569855bf6754a48534edc77c0c73a07bedb.png";
import imgFashion from "../../imports/SearchScreen/b9dcfcb0e1ae383d23d51d9ec7f24c7e98f7e28c.png";

import imgGaming from "../../imports/SearchScreen/67f40c2e24a43234b316a50d57d2e81ec74e57b3.png";
import imgArt from "../../imports/SearchScreen/e6a65c03822783b6736c64ddb84c5876fecbdfe9.png";

const recentSearches = [
  { id: 1, title: "Modern minimalist sofa", sub: "Furniture • 2 hours ago" },
  { id: 2, title: "Seoul Art Districts", sub: "Events • Yesterday" },
  { id: 3, title: "Vintage Leica M6", sub: "Selling • 3 days ago" },
];

const categories = [
  { label: "Furniture", image: imgFurniture },
  { label: "Selling", image: imgSelling },
  { label: "Fashion", image: imgFashion },
  { label: "Gaming", image: imgGaming },
  { label: "Art & Design", image: imgArt },
];

export function SearchScreen() {
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white pb-4 pt-6 px-4">
        <div className="flex items-center h-16 bg-white rounded-full border border-[#ddd] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] px-6">
          <div className="w-10 h-10 rounded-full bg-[#ff385c] flex items-center justify-center mr-3 shrink-0">
            <svg fill="none" viewBox="0 0 16 16.0023" className="w-4 h-4">
              <path d={svgPaths.p1d73a600} fill="white" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-[14px] text-[#222]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Where to?
            </p>
            <p
              className="text-[12px] text-[#6b7280]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Anywhere • Any time • Add guests
            </p>
          </div>
          <div className="p-2 border border-[#ddd] rounded-full ml-2 shrink-0">
            <svg fill="none" viewBox="0 0 14 14" className="w-3.5 h-3.5">
              <path d={svgPaths.p1f100680} fill="#222" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Recent searches */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2
              className="text-[18px] text-[#222]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Recent searches
            </h2>
            <button>
              <span
                className="text-[12px] text-[#222] underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Clear all
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {recentSearches.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#f7f7f7] flex items-center justify-center shrink-0">
                  <svg fill="none" viewBox="0 0 16 16" className="w-4 h-4">
                    <path d={svgPaths.p233da500} fill="#6B7280" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[14px] text-[#222]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[12px] text-[#6b7280]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse by category */}
        <div className="flex flex-col gap-4 mt-8">
          <h2
            className="text-[18px] text-[#222]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Browse by category
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button key={cat.label} className="relative rounded-[12px] overflow-hidden h-[120px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[16px] text-white"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  >
                    {cat.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
