import React from "react";

const DidYouKnow = () => {
  const facts = [
    {
      emoji: "🥕",
      text: "Carrots are rich in Vitamin A, which supports healthy vision.",
    },
    {
      emoji: "🍌",
      text: "Bananas are great for instant energy and muscle recovery.",
    },
    {
      emoji: "🥦",
      text: "Broccoli is packed with antioxidants and boosts immunity.",
    },
    {
      emoji: "🍅",
      text: "Tomatoes contain lycopene, good for heart health.",
    },
  ];

  return (
    <div className="pt-25 pb-14 w-full">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        🧠 Did You Know?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-3xl mb-2">{fact.emoji}</p>
            <p className="text-gray-600 text-sm">{fact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DidYouKnow;