import { useState } from "react";
import "./Country.css";
export default function Country({ country, handleVisit }) {
  const { name, flags, population, region, area, status } = country;
  // console.log(handleVisit);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    // console.log("click");
  };
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <button onClick={()=>handleVisit(country)}>Mark Visit</button>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <p>Status: {status}</p>
      <button onClick={()=>handleVisited(country.name.common)}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited ? "I have visited" : "I wanna visit"}
    </div>
  );
}
