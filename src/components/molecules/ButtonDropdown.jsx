import React, { useState } from "react";
import { CaretDown } from "phosphor-react";

function ButtonDropdown({ label, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none active:outline-none"
      >
        {label}
        <CaretDown size={20} className="text-blue-500" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none active:outline-none whitespace-nowrap"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ButtonDropdown;
