import { useState } from "react";
import TopBar from "./components/molecules/TopBar.jsx";
import HeroSlide from "./components/organisms/HeroSlide.jsx";
import Header from "./components/organisms/Header";
import MenuNavs from "./components/organisms/MenuNavs";
import ProductSlider from "./components/organisms/ProductSlider.jsx";
import productsData from "../src/resources/productsData.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredGeneralProducts = selectedCategory
    ? productsData.filter((p) => p.category === selectedCategory)
    : productsData;

  const electronicsProducts = productsData.filter(
    (product) => product.category === "electrónica"
  );
  const gamingProducts = productsData.filter(
    (product) => product.category === "gaming"
  );
  const modaProducts = productsData.filter(
    (product) => product.category === "moda"
  );

  return (
    <>
      <TopBar />
      <Header />
      <MenuNavs onCategorySelect={setSelectedCategory} />
      <HeroSlide />
      <ProductSlider title="Productos en general" products={filteredGeneralProducts} />
      <ProductSlider title="Grab the best deal on Electronics" products={electronicsProducts} />
      <ProductSlider title="Shop From Top Gaming" products={gamingProducts} />
      <ProductSlider title="Shop From Top moda" products={modaProducts} />
    </>
  );
}

export default App;
