import React, { useState } from "react";
import TugasPokok from "./form-content/tugasPokok";
import DataJabatan from "./form-content/dataJabatan";
import HasilKerja from "./form-content/hasilKerja";
import HasilKerjaAdds from "./form-content/adds-on/hasilKerjaAdd";

const Content = () => {
  const [activeForm, setActiveForm] = useState("DJ");
  const [hasilKerjaData, setHasilKerjaData] = useState([]);
  const [dataJabatan, setDataJabatan] = useState([]);

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  const handleTambahHasilKerja = (data) => {
    setHasilKerjaData((prevData) => [...prevData, data]);
  };

  const handleDataJabatan = (data) => {
    setDataJabatan((prevData) => [...prevData, data]);
  }

  const FormComponents = {
    DJ: <DataJabatan onSubmit={(data) => handleDataJabatan(data)} />,
    TP: <TugasPokok />,
    HK: <HasilKerja onTambah={(data) => handleTambahHasilKerja(data)} />,
    BK: null,
    PK: null,
    TJ: null,
    W: null,
    KJ: null,
    RB: null,
    SJ: null,
    P: null,
    Kelas: null,
  };

  const AddsOnComponent = {
    HK: <HasilKerjaAdds data={hasilKerjaData} />,
    BK: null,
    PK: null,
    TJ: null,
    W: null,
    KJ: null,
    RB: null,
    SJ: null,
    P: null,
    Kelas: null,
  };

  return (
    <div className="flex flex-col mt-4 gap-4">
      <p className="text-5xl">SIAJAK</p>
      <div className="border-b-2"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap flex-row gap-2 text-white font-medium">
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("DJ")}
          >
            Data Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("TP")}
          >
            Tugas Pokok
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("HK")}
          >
            Hasil Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("BK")}
          >
            Bahan Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("PK")}
          >
            Perangkat Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("TJ")}
          >
            Tanggung Jawab
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("W")}
          >
            Wewenang
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("KJ")}
          >
            Korelasi Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("RB")}
          >
            Resiko Bahaya
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("SJ")}
          >
            Syarat Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("P")}
          >
            Prestasi yang Diharapkan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("Kelas")}
          >
            Kelas Jabatan
          </button>
          <button className="bg-blue-400 px-4 py-2 rounded-lg">Cetak</button>
        </div>
        <div className="border-b-2"></div>
        <div className="border-2 shadow-2xl">
          <div className="flex flex-col gap-3">
            {FormComponents[activeForm]}
          </div>
        </div>
        {activeForm && activeForm !== "DJ" && activeForm !== "TP" && (
          <div className="border-2 shadow-2xl">
            <div className="flex flex-col gap-3">
              {AddsOnComponent[activeForm]}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
