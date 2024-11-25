import { HeroCardPropsI } from "@/interfaces/hero.interface";
import React from "react";

const HeroCard = ({ heading, description }: HeroCardPropsI) => {
  return (
    <div className="flex-1 flex-col md:max-w-[430px] w-full p-6 h-32 rounded-lg flex items-center justify-center card-shadow">
      <h1 className="text-3xl font-bold mb-2 text-green-700">{heading}</h1>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

export default HeroCard;
