import ButtonDropdown from "../molecules/ButtonDropdown";
//Hola
function MenuNavs(){
    return (
        <div className="flex px-16 py-2 gap-3">
            <ButtonDropdown
                label="Groceries"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Premium Fruits"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Home & Kitchen"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Fashion"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Electronics"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Beauty"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Home Improvements"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
            <ButtonDropdown
                label="Sports, Toys & Luggage"
                options={[
                    { label: "Account settings", action: () => console.log("Clicked Account") },
                    { label: "Support", action: () => console.log("Clicked Support") },
                    { label: "License", action: () => console.log("Clicked License") },
                    { label: "Sign out", action: () => console.log("Clicked Sign Out") }
                ]}
                />
        </div>
    )
}

export default MenuNavs;