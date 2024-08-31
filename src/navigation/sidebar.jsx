import React from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { IoFileTrayFullSharp } from "react-icons/io5";
// import { MdWater } from "react-icons/md";
// import { FaChartBar, FaChartLine, FaGear } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div
      className={`relative top-0 bg-[#add8e6] min-h-screen w-60 p-2 flex flex-col overflow-y-auto`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col p-3 gap-4">
          <>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">Sekertariat</p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">Bidang Perencanaan Teknik</p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">Bidang Bina Konstruksi</p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">Bidang Bina Operasi dan Pemeliharaan</p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">Bidang Bina Manfaat</p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciliwung
              </p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Cisadea-Cibareno
              </p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citarum
              </p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai
                Cimanuk-Cisanggarung
              </p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citanduy
              </p>
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100">
              <p className="w-3/4">
                UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciwulan-Cilaki
              </p>
              <IoIosArrowForward />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
