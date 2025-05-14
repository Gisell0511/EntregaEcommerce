import React from "react";
import {List} from "phosphor-react"

function ListButtom(){
    return(
        <div className="bg-blue-50 w-14 hover:bg-blue-100 h-14 rounded-2xl items-center flex justify-center my-3.5">
            <List size={34} className="text-cyan-500"></List>
        </div>
    )
}

export default ListButtom