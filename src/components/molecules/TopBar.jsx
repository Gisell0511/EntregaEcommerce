import React from "react";
import TextGray from "../atoms/TextGray";
import TopOptions from "../atoms/TopOptions";
import { MapPinLine, Truck, Percent} from "phosphor-react";
import ClickableLink from "../atoms/ClickableLink";

function TopBar() {

    return(
        <div className=" flex justify-between gap-3 px-8 py-2  bg-gray-100">
            <TextGray></TextGray>

            <div className="flex gap-3">
                <ClickableLink icon={MapPinLine} text={"Deliver To "} iconSize={14} fontSize="text-xs" highlight={"423659"} onClick={() => console.log("Clicked Deliver To")}></ClickableLink>
                <span className="text-gray-300 font-light">|</span>
                <ClickableLink icon={Truck} text={"Track your order"} iconSize={14} fontSize="text-xs" onClick={() => console.log("Track")}></ClickableLink>
                <span className="text-gray-300 font-light">|</span>
                <ClickableLink icon={Percent} text={"All Offers"} iconSize={14} fontSize="text-xs" onClick={() => console.log("Offers")}></ClickableLink>
            </div>
        </div>
    )

}

export default TopBar