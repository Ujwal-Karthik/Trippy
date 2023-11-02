import React from "react";

import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../hooks/useCities";

const CountryList: React.FC = () => {
  const { cities, isLoading } = useCities();

  // const countries = cities.reduce(
  //   (acc: { country: string; emoji: string }[], city) => {
  //     if (!acc.map((el) => el.country).includes(city.country)) {
  //       return [...acc, { country: city.country, emoji: city.emoji }];
  //     } else {
  //       return acc;
  //     }
  //   },
  //   []
  // );

  const uniqueCountries: Set<string> = new Set();
  const countries: { country: string; emoji: string }[] = [];
  cities.forEach((city) => {
    if (!uniqueCountries.has(city.country)) {
      uniqueCountries.add(city.country);
      countries.push({ country: city.country, emoji: city.emoji });
    }
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length && !isLoading) {
    return <Message message="Add a city by clicking on the Map" />;
  }
  return (
    <ul className={styles.cityList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
