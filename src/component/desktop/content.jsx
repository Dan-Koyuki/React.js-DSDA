import React, { useState } from "react";
import TugasPokok from "./form-content/tugasPokok";
import DataJabatan from "./form-content/dataJabatan";
import HasilKerja from "./form-content/hasilKerja";
import BahanKerja from "./form-content/bahanKerja";
import PerangkatKerja from "./form-content/perangkatKerja";
import TanggungJawab from "./form-content/tanggungJawab";
import Wewenang from "./form-content/wewenang";
import KorelasiJabatan from "./form-content/korelasiJabatan";
import ResikoBahaya from "./form-content/resikoBahaya";
import HasilKerjaAdds from "./form-content/adds-on/hasilKerjaAdd";
import BahanKerjaAdds from "./form-content/adds-on/bahanKerjaAdd";
import PerangkatKerjaAdds from "./form-content/adds-on/perangkatKerjaAdd";
import TanggungJawabAdds from "./form-content/adds-on/tanggungJawabAdd";
import WewenangAdds from "./form-content/adds-on/wewenangAdd";
import KorelasiJabatanAdds from "./form-content/adds-on/korelasiJabatanAdd";
import ResikoBahayaAdds from "./form-content/adds-on/resikoBahayaAdd";
import Prestasi from "./form-content/prestasi";
import Kelas from "./form-content/kelas";
import SyaratJabatan from "./form-content/syaratJabatan";

const Content = ({ selectedMenuItem }) => {
  const [activeForm, setActiveForm] = useState("DJ");
  const [formData, setFormData] = useState({
    hasilKerjaData: [],
    bahanKerjaData: [],
    perangkatKerjaData: [],
    tanggungJawabData: [],
    wewenangData: [],
    korelasiJabatanData: [],
    resikoBahayaData: [],
  });

  // =========================
  // API RELATED FUNC
  /**
   * RETRIEVE FROM DATABASE
   * @param {*} form
   */
  const handleRetrieveData = (menuName, endpoint) => {
    // TODO: ADD THE ACTUAL FUNCTION
  };
  /**
   * SAVE TO DATABASE
   * @param {*} form
   */
  const handleSaveDatabase = (menuName, data, endpoint) => {
    // TODO: ADD THE ACTUAL FUNCTION
  };
  // =========================

  // =========================
  // FORM RELATED FUNC
  const handleFormChange = (form) => setActiveForm(form);

  const handleDataUpdate = (type, data) =>
    setFormData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], data],
    }));

  // Mapping of keys to display names
  const formDisplayNames = {
    DJ: "Data Jabatan",
    TP: "Tugas Pokok",
    HK: "Hasil Kerja",
    BK: "Bahan Kerja",
    PK: "Perangkat Kerja",
    TJ: "Tanggung Jawab",
    W: "Wewenang",
    KJ: "Korelasi Jabatan",
    RB: "Resiko Bahaya",
    SJ: "Syarat Jabatan",
    P: "Prestasi",
    Kelas: "Kelas",
  };

  const FormComponents = {
    DJ: (
      <DataJabatan onSubmit={(data) => handleDataUpdate("dataJabatan", data)} />
    ),
    TP: <TugasPokok />,
    HK: (
      <HasilKerja
        onTambah={(data) => handleDataUpdate("hasilKerjaData", data)}
      />
    ),
    BK: (
      <BahanKerja
        onTambah={(data) => handleDataUpdate("bahanKerjaData", data)}
      />
    ),
    PK: (
      <PerangkatKerja
        onTambah={(data) => handleDataUpdate("perangkatKerjaData", data)}
      />
    ),
    TJ: (
      <TanggungJawab
        onTambah={(data) => handleDataUpdate("tanggungJawabData", data)}
      />
    ),
    W: <Wewenang onTambah={(data) => handleDataUpdate("wewenangData", data)} />,
    KJ: (
      <KorelasiJabatan
        onTambah={(data) => handleDataUpdate("korelasiJabatanData", data)}
      />
    ),
    RB: (
      <ResikoBahaya
        onTambah={(data) => handleDataUpdate("resikoBahayaData", data)}
      />
    ),
    SJ: <SyaratJabatan />,
    P: <Prestasi />,
    Kelas: <Kelas />,
  };

  const AddsOnComponent = {
    HK: <HasilKerjaAdds data={formData.hasilKerjaData} />,
    BK: <BahanKerjaAdds data={formData.bahanKerjaData} />,
    PK: <PerangkatKerjaAdds data={formData.perangkatKerjaData} />,
    TJ: <TanggungJawabAdds data={formData.tanggungJawabData} />,
    W: <WewenangAdds data={formData.wewenangData} />,
    KJ: <KorelasiJabatanAdds data={formData.korelasiJabatanData} />,
    RB: <ResikoBahayaAdds data={formData.resikoBahayaData} />,
  };

  const renderForm = () => (
    <div className="border-2 shadow-2xl">
      <div className="flex flex-col gap-3">{FormComponents[activeForm]}</div>
    </div>
  );

  const renderAddsOnComponent = () =>
    activeForm &&
    !["DJ", "TP", "SJ", "P", "Kelas"].includes(activeForm) && (
      <div className="border-2 shadow-2xl">
        <div className="flex flex-col gap-3">{AddsOnComponent[activeForm]}</div>
      </div>
    );

  return (
    <div className="flex flex-col mt-4 gap-4">
      <p className="text-5xl">SIAJAK</p>
      <div className="border-b-2"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap flex-row gap-2 text-white font-medium">
          {Object.keys(FormComponents).map((key) => (
            <button
              key={key}
              className="bg-blue-400 px-4 py-2 rounded-lg"
              onClick={() => handleFormChange(key)}
            >
              {formDisplayNames[key]} {/* Display full name */}
            </button>
          ))}
          <button className="bg-blue-400 px-4 py-2 rounded-lg">Cetak</button>
        </div>
        <div className="border-b-2"></div>
        {renderForm()}
        {renderAddsOnComponent()}
      </div>
    </div>
  );
};

export default Content;
