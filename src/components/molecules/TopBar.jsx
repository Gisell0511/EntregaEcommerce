import React from "react";
import TextGray from "../atoms/TextGray";
import TopOptions from "../atoms/TopOptions";
import { MapPinLine, Truck, Percent} from "phosphor-react";

function TopBar() {

    return(
        <div className=" flex justify-between gap-3 px-8 py-2  bg-gray-100">
            <TextGray></TextGray>
            <div className="flex gap-3">
                <TopOptions icon={MapPinLine} text={"Deliver To "} address={"423659"}></TopOptions>
                <span className="text-gray-300 font-light">|</span>
                <TopOptions icon={Truck} text={"Track your order"}></TopOptions> 
                <span className="text-gray-300 font-light">|</span>
                <TopOptions icon={Percent} text={"All Offers"}></TopOptions>
            </div>
            
            
        </div>
    )

}

export default TopBar