import React, { useState } from "react";

const SyaratJabatan = ({ onTambah }) => {
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
        <p className="text-blue-600 font-medium">Syarat Jabatan</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">a. Keterampilan Kerja</p>
          <input
            type="text"
            name="keterampilan Kerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Keterampilan Kerja"
            value={formData.keterampilanKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">b. Bakat Kerja</p>
          <input
            type="text"
            name="bakatKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Bakat Kerja"
            value={formData.bakatKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">c. Temperamen Kerja</p>
          <input
            type="text"
            name="temperamenKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukan Temperamen Kerja"
            value={formData.temperamenKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">d. Minat Kerja</p>
          <input
            type="text"
            name="minatKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Minat Kerja"
            value={formData.minatKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">e. Upaya Fisik</p>
          <input
            type="text"
            name="upayaFisik"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Upaya Fisik"
            value={formData.upayaFisik}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">f. Kondisi Fisik</p>
          <input
            type="text"
            name="kondisiFisik"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Kondisi Fisik"
            value={formData.kondisiFisik}
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

export default SyaratJabatan;
