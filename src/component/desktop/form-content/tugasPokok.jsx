import React, { useState } from "react";

const TugasPokok = () => {
  const [formData, setFormData] = useState({
    uraianTugasTerkait: "-",
    uraianTugas: "",
    hasilKerja: "",
    satuanHasilKerja: "",
    bebanKerjaTahun: "",
    waktuPenyelesaian: "",
    waktuKerjaEfektif: "1250 (dalam jam)", // default value
    kebutuhanPegawai: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setFormData({
      uraianTugasTerkait: "-",
      uraianTugas: "",
      hasilKerja: "",
      satuanHasilKerja: "",
      bebanKerjaTahun: "",
      waktuPenyelesaian: "",
      waktuKerjaEfektif: "1250 (dalam jam)", // default value
      kebutuhanPegawai: "",
    });
    console.log(formData);
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Tugas Pokok</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Uraian Tugas Terkait
          </p>
          <select
            name="uraianTugasTerkait"
            className="border-gray-200 border-2 rounded-md p-1 text-gray-400"
            value={formData.uraianTugasTerkait}
            onChange={handleChange}
          >
            <option value="-">Pilih Uraian Tugas</option>
            <option value="Placeholder1">Placeholder</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Tuliskan Uraian Tugas
          </p>
          <textarea
            name="uraianTugas"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Ketik Uraian Tugas Disini (maks. 350 Karakter)"
            value={formData.uraianTugas}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Hasil Kerja</p>
          <textarea
            name="hasilKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Hasil Kerja (maks. 350 Karakter)"
            value={formData.hasilKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Satuan Hasil Kerja
          </p>
          <input
            type="text"
            name="satuanHasilKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Satuan Hasil Kerja"
            value={formData.satuanHasilKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Beban Kerja 1 Tahun
          </p>
          <input
            type="number"
            name="bebanKerjaTahun"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Beban Kerja 1 Tahun"
            value={formData.bebanKerjaTahun}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Waktu Penyelesaian (jam/menit) *
          </p>
          <input
            type="text"
            name="waktuPenyelesaian"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Waktu Penyelesaian"
            value={formData.waktuPenyelesaian}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">
            Waktu Kerja Efektif 1 tahun
          </p>
          <div className="flex flex-row gap-8 items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="waktuKerjaEfektif"
                className="border-gray-200 border-2 rounded-md px-2 py-1"
                value="1250 (dalam jam)"
                checked={formData.waktuKerjaEfektif === "1250 (dalam jam)"}
                onChange={handleChange}
              />
              <span className="ml-1 text-gray-400">1250 (dalam jam)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="waktuKerjaEfektif"
                className="border-gray-200 border-2 rounded-md px-2 py-1"
                value="75000 (dalam menit)"
                checked={formData.waktuKerjaEfektif === "75000 (dalam menit)"}
                onChange={handleChange}
              />
              <span className="ml-1 text-gray-400">75000 (dalam menit)</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Kebutuhan Pegawai</p>
          <input
            type="text"
            name="kebutuhanPegawai"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Kebutuhan Pegawai"
            value={formData.kebutuhanPegawai}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="bg-blue-600 rounded-md py-2 px-4 mt-2 text-white font-medium"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TugasPokok;
