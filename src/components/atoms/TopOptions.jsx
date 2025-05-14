import React from "react";
import { MapPinLine } from "phosphor-react";

function TopOptions({ icon: Icon, text, address }) {
  return (
    <div className="flex items-center gap-1 truncate">
      <Icon size={14} style={{ color: '#008ECC' }} />
      <p className="text-gray-500 w-full truncate text-nowrap text-xs">
        {text}
        <strong>{address}</strong>
      </p>
    </div>
  );
}

export default TopOptions;
