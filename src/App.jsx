import { useState } from "react";
import { Search, GifGrid } from "./components";

export function App() {
  const [categories, setCategories] = useState([]);

  function addCategory(e) {
    if (categories.includes(e)) return;
    setCategories(() => [e, ...categories]);
    // setCategories([...categories, "e"]);
  }

  function borrar() {
    setCategories([]);
  }

  return (
    <>
      <header className="header">
        <h1 className="center">Gifs Search</h1>
      </header>

      <Search addCategory={addCategory} borrar={borrar} />

      <article className="container">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </article>
    </>
  );
}
