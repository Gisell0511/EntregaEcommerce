import React from "react";
import TextGray from "../atoms/TextGray";
import ClickableLink from "../atoms/ClickableLink";
import { MapPinLine, Truck, Percent } from "phosphor-react";

function TopBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 px-4 sm:px-8 py-2 bg-gray-100">
      
      <div className="hidden sm:block">
        <TextGray />
      </div>

      <div className="flex w-full justify-between sm:w-auto sm:gap-3">
        <ClickableLink
          icon={MapPinLine}
          text="Deliver To"
          highlight="423659"
          fontSize="text-xs"
          onClick={() => console.log("Deliver To")}
        />
        <ClickableLink
          icon={Truck}
          text="Track your order"
          fontSize="text-xs"
          onClick={() => console.log("Track")}
        />
        <ClickableLink
          icon={Percent}
          text="All Offers"
          fontSize="text-xs"
          onClick={() => console.log("Offers")}
        />
      </div>
    </div>
  );
}

export default TopBar;
