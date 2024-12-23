import React from "react";

// Ejemplo de datos para las tarjetas
const cardData = [
  {
    title: "CIBERACOSO",
    imageUrl: "/imagenes/ciberacoso.jpg", // Ruta actualizada
  },
  {
    title: "GROOMING",
    imageUrl: "/imagenes/grooming.jpg", // Ruta actualizada
  },
  {
    title: "PHISHING",
    imageUrl: "/imagenes/phishing.jpg", // Ruta actualizada
  },
  {
    title: "SEXTORSIÓN",
    imageUrl: "/imagenes/sextorsion.jpg", // Ruta actualizada
  },
  {
    title: "CRACKING",
    imageUrl: "/imagenes/cracking.jpg", // Ruta actualizada
  },
];

const InfoCards = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-[px:20] ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center text-[#6286ff] rounded-[20px] shadow-lg"
          style={{ backgroundImage: `url(${card.imageUrl})`, height: '250px' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center  rounded-[20px] ">
            <h3 className="text-4xl font-bold">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
