import React from "react";
import { MagnifyingGlass, ListBullets } from "phosphor-react";

function SearchBar({ placeholder = "Search essentials, groceries and more..." }) {
  return (
    <div className="flex items-center px-4 py-3 rounded-md bg-blue-50 min-w-[300px] w-full max-w-md mx-auto">
      <MagnifyingGlass size={22} className="text-cyan-600 mr-3" />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent text-gray-600 text-sm"
      />

      <ListBullets size={28} className="text-cyan-600 ml-3" />
    </div>
  );
}

export default SearchBar;