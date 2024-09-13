import React, { useState } from "react";

const BahanKerja = ({ onTambah }) => {
  const [formData, setFormData] = useState({
    uraianBahanKerja: "",
    penggunaanDalamTugas: "",
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
    setFormData({ uraianBahanKerja: "", penggunaanDalamTugas: "" }); // Clear form after adding
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Bahan Kerja</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Uraian Bahan Kerja</p>
          <input
            type="text"
            name="uraianBahanKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Uraian Bahan Kerja"
            value={formData.uraianBahanKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Penggunaan Dalam Tugas</p>
          <input
            type="text"
            name="penggunaanDalamTugas"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Penggunaan Dalam Tugas"
            value={formData.penggunaanDalamTugas}
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

export default BahanKerja;
