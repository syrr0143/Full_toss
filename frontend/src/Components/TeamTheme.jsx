import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import image from "../assets/teams/rcb/Jersey.jpg";

import teams from "../assets/TeamTheme/teamTheme";
import ProductCard from "./ProductCard";
const TeamTheme = () => {
  // Get the team assigned to the user from context
  //   const { team } = useContext(AuthContext);
  let team = 2;
  const currentTeam = teams[team] || teams["RCB"]; // Default to RCB if no team is assigned
  const products = [
    {
      id: 1,
      name: "Royal Challengers Bangalore Jersey",
      description:
        "Official Royal Challengers Bangalore IPL Jersey. Show your support for RCB!",
      price: 799,
      image: image,
      team: "RCB",
    },
    {
      id: 2,
      name: "Mumbai Indians Cap",
      description:
        "Official Mumbai Indians IPL Cap. A must-have for every MI fan.",
      price: 299,
      image: image,
      team: "MI",
    },
    {
      id: 3,
      name: "Chennai Super Kings Mug",
      description: "Chennai Super Kings IPL Mug. Perfect for your morning tea!",
      price: 199,
      image: image,
      team: "CSK",
    },
    {
      id: 4,
      name: "Kolkata Knight Riders T-shirt",
      description:
        "Official Kolkata Knight Riders IPL T-shirt. Wear it with pride!",
      price: 499,
      image: image,
      team: "KKR",
    },
    {
      id: 5,
      name: "Delhi Capitals Hoodie",
      description:
        "Delhi Capitals IPL Hoodie for those cold evenings. Stay warm and stylish.",
      price: 999,
      image: image,
      team: "DC",
    },
  ];
  return (
    <div
      className={`min-h-screen bg-[${currentTeam.primaryColor}] text-white`}
      style={{ backgroundColor: currentTeam.primaryColor }}
    >
      <div className="flex justify-center py-8">
        <img
          src={currentTeam.logo}
          alt={`${currentTeam.name} logo`}
          className="w-32"
        />
      </div>

      <h1 className="text-center text-4xl font-bold">{currentTeam.name}</h1>
      <p className="text-center text-2xl mt-2">{currentTeam.slogan}</p>

      <div className="mt-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              team={product.team}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTheme;
