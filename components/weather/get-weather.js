"use server";

export default async function getSingleCityWeather(cityProp) {
  // "use server";


  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityProp}&appid=${process.env.WEATHERAPI}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
