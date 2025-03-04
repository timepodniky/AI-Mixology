import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const sampleCocktails = [
  {
    name: "Tropical Sunset",
    ingredients: "Rum, ananasový džus, kokosové mléko, grenadina",
    instructions: "Smíchejte všechny ingredience s ledem a podávejte vychlazené.",
  },
  {
    name: "Citrus Breeze",
    ingredients: "Gin, citrónová šťáva, soda, máta",
    instructions: "Smíchejte gin s citrónovou šťávou, dolijte sodou a ozdobte mátou.",
  },
];

export default function MixologyAI() {
  const [ingredients, setIngredients] = useState("");
  const [suggestedCocktails, setSuggestedCocktails] = useState([]);

  const generateCocktails = () => {
    const filteredCocktails = sampleCocktails.filter((cocktail) =>
      ingredients.split(",").some((ing) =>
        cocktail.ingredients.toLowerCase().includes(ing.trim().toLowerCase())
      )
    );
    setSuggestedCocktails(filteredCocktails.length ? filteredCocktails : [{ name: "Žádný nalezený koktejl", ingredients: "", instructions: "Zkuste jiné ingredience." }]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Mixology – Najdi si svůj koktejl</h1>
      <p className="mb-4">Zadej ingredience, které máš, a AI ti doporučí drinky.</p>
      <Input 
        placeholder="Např. rum, citrón, soda..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="mb-4"
      />
      <Button onClick={generateCocktails} className="mb-6">Najít koktejl</Button>
      <div className="space-y-4">
        {suggestedCocktails.map((cocktail, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{cocktail.name}</h2>
                <p className="text-sm text-gray-600">{cocktail.ingredients}</p>
                <p className="mt-2">{cocktail.instructions}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
