import React from "react";

function Modal() {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center text-green-500 text-2xl">
              Обновлено!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
