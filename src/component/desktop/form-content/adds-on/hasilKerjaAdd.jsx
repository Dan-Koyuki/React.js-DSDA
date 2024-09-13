import React from "react";
import { MdDelete } from "react-icons/md";

const HasilKerjaAdds = ({ data, onDelete}) => {
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
              <th className="px-4 py-2 w-1/12">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.hasilKerja}</td>
                <td className="border px-4 py-2">{item.satuanHasil}</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  {!item.deleteStatus ? (
                    <MdDelete
                      className=" border border-gray-300 rounded-md cursor-pointer"
                      size={25}
                      onClick={() => onDelete(index)}
                    />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilKerjaAdds;
