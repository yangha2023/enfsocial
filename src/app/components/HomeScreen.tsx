import { useState } from "react";
import svgPaths from "../../imports/HomeScreen/svg-5zzbctt38b";
import imgTechGadget from "../../imports/HomeScreen/mankiw.jpg";
import imgSofa from "../../imports/HomeScreen/32c36f7b95aa409402cdd2b8e06e547616656d97.png";
import imgCamera from "../../imports/HomeScreen/0b9bbe76d77b4ab64b8d7687cb48af5d186ec600.png";

interface HomeScreenProps {
  onProductClick: () => void;
  onSearchClick: () => void;
}



const products = [
  {
    id: 1,
    image: imgTechGadget,
    badge: "New Arrival",
    badgeBg: "bg-white",
    badgeText: "text-[#222]",
    title: 'Principles of Economics',
    subtitle: "Mankiw",
    price: "₩39,000",
    rating: "4.9",
    heartFilled: false,
    category: "Trending",
  },
  {
    id: 2,
    image: imgSofa,
    badge: "Best Seller",
    badgeBg: "bg-[#ff385c]",
    badgeText: "text-white",
    title: "Velvet Modular Sofa",
    subtitle: "Forest Green, 3-seater modular unit",
    price: "₩840,000",
    rating: "4.8",
    heartFilled: true,
    category: "Community",
  },
  {
    id: 3,
    image: imgCamera,
    badge: "Rare Find",
    badgeBg: "bg-white",
    badgeText: "text-[#222]",
    title: "Leica M6 Film Camera",
    subtitle: "Perfect condition, original leather case",
    price: "₩3,200,000",
    rating: "5.0",
    heartFilled: false,
    category: "Selling",
  },
];


export function HomeScreen({ onProductClick, onSearchClick }: HomeScreenProps) {
  const [activeCategory, setActiveCategory] = useState("Trending");

  const categories = [
    { label: "Trending", svgKey: "pdfa2d00" as const },
    { label: "Community", svgKey: "p3da87b80" as const },
    { label: "Fashion", svgKey: "p1da33e00" as const },
    { label: "Selling", svgKey: "p13ac2a80" as const },
    { label: "Gaming", svgKey: "p8bff180" as const },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-[#ddd]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-3">
          <span
            className="text-[24px] text-[#222]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            enf social
          </span>
          <div className="flex items-center gap-4">
            {/* Bell icon */}
            <div className="w-[17.5px] h-5">
              <svg fill="none" viewBox="0 0 17.501 20" className="w-full h-full">
                <path d={svgPaths.p35c66700} fill="#222" />
              </svg>
            </div>
            {/* Chat icon */}
            <div className="w-5 h-5">
              <svg fill="none" viewBox="0 0 20 20" className="w-full h-full">
                <path d={svgPaths.p3452fe80} fill="#222" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-3">
          <button onClick={onSearchClick} className="w-full flex items-center h-16 bg-white rounded-full border border-[#ddd] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.05)] px-6">
            <div className="w-10 h-10 rounded-full bg-[#ff385c] flex items-center justify-center mr-3 shrink-0">
              <svg fill="none" viewBox="0 0 16 16.0023" className="w-4 h-4">
                <path d={svgPaths.p1d73a600} fill="white" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-[14px] text-[#222] truncate"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Search enf social
              </p>
            </div>
            <div className="p-2 border border-[#ddd] rounded-full ml-2 shrink-0">
              <svg fill="none" viewBox="0 0 14 14" className="w-3.5 h-3.5">
                <path d={svgPaths.p1f100680} fill="#222" />
              </svg>
            </div>
          </button>
        </div>

        {/* Category tabs */}
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex items-end h-20 px-4 gap-8 min-w-max">
            {categories.map((cat) => {
              const isActive = cat.label === activeCategory;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex flex-col items-center gap-2 pb-4 relative shrink-0 ${isActive ? "border-b-2 border-[#222]" : ""
                    }`}
                >
                  <svg
                    fill="none"
                    viewBox={
                      cat.label === "Trending"
                        ? "0 0 15.75 18.0009"
                        : cat.label === "Community"
                          ? "0 0 22.5 18"
                          : cat.label === "Fashion"
                            ? "0 0 22.5004 18"
                            : cat.label === "Selling"
                              ? "0 0 18 18"
                              : "0 0 22.5 18"
                    }
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      d={(svgPaths as Record<string, string>)[cat.svgKey]}
                      fill={isActive ? "#222" : "#6b7280"}
                    />
                  </svg>
                  <span
                    className="text-[12px] whitespace-nowrap"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#222" : "#6b7280",
                    }}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 pb-6">
        <h2
          className="text-[18px] text-[#222] mb-4"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        >
          {activeCategory} 게시글
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {products
            .filter((p) => p.category === activeCategory)
            .map((product) => (
              <button
                key={product.id}
                onClick={onProductClick}
                className="flex flex-col gap-3 text-left col-span-1"
              >
                {/* Image */}
                <div className="relative rounded-[12px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge */}
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full ${product.badgeBg} drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]`}
                  >
                    <span
                      className={`text-[10px] uppercase ${product.badgeText}`}
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  {/* Heart button */}
                  <div className="absolute top-3 right-3 w-5 h-5 drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06)]">
                    <svg fill="none" viewBox="0 0 20 20" className="w-full h-full">
                      <path
                        d={
                          product.heartFilled
                            ? svgPaths.p3c291a00
                            : svgPaths.p1c73fa00
                        }
                        fill={product.heartFilled ? "#FF385C" : "white"}
                      />
                    </svg>
                  </div>
                </div>
                {/* Product info */}
                <div className="w-full">
                  <div className="flex items-start justify-between w-full">
                    <span
                      className="text-[16px] text-[#222] flex-1 pr-1"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {product.title}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <svg fill="none" viewBox="0 0 11.25 10.0011" className="w-[11px] h-[10px]">
                        <path d={svgPaths.p1ba27c00} fill="#222" />
                      </svg>
                      <span
                        className="text-[14px] text-[#222]"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                      >
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[14px] text-[#6b7280] mt-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {product.subtitle}
                  </p>
                  <p
                    className="text-[14px] text-[#222] mt-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {product.price}
                  </p>
                </div>
              </button>
            ))}
          {products.filter((p) => p.category === activeCategory).length === 0 && (
            <div className="col-span-2 py-20 text-center">
              <p className="text-[#6b7280] font-medium">이 카테고리에 게시글이 없습니다.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
