import React, { useHistory } from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  // console.log(props);
  const { name, flag, capital } = props.country;
  const history = useHistory();

  const handleClick = (cont) => {
    history.push(`/country/${name}`)
  } 
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid gray",
        width: "360px",
        margin: "3rem auto",
        textAlign: "center",
        backgroundColor: "cyan",
        borderRadius: "10px"
      }}
    >
      <img style={{ height: "160px" }} src={flag} alt="" />
      <h3>{name}</h3>
      <h4>Capital: {capital}</h4>
      <Link to={`/country/${name}`}>Show Details</Link>
      <button onClick={handleClick} style={{
          padding: ".5rem",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "1rem",
          textTransform: "uppercase",
          border: "0",
          borderRadius: "10px",
          cursor: "pointer"
      }}>Show Details</button>
    </div>
  );
};

export default Country;
