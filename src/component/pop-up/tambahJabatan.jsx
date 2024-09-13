import React, { useState } from "react";

const TambahJabatan1 = ({ modalSetting, closeFunc }) => {

    const close = () => {
        closeFunc();
    };

    return (
        <dialog
            className={`fixed inset-0 z-10 flex flex-col items-center rounded-2xl text-white ${modalSetting ? "block" : "hidden"
                }`}
            aria-modal={true}
        >
            <div className="flex flex-col bg-gray-700 py-2 px-6 rounded-lg border-white border-2">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-center text-2xl font-bold">Tambah Jabatan</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 py-2">
                <input
                    type="text"
                    name="namaJabatan"
                    className="border-gray-200 border-2 rounded-md px-2 py-1 text-gray-400"
                    placeholder="Masukkan Nama Jabatan"
                />
            </div>

            <div className="flex flex-row justify-between w-full px-4 py-2">
                <button
                    onClick={close}
                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none font-bold bg-red-600 text-white"
                >
                    Batal
                </button>
                <button
                    onClick={close}
                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none font-bold bg-green-600 text-white"
                >
                    Tambahkan
                </button>
            </div>
        </dialog>
    );
};

export default TambahJabatan1;