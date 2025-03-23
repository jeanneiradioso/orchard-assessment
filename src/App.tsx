// src/App.tsx
import React, { useEffect, useState } from 'react';
import CookingBlock from './components/CookingBlock';
import TasteColorsBlock from './components/TasteColorsBlock';
import { TasteologyPageData } from './interfaces/content';

const App: React.FC = () => {
  const [data, setData] = useState<TasteologyPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/optimizelyData.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((json: TasteologyPageData) => setData(json))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }
  const { cookingBlock, tasteColoursBlock } = data.properties;

  return (
    <div className="min-h-screen bg-black text-white  font-sans font-light">
      <main className="max-w-6xl mx-auto p-4">
        <CookingBlock {...cookingBlock} />
        <TasteColorsBlock {...tasteColoursBlock} />
      </main>
    </div>
  );
};

export default App;
