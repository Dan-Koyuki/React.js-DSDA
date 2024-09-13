import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BahanKerjaAdds = ({ data, onDelete }) => {
  return (
    <div>
      <div className="bg-gray-100 p-4 border-b-2">
        <p className="text-blue-600 font-medium">Bahan Kerja</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Uraian Bahan Kerja</th>
              <th className="px-4 py-2">Penggunaan Dalam Tugas</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.uraianBahanKerja}</td>
                <td className="border px-4 py-2">{item.penggunaanDalamTugas}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BahanKerjaAdds;
