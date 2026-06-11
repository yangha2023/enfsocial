import { useState } from "react";
import { BottomNav, type Tab } from "./components/BottomNav";
import { HomeScreen } from "./components/HomeScreen";
import { SearchScreen } from "./components/SearchScreen";
import { DetailScreen } from "./components/DetailScreen";
import { AccountScreen } from "./components/AccountScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showDetail, setShowDetail] = useState(false);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setShowDetail(false);
  };

  const renderScreen = () => {
    if (showDetail) {
      return <DetailScreen onBack={() => setShowDetail(false)} />;
    }
    switch (activeTab) {
      case "home":
        return <HomeScreen onProductClick={() => setShowDetail(true)} onSearchClick={() => setActiveTab("search")} />;
      case "search":
        return <SearchScreen />;
      case "add":
        return (
          <div className="flex-1 min-h-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="text-5xl mb-4">+</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#222", fontSize: 18 }}>
                Add Listing
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#6b7280", fontSize: 14, marginTop: 8 }}>
                Create a new listing to sell your items
              </p>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="flex-1 min-h-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="text-5xl mb-4">📅</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#222", fontSize: 18 }}>
                Calendar
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#6b7280", fontSize: 14, marginTop: 8 }}>
                View your upcoming reservations
              </p>
            </div>
          </div>
        );
      case "profile":
        return <AccountScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-white flex flex-col">
      <div className="flex-1 min-h-0 flex flex-col">
        {renderScreen()}
      </div>
      {!showDetail && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
