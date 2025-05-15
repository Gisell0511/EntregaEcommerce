import { CaretDown } from "phosphor-react";

function ButtonDropdown({ label, options, isOpen, onToggle }) {

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={onToggle}
        className="flex items-center justify-between gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-100"
      >
        {label}
        <CaretDown size={20} className="text-blue-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-10">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={option.action}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
