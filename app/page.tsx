import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import React from "react";
import getSingleCityWeather from "@/components/weather/get-weather";
// import WeatherComponent from "@/components/weather/get-weather";



const cityList = [
  "Oxford,OH,US",
  "Boston,MA,US",
  "New York,NY,US",
  "Syracuse,NY,US",
  "Chapel Hill,NC,US",
];

export default async function Home() {
  const weatherdata = await getSingleCityWeather(cityList[2]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          {/* <ImageSlideshow /> */}
        </div>
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
          {JSON.stringify(weatherdata)}
        </section>
      </main>
    </>
  );
}
