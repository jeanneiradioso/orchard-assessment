// src/App.tsx
import React, {  } from 'react';
import TasteColorsBlock from './components/TasteColors';
import { useContentData } from './hooks/useContentData';
import CookingBlock from './components/Cooking';

const App: React.FC = () => {
  const { data, error } = useContentData();
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
    <div className="min-h-screen bg-[#0e1414] text-white font-openSans font-light">
      <header className="bg-gray-900 p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Tasteology</h1>
      </header>
      <main className="max-w-6xl mx-auto p-4 ">
        <CookingBlock data={cookingBlock} />
        <TasteColorsBlock data={tasteColoursBlock} />
      </main>
      <footer className="bg-gray-900 p-4 text-center text-sm mt-6">
        <p>&copy; {new Date().getFullYear()} Tasteology</p>
      </footer>
    </div>
  );
};

export default App;
