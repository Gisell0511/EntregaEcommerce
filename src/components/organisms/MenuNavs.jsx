import ButtonDropdown from "../molecules/ButtonDropdown";
import React, { useState } from "react";

function MenuNavs({ onCategorySelect }) {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    { label: "Electronics", category: "electrónica" },
    { label: "Gaming & Computers", category: "gaming" },
    { label: "Fashion", category: "moda" },
    { label: "Beauty & Personal Care", category: "belleza" },
    { label: "Home & Kitchen", category: "hogar" },
    { label: "Groceries", category: "alimentos" },
    { label: "Sports & Outdoors", category: "deportes" },
    { label: "Decor & Furniture", category: "decoracion" }
  ];
  

  return (
    <div className="hidden md:flex px-4 md:px-16 py-2 gap-3 flex-wrap">
      {menuItems.map((item, index) => (
        <ButtonDropdown
          key={item.label}
          label={item.label}
          options={[
            {
              label: `Ver ${item.label}`,
              action: () => onCategorySelect(item.category),
            },
            {
              label: "Limpiar filtro",
              action: () => onCategorySelect(null),
            },
          ]}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default MenuNavs;
