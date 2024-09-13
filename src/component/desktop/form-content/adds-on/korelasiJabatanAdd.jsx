import React from "react";

const KorelasiJabatanAdds = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Korelasi Jabatan</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Nama Jabatan</th>
              <th className="px-4 py-2">Unit Kerja/Instansi</th>
              <th className="px-4 py-2">Dalam Hal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.namaJabatan}</td>
                <td className="border px-4 py-2">{item.instansi}</td>
                <td className="border px-4 py-2">{item.dalamHal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KorelasiJabatanAdds;
