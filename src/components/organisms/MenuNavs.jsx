import ButtonDropdown from "../molecules/ButtonDropdown";
import React, { useState } from "react";
//Hola
function MenuNavs() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const menuItems = [
      "Groceries",
      "Premium Fruits",
      "Home & Kitchen",
      "Fashion",
      "Electronics",
      "Beauty",
      "Home Improvements",
      "Sports, Toys & Luggage"
    ];
  
    return (
      <div className="hidden md:flex px-4 md:px-16 py-2 gap-3 flex-wrap">
        {menuItems.map((label, index) => (
          <ButtonDropdown
          key={label}
          label={label}
          options={[
            { label: "Account settings", action: () => console.log(`${label} > Account`) },
            { label: "Support", action: () => console.log(`${label} > Support`) },
            { label: "License", action: () => console.log(`${label} > License`) },
            { label: "Sign out", action: () => console.log(`${label} > Sign out`) }
          ]}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
        
        ))}
      </div>
    );
  }
  

export default MenuNavs;