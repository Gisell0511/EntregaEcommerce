import React from "react";
import TextGeneral from "../atoms/TextGeneral";
import ListButtom from "../atoms/ListButtom";
import SearchBar from "../molecules/SearchBar";
import { User, ShoppingCart } from "phosphor-react"; // Importamos los íconos

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <ListButtom />
        <TextGeneral texto={"MegaMart"} />
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <SearchBar />
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 transition-colors">
          <User  size={20} weight="light"  />
          <span className="text-sm hidden sm:inline">Sign Up/Sign In</span>
        </button>
        
        <button className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 transition-colors">
          <ShoppingCart size={20} weight="light" />
          <span className="text-sm hidden sm:inline">Cart</span>
        </button>
      </div>
    </div>
  );
}

export default Header;