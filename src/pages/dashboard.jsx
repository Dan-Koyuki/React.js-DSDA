import React, { useState, useEffect } from "react";
import SideBar from "../navigation/sidebar";
import Header from "../navigation/header";
import "../customScrollbar.css";
import Content from "../component/desktop/content";
import Mobile from "../component/mobile/mobileview";
import TambahJabatan1 from "../component/pop-up/tambahJabatan";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for tablets
    };

    handleResize(); // Check the initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <Mobile />;
  }

  const togglePopUp = () => {
    setModalActive(!modalActive)
  }

  return (
    <div className="flex flex-col h-screen">
      <div className={`sticky top-0 z-50 w-full`}>
        <Header />
      </div>
      <div className="flex flex-row h-full overflow-hidden">
        <div
          className={`relative w-60 h-full overflow-y-auto overflow-x-hidden scrollbar-custom`}
          style={{ "--scrollbar-track-color": "#add8e6" }}
        >
          <SideBar onSelectMenuItem={setActiveMenu} onPopUpSetting={togglePopUp}/>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-custom p-4">
          {/* Content */}
          <Content selectedMenuItem={activeMenu} />
        </div>
      </div>

      {/* Pop-up Modal */}
      {modalActive && <TambahJabatan1 modalSetting={modalActive} closeFunc={togglePopUp}/>}
    </div>
  );
};

export default Dashboard;
