import React from "react";

function ClickableLink({ icon: Icon, text, highlight, onClick, iconSize = 20, fontSize = "text-sm" }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-1 text-gray-700 hover:text-cyan-600 transition-colors font-medium ${fontSize}`}
    >
      <Icon size={iconSize} weight="light" /> 
      <span className="hidden sm:inline">{text} <strong>{highlight}</strong></span>
    </button>
  );
}

export default ClickableLink;
