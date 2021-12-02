import react, { useEffect, useState } from "react";
import Country from "../Country/Country";

function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v2/all"
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Total Countries: {countries.length}</h1>
      {
        countries.map(country => <Country country={country} key={country.alpha3Code}/>)
      }
    </div>
  );
}

export default Home;
