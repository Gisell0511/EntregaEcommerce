import React from "react";
import TextGeneral from "../atoms/TextGeneral";
import ListButtom from "../atoms/ListButtom";
import SearchBar from "../molecules/SearchBar";
import { User, ShoppingCart } from "phosphor-react";
import ClickableLink from "../atoms/ClickableLink";

function Header() {
  return (
    <div className="flex flex-col md:flex-row sm:items-center sm:justify-between p-4 gap-4 bg-white shadow-sm">

      {/* Fila superior: menú y logo (también se ve en mobile) */}
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <ListButtom />
        <TextGeneral texto={"MegaMart"} />
      </div>

      {/* Centro: barra de búsqueda */}
      <div className="w-full sm:max-w-xl sm:mx-4">
        <SearchBar />
      </div>

      {/* Derecha: usuario y carrito */}
      <div className="flex items-center justify-end gap-4 sm:gap-6">
        <ClickableLink
          icon={User}
          text={"Sign Up/Sign In"}
          fontSize="text-sm"
          onClick={() => console.log("Clicked Sign Up")}
        />
        <ClickableLink
          icon={ShoppingCart}
          text={"Cart"}
          fontSize="text-sm"
          onClick={() => console.log("Clicked on cart")}
        />
      </div>
    </div>
  );
}


export default Header;
