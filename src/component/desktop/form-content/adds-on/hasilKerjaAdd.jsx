import React from "react";

const HasilKerjaAdds = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Hasil Kerja</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Hasil Kerja</th>
              <th className="px-4 py-2">Satuan Hasil</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.hasilKerja}</td>
                <td className="border px-4 py-2">{item.satuanHasil}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilKerjaAdds;
