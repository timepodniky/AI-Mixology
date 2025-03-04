import React, { useState } from "react";

const sampleCocktails = [
  {
    name: "Tropical Sunset",
    ingredients: "Rum, ananasový džus, kokosové mléko, grenadina",
    flavor: "sladký",
    instructions: "Smíchejte všechny ingredience s ledem a podávejte vychlazené.",
  },
  {
    name: "Citrus Breeze",
    ingredients: "Gin, citrónová šťáva, soda, máta",
    flavor: "kyselý",
    instructions: "Smíchejte gin s citrónovou šťávou, dolijte sodou a ozdobte mátou.",
  },
  {
    name: "Berry Delight",
    ingredients: "Vodka, brusinková šťáva, limetka, třtinový cukr",
    flavor: "sladkokyselý",
    instructions: "Rozdrťte limetku s cukrem, přidejte led, zalijte vodkou a brusinkovou šťávou.",
  },
  {
    name: "Minty Mojito",
    ingredients: "Bílý rum, máta, třtinový cukr, perlivá voda, limetka",
    flavor: "osvěžující",
    instructions: "Rozmačkejte mátu s cukrem a limetkou, přidejte rum a dolijte perlivou vodou.",
  }
];

export default function MixologyApp() {
  const [ingredients, setIngredients] = useState("");
  const [flavor, setFlavor] = useState("");
  const [suggestedCocktails, setSuggestedCocktails] = useState([]);

  const generateCocktails = () => {
    const filteredCocktails = sampleCocktails.filter((cocktail) =>
      (ingredients === "" || ingredients.split(",").some((ing) =>
        cocktail.ingredients.toLowerCase().includes(ing.trim().toLowerCase())
      )) && (flavor === "" || cocktail.flavor === flavor)
    );
    setSuggestedCocktails(filteredCocktails.length ? filteredCocktails : [{ name: "Žádný nalezený koktejl", ingredients: "", instructions: "Zkuste jiné ingredience nebo jinou chuť." }]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Vyhledávač koktejlů</h1>
      <p className="mb-4">Zadej ingredience a/nebo vyber požadovanou chuť.</p>
      <input
        type="text"
        placeholder="Např. rum, citrón, soda..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <select
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="">-- Vyber chuť --</option>
        <option value="sladký">Sladký</option>
        <option value="kyselý">Kyselý</option>
        <option value="sladkokyselý">Sladkokyselý</option>
        <option value="osvěžující">Osvěžující</option>
      </select>
      <button
        onClick={generateCocktails}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Najít koktejl
      </button>
      <div className="space-y-4 mt-6">
        {suggestedCocktails.map((cocktail, index) => (
          <div key={index} className="border p-4 rounded bg-white shadow">
            <h2 className="text-xl font-semibold">{cocktail.name}</h2>
            <p className="text-sm text-gray-600">{cocktail.ingredients}</p>
            <p className="mt-2">{cocktail.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
