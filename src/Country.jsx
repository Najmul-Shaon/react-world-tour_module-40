import "./Country.css";
export default function Country({ country }) {
  const { name, flags } = country;
  // console.log(country.name.common);
  // const { name } = countryName;
  console.log(country);
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
}
