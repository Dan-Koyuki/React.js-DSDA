import React, { useState } from "react";

const KorelasiJabatan = ({ onTambah }) => {
  const [formData, setFormData] = useState({
    instansi: "",
    dalamHal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onTambah(formData);
    setFormData({ instansi: "", dalamHal: "",}); // Clear form after adding
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Korelasi Jabatan</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Nama Jabatan</p>
          <input
            type="text"
            name="namaJabatan"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Unit Kerja/Instansi"
            value={formData.namaJabatan}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Unit Kerja/Instansi</p>
          <input
            type="text"
            name="instansi"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Unit Kerja/Instansi"
            value={formData.instansi}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Dalam Hal</p>
          <input
            type="text"
            name="dalamHal"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Dalam Hal"
            value={formData.dalamHal}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-4">
          <button
            className="bg-gray-600 rounded-md py-2 px-4 mt-2 text-white font-medium"
            onClick={handleSubmit}
          >
            Tambah
          </button>
          <button
            className="bg-blue-600 rounded-md py-2 px-4 mt-2 text-white font-medium"
            onClick={() => console.log(formData)}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default KorelasiJabatan;
