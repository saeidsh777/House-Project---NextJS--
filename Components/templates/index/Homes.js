import React from "react";
import HomeCard from "@/Components/modules/HomeCard";
import db from "../../../data/db.json"

export default function Homes() {
  return (
    <div className="homes">
      {db.homes.slice(0,6).map(homeItem => (

      <HomeCard key={homeItem.id} {...homeItem}/>
      ))}
    </div>
  );
}
