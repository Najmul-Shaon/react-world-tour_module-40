import { useEffect, useState } from "react";
import Country from "./Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

const [visit, setVisit]= useState([]);

const handleVisit=country=>{
  // console.log('btn click')
  // console.log(country.cca3);
  const newVisit = [...visit, country]
  setVisit(newVisit)
}

  return (
    <div>
      <h2>Countries {countries.length}</h2>
      <div>
        <h4>Visited: {visit.length}</h4>
        <ol>
{
  visit.map(country=><li>{country.name.common}</li>)
}
        </ol>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} 
          country={country} 
          handleVisit={handleVisit}></Country>
        ))}
      </div>
    </div>
  );
}
