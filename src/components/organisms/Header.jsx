import React from "react";
import TextGeneral from "../atoms/TextGeneral";
import ListButtom from "../atoms/ListButtom";
import SearchBar from "../molecules/SearchBar";
import { User, ShoppingCart } from "phosphor-react";
import ClickableLink from "../atoms/ClickableLink";

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
        <ClickableLink icon={User} text={"Sign Up/Sign In"} fontSize="text-md" onClick={() => console.log("Clicked Sing Up")}></ClickableLink>
        <ClickableLink icon={ShoppingCart} text={"Cart"} fontSize="text-md" onClick={() => console.log("Clicked on cart")}></ClickableLink>
      </div>
    </div>
  );
}

export default Header;