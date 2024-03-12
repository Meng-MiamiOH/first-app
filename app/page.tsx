import Link from "next/link";

import classes from "./page.module.css";
import React from "react";
import ImageSlideshow from "../components/images/image-slideshow";
import getSingleCityWeather from "../components/weather/get-weather";

const cityList = [
  "Boston,MA,US",
  "Bristol,UK",
  "Chapel Hill,NC,US",
  "Miami,FL,US",
  "New York,NY,US",
  "Oxford,OH,US",
  "Syracuse,NY,US",
];

export default async function Home() {

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>{/* <ImageSlideshow /> */}</div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          {await Promise.all(
            cityList.map(async (city) => {
              const cityAllData = await getSingleCityWeather(city);

              return (
                <div key={city}>
                  {JSON.stringify(cityAllData.name).replace(/"/g, "")}{" "}
                  {" "}{JSON.stringify(cityAllData.weather[0].description).replace(/"/g, "")}
                  {JSON.stringify(cityAllData.weather[0].icon).replace(/"/g, "").replace("01","☀️").replace("02","🌤️").replace("03","☁️").replace("04","🌥️").replace("09","🌦️").replace("10","🌧️").replace("11","⛈️").replace("13","❄️").replace("50","🌫️").replace(/"n|d"/g,"")}{" "}
                  当前温度{" "}{JSON.stringify(cityAllData.main.temp.toFixed(1)).replace(/"/g, "")}{"℃"}</div>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
