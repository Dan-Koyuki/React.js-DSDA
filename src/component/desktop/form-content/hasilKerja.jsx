import React, { useState } from "react";

const HasilKerja = ({ onTambah }) => {
  const [formData, setFormData] = useState({
    hasilKerja: "",
    satuanHasil: "",
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
    setFormData({ hasilKerja: "", satuanHasil: "" }); // Clear form after adding
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Hasil Kerja</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Hasil Kerja</p>
          <input
            type="text"
            name="hasilKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Nama Jabatan"
            value={formData.hasilKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Satuan Hasil</p>
          <input
            type="text"
            name="satuanHasil"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Kode Jabatan"
            value={formData.satuanHasil}
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

export default HasilKerja;
