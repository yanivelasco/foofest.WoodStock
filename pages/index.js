import React from "react";
import BandsCards from "../components/bands-cards/BandsCards";
import { useState, useEffect } from "react";
import Footer from "../components/footer/footer";




function homepage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bittersweet-painted-willow.glitch.me/bands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);



  return (
    <>
      <BandsCards data={data} />
      
    </>
  );
}

export default homepage;
