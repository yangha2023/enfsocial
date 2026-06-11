import svgPaths from "./svg-mn8e0uc6qr";
import imgUserProfile from "./f578f9c2a181ef669150341163e63e6e9da01878.png";
import img3DGlossyHouseIconOrSocialNetworkNodeVibrantColors from "./483b6ee700e426885e53fc8e64b4d9a3593d3210.png";
import imgContainer from "./bc76a5ad060e99f0d569b602ea9758eab7f60907.png";
import imgContainer1 from "./5afa22aa1f78c881ecaf491ed859b41916969a2f.png";
import imgContainer2 from "./5992498aa5e3d38b3f0a911f4cb6a821891bfae8.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[32px] w-[102.189px]">
        <p className="leading-[48px]">Profile</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.501 20">
        <g id="Img">
          <path d={svgPaths.p35c66700} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Img />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[80px]" data-name="Container">
      <UserProfile />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-[148.336px]">
        <p className="leading-[32px]">Jane Cooper</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Show profile</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.336px]" data-name="Container">
      <Heading1 />
      <LinkMargin />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="Img">
          <path d={svgPaths.p2a458f00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-[10px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[56.781px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Margin />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pt-[48px] px-[24px] relative size-full">
        <Container1 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[165.019px]">
        <p className="leading-[24px]">enf social your space</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] tracking-[0.0137px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`It's easy to start earning with your`}</p>
        <p className="leading-[20px]">items.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[245px] relative shrink-0 w-[245px]" data-name="Container">
      <Heading2 />
      <Container10 />
    </div>
  );
}

function Component3DGlossyHouseIconOrSocialNetworkNodeVibrantColors() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[48px]" data-name="3d glossy house icon or social network node, vibrant colors">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3DGlossyHouseIconOrSocialNetworkNodeVibrantColors} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[48px]" data-name="Container">
      <Component3DGlossyHouseIconOrSocialNetworkNodeVibrantColors />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container9 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] w-full">
        <p className="leading-[28px]">Settings</p>
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g id="Img">
          <path d={svgPaths.p38438700} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[3.25px] relative shrink-0 w-[24px]" data-name="Container">
      <Img2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[156.262px]">
        <p className="leading-[24px]">Personal information</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p1ae59100} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[24px]" data-name="Container">
      <Img4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[122.251px]">
        <p className="leading-[24px]">{`Login & security`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Img6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Img">
          <path d={svgPaths.p261a2480} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4.5px] relative shrink-0 w-[24px]" data-name="Container">
      <Img6 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] tracking-[0.0156px] whitespace-nowrap">
        <p className="leading-[24px]">{`Payments & payouts`}</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Img7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Img8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p1c7a5700} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[24px]" data-name="Container">
      <Img8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] tracking-[0.0625px] whitespace-nowrap">
        <p className="leading-[24px]">Translation</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Img9() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container32 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container18 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container23 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container28 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative size-full">
        <Heading3 />
        <Container12 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] w-full">
        <p className="leading-[28px]">Support</p>
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p10358450} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[24px]" data-name="Container">
      <Img10 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] tracking-[-0.0469px] whitespace-nowrap">
        <p className="leading-[24px]">Visit the Help Center</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Img11() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img11 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container38 />
    </div>
  );
}

function Img12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p35b0fe80} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[24px]" data-name="Container">
      <Img12 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] tracking-[-0.0469px] whitespace-nowrap">
        <p className="leading-[24px]">Contact Support</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Img13() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img13 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Img14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p3e99ec80} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[24px]" data-name="Container">
      <Img14 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] tracking-[0.0313px] whitespace-nowrap">
        <p className="leading-[24px]">Give us feedback</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Img15() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img15 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container48 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container39 />
      <div className="bg-[#ddd] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container44 />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative size-full">
        <Heading4 />
        <Container33 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.1094px] whitespace-nowrap">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[24px] underline">Log out</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-full">
        <p className="leading-[16px]">Version 24.12.01</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[24px] px-[24px] relative size-full">
        <Button />
        <Container49 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[96px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Container8 />
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[28.205px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[33.294px]">
        <p className="leading-[15px]">Search</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[28px] relative shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[0.4102px] whitespace-nowrap">
        <p className="leading-[15px]">Add</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[0.0684px] whitespace-nowrap">
        <p className="leading-[15px]">Calendar</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[22px] relative shrink-0" data-name="Container">
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[10px] tracking-[0.2051px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
      <div className="absolute bg-[#222] bottom-[-20px] h-[2px] left-[-0.06px] w-[32px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[39.9px] h-[80px] items-center left-0 pl-[27.92px] pr-[27.94px] right-0" data-name="Nav">
      <div aria-hidden className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container50 />
      <Container53 />
      <Container55 />
      <Container58 />
      <Container60 />
    </div>
  );
}

export default function AccountScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Account Screen">
      <Container />
      <Nav />
    </div>
  );
}