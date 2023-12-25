import { useState } from "react";
import "./Country.css";
export default function Country({ country }) {
  const { name, flags, population, region, area, status } = country;
  // console.log(country);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    // console.log("click");
  };
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <p>Status: {status}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited" : "I wanna visit"}
    </div>
  );
}
