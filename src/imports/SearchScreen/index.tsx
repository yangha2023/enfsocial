import svgPaths from "./svg-ripzfygqqv";
import imgAestheticInteriorDesignMinimalFurnitureBrightLivingRoom from "./e1fd0aaea7ad3eccc082001e4d6dc66c0611a8af.png";
import imgHighEndTechGadgetsSleekSellingFuturisticDeskSetup from "./43a7f569855bf6754a48534edc77c0c73a07bedb.png";
import imgLuxuryFashionEditorialMinimalClothingHighFashionBackground from "./b9dcfcb0e1ae383d23d51d9ec7f24c7e98f7e28c.png";

import imgGamingSetupWithNeonLightsMechanicalKeyboardProfessionalGamerVibe from "./67f40c2e24a43234b316a50d57d2e81ec74e57b3.png";
import imgArtGallerySpaceModernPaintingsMinimalistExhibition from "./e6a65c03822783b6736c64ddb84c5876fecbdfe9.png";
import imgContainer from "./bc76a5ad060e99f0d569b602ea9758eab7f60907.png";
import imgContainer1 from "./5afa22aa1f78c881ecaf491ed859b41916969a2f.png";
import imgContainer2 from "./5992498aa5e3d38b3f0a911f4cb6a821891bfae8.png";

function Img() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0023">
        <g id="Img">
          <path d={svgPaths.p1d73a600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ff385c] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Margin">
      <Background />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[20px]">Where to?</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Anywhere • Any time • Add guests</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Img">
          <path d={svgPaths.p1f100680} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[9999px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Img1 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] h-[64px] relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Margin />
          <Container1 />
          <Border />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[24px] px-[16px] relative size-full">
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Recent searches</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[12px] text-center w-[47.197px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">Clear all</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p233da500} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-[158.454px]">
        <p className="leading-[20px]">Modern minimalist sofa</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.0703px] whitespace-nowrap">
        <p className="leading-[16px]">Furniture • 2 hours ago</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[158.454px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container8 />
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p233da500} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img3 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] tracking-[-0.0273px] whitespace-nowrap">
        <p className="leading-[20px]">Seoul Art Districts</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[-0.0117px] whitespace-nowrap">
        <p className="leading-[16px]">Events • Yesterday</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[123px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Container13 />
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p233da500} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img4 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] tracking-[0.0273px] whitespace-nowrap">
        <p className="leading-[20px]">Vintage Leica M6</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.0234px] whitespace-nowrap">
        <p className="leading-[16px]">Selling • 3 days ago</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Container18 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container11 />
      <Container16 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] w-full">
        <p className="leading-[28px]">Browse by category</p>
      </div>
    </div>
  );
}

function AestheticInteriorDesignMinimalFurnitureBrightLivingRoom() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="aesthetic interior design, minimal furniture, bright living room">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.58%] left-0 max-w-none top-[-14.79%] w-full" src={imgAestheticInteriorDesignMinimalFurnitureBrightLivingRoom} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.0625px] whitespace-nowrap">
        <p className="leading-[24px]">Furniture</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container23 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col h-[120px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <AestheticInteriorDesignMinimalFurnitureBrightLivingRoom />
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container22 />
    </div>
  );
}

function HighEndTechGadgetsSleekSellingFuturisticDeskSetup() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="high-end tech gadgets, sleek electronics, futuristic desk setup">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.58%] left-0 max-w-none top-[-14.79%] w-full" src={imgHighEndTechGadgetsSleekSellingFuturisticDeskSetup} />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Selling</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container25 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col h-[120px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <HighEndTechGadgetsSleekSellingFuturisticDeskSetup />
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container24 />
    </div>
  );
}

function LuxuryFashionEditorialMinimalClothingHighFashionBackground() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="luxury fashion editorial, minimal clothing, high fashion background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.58%] left-0 max-w-none top-[-14.79%] w-full" src={imgLuxuryFashionEditorialMinimalClothingHighFashionBackground} />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.0625px] whitespace-nowrap">
        <p className="leading-[24px]">Fashion</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container27 />
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col h-[120px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <LuxuryFashionEditorialMinimalClothingHighFashionBackground />
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container26 />
    </div>
  );
}



function GamingSetupWithNeonLightsMechanicalKeyboardProfessionalGamerVibe() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="gaming setup with neon lights, mechanical keyboard, professional gamer vibe">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.58%] left-0 max-w-none top-[-14.79%] w-full" src={imgGamingSetupWithNeonLightsMechanicalKeyboardProfessionalGamerVibe} />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[24px]">Gaming</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container31 />
    </div>
  );
}

function OverlayShadow4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col h-[120px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <GamingSetupWithNeonLightsMechanicalKeyboardProfessionalGamerVibe />
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container30 />
    </div>
  );
}

function ArtGallerySpaceModernPaintingsMinimalistExhibition() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="art gallery space, modern paintings, minimalist exhibition">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.58%] left-0 max-w-none top-[-14.79%] w-full" src={imgArtGallerySpaceModernPaintingsMinimalistExhibition} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">{`Art & Design`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container33 />
    </div>
  );
}

function OverlayShadow5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col h-[120px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <ArtGallerySpaceModernPaintingsMinimalistExhibition />
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container32 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[392px] relative shrink-0 w-full" data-name="Container">
      <OverlayShadow />
      <OverlayShadow1 />
      <OverlayShadow2 />
      <OverlayShadow4 />
      <OverlayShadow5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container21 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[96px] px-[24px] relative size-full">
        <Section />
        <Section1 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="opacity-40 relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[28.205px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[10px] tracking-[0.1367px] whitespace-nowrap">
        <p className="leading-[15px]">Search</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[28px] relative shrink-0" data-name="Container">
      <Container38 />
      <div className="absolute bg-[#222] bottom-[-20px] h-[2px] left-[1.17px] w-[32px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[0.4102px] whitespace-nowrap">
        <p className="leading-[15px]">Add</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[0.0684px] whitespace-nowrap">
        <p className="leading-[15px]">Calendar</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[22px] relative shrink-0" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[0.1563px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[39.9px] h-[80px] items-center left-0 pl-[27.95px] pr-[27.98px] right-0" data-name="Nav">
      <div aria-hidden className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container34 />
      <Container37 />
      <Container39 />
      <Container42 />
      <Container44 />
    </div>
  );
}

export default function SearchScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Search Screen">
      <Header />
      <Main />
      <Nav />
    </div>
  );
}