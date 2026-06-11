import imgHomeIcon from "../../imports/HomeScreen/bc76a5ad060e99f0d569b602ea9758eab7f60907.png";
import imgAddIcon from "../../imports/HomeScreen/5afa22aa1f78c881ecaf491ed859b41916969a2f.png";
import imgProfileIcon from "../../imports/HomeScreen/5992498aa5e3d38b3f0a911f4cb6a821891bfae8.png";

export type Tab = "home" | "search" | "add" | "calendar" | "profile";

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs: { id: Tab; label: string; icon?: string }[] = [
    { id: "home", label: "Home", icon: imgHomeIcon },
    { id: "search", label: "Search" },
    { id: "add", label: "Add", icon: imgAddIcon },
    { id: "calendar", label: "Calendar" },
    { id: "profile", label: "Profile", icon: imgProfileIcon },
  ];

  return (
    <div className="h-20 bg-white border-t border-[#ddd] flex items-center justify-around px-4 shrink-0 z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center gap-1 relative min-w-[48px]"
          >
            {tab.icon ? (
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-6 h-6 object-cover"
                style={{ opacity: isActive ? 1 : 0.4 }}
              />
            ) : null}
            <span
              className="text-[10px] leading-[15px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: isActive ? 700 : 400,
                color: isActive ? "#222" : "#9ca3af",
              }}
            >
              {tab.label}
            </span>
            {isActive && (
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 h-0.5 w-8 bg-[#222]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
