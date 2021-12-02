import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    const url = `https://restcountries.com/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);
  const {flag, name, alpha3Code, capital, area, region, timezones} = country;
  console.log(country)
  return <div style={{
    width: "768px",
    border: "1px solid gray",
    margin: "1rem auto",
    padding: "2rem",
    textAlign: "center",
    borderRadius: "10px"
  }}>
    <img style={{
      height: "360px"
    }} src={flag} alt="" />
      <h1>{name}</h1>
      <h3>Alpha3Code: {alpha3Code}</h3>
      <h3>Capital: {capital}</h3>
      <p>Area: {area}</p>
      <p>Region: {region}</p>
      <p>Time Zones: {timezones}</p>
  </div>;
};

export default CountryDetail;
