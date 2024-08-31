import React, { useState } from "react";

const DataJabatan = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    namaJabatan: "",
    kodeJabatan: "",
    unitKerja: "",
    jptUtama: "",
    jptMadya: "",
    jptPratama: "",
    administrator: "",
    pengawas: "",
    pelaksana: "",
    jabatanFungsional: "",
    ikhtisarJabatan: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      namaJabatan: "",
      kodeJabatan: "",
      unitKerja: "",
      jptUtama: "",
      jptMadya: "",
      jptPratama: "",
      administrator: "",
      pengawas: "",
      pelaksana: "",
      jabatanFungsional: "",
      ikhtisarJabatan: "",
    });
    console.log(formData);
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Data Jabatan</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Nama Jabatan</p>
          <input
            type="text"
            name="namaJabatan"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Nama Jabatan"
            value={formData.namaJabatan}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Kode Jabatan</p>
          <input
            type="text"
            name="kodeJabatan"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Kode Jabatan"
            value={formData.kodeJabatan}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Unit Kerja</p>
          <input
            type="text"
            name="unitKerja"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Unit Kerja"
            value={formData.unitKerja}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">JPT Utama</p>
          <input
            type="text"
            name="jptUtama"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan JPT Utama"
            value={formData.jptUtama}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">JPT Madya</p>
          <input
            type="text"
            name="jptMadya"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan JPT Madya"
            value={formData.jptMadya}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">JPT Pratama</p>
          <input
            type="text"
            name="jptPratama"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan JPT Pratama"
            value={formData.jptPratama}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">Administrator</p>
          <input
            type="text"
            name="Administrator"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Administrator"
            value={formData.administrator}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">Pengawas</p>
          <input
            type="text"
            name="pengawas"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Pengawas"
            value={formData.pengawas}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">Pelaksana</p>
          <input
            type="text"
            name="pelaksana"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Pelaksana"
            value={formData.pelaksana}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <p className="font-medium text-gray-500 text-lg">
            Jabatan Fungsional
          </p>
          <input
            type="text"
            name="jabatanFungsional"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Jabatan Fungsional"
            value={formData.jabatanFungsional}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-500 text-lg">Ikhtisar Jabatan</p>
          <input
            type="text"
            name="ikhtisarJabatan"
            className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
            placeholder="Masukkan Ikhtisar Jabatan"
            value={formData.ikhtisarJabatan}
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

export default DataJabatan;
