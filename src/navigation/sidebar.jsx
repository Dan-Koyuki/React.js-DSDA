import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TambahJabatan1 } from "../component/pop-up/tambahJabatan"

const SideBar = ({onSelectMenuItem, onPopUpSetting}) => {
  // State to track which menu item is open level 1
  const [openIndex, setOpenIndex] = useState(null);
  // State to track which menu item is open level 2
  const [openIndex2, setOpenIndex2] = useState(null);
  // State to track the active menu item
  const [activeIndex, setActiveIndex] = useState(null);
  // State to track pop-up modal

  const menuStructure = [
    {
      title: "Sekertariat",
      submenus: [
        {
          title: "Sub Sekertariat 1",
          submenus: [{ title: "ahahhaha" }],
        },
        {
          title: "Sub Sekertariat 2",
        },
      ],
    },
    {
      title: "Bidang Perencanaan Teknik",
      submenus: [
        {
          title: "Sub Perencanaan 1",
        },
        {
          title: "Sub Perencanaan 2",
        },
      ],
    },
    {
      title: "Bidang Bina Konstruksi",
      submenus: [
        {
          title: "Sub Bina Konstruksi 1",
        },
        {
          title: "Sub Bina Konstruksi 2",
        },
      ],
    },
    {
      title: "Bidang Bina Operasi dan Pemeliharaan",
      submenus: [
        {
          title: "Sub Bina Operasi 1",
        },
        {
          title: "Sub Bina Operasi 2",
        },
      ],
    },
    {
      title: "Bidang Bina Manfaat",
      submenus: [
        {
          title: "Sub Bina Manfaat 1",
        },
        {
          title: "Sub Bina Manfaat 2",
        },
      ],
    },
    {
      title: "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciliwung",
      submenus: [
        {
          title: "Sub UPTD Ciliwung 1",
        },
        {
          title: "Sub UPTD Ciliwung 2",
        },
      ],
    },
    {
      title: "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Cisadea-Cibareno",
      submenus: [
        {
          title: "Sub UPTD Cisadea 1",
        },
        {
          title: "Sub UPTD Cisadea 2",
        },
      ],
    },
    {
      title: "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citarum",
      submenus: [
        {
          title: "Sub UPTD Citarum 1",
        },
        {
          title: "Sub UPTD Citarum 2",
        },
      ],
    },
    {
      title:
        "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Cimanuk-Cisanggarung",
      submenus: [
        {
          title: "Sub UPTD Cimanuk 1",
        },
        {
          title: "Sub UPTD Cimanuk 2",
        },
      ],
    },
    {
      title: "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citanduy",
      submenus: [
        {
          title: "Sub UPTD Citanduy 1",
        },
        {
          title: "Sub UPTD Citanduy 2",
        },
      ],
    },
    {
      title: "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciwulan-Cilaki",
      submenus: [
        {
          title: "Sub UPTD Ciwulan 1",
        },
        {
          title: "Sub UPTD Ciwulan 2",
        },
      ],
    },
  ];

  // Toggle the open state of the clicked menu item
  const toggleMenu = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Set the active menu item
  const handleActiveMenu = (index, menuName) => {
    setActiveIndex(index);
    onSelectMenuItem(menuName);
  };

  return (
    <div
      className={`relative top-0 bg-[#add8e6] min-h-screen w-60 p-2 flex flex-col overflow-y-auto`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col p-3 gap-4">
          <div className="flex flex-row justify-between border-b-[1px] border-gray-100 font-bold">
            <button className="w-3/4" onClick={onPopUpSetting}>Tambah Jabatan</button>
          </div>
          {menuStructure && (
            <ul>
              {menuStructure.map((item, index) => (
                <li key={index} className="py-2">
                  <div
                    className={`flex flex-row items-center justify-between border-b-[1px] border-gray-100 cursor-pointer ${
                      activeIndex === index
                        ? "bg-blue-400 rounded-lg font-bold px-2"
                        : ""
                    }`}
                    onClick={() => {
                      toggleMenu(index);
                      handleActiveMenu(index, item.title);
                    }}
                  >
                    <p className="w-3/4">{item.title}</p>
                    {openIndex === index ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </div>
                  {openIndex === index && item.submenus && (
                    <>
                      <div className="pl-4 py-2 flex flex-row justify-between font-bold">
                        <button className="w-3/4 text-wrap" onClick={() => (console.log('test'))}>Tambah sub-Jabatan</button>
                      </div>
                      <ul className="pl-4 py-2">
                        {item.submenus.map((submenu, subIndex) => (
                          <li key={subIndex} className="py-1 cursor-pointer">
                            <div
                              className={`flex flex-row items-center justify-between ${
                                activeIndex === `${index}-${subIndex}`
                                  ? "bg-blue-400 rounded-lg px-2"
                                  : ""
                              }`}
                              onClick={() =>
                                handleActiveMenu(
                                  `${index}-${subIndex}`,
                                  submenu.title
                                )
                              }
                            >
                              <p className="w-3/4">{submenu.title}</p>
                              {submenu.submenus &&
                                (openIndex === index ? (
                                  <IoIosArrowDown />
                                ) : (
                                  <IoIosArrowForward />
                                ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
