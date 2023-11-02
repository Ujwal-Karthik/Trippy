import React from "react";

import { CityInterface } from "../interfaces/CityInterface";

import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

interface CityItemProps {
  city: CityInterface;
}
const CityItem: React.FC<CityItemProps> = ({ city }) => {
  return (
    <>
      <li>
        <Link
          to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
          className={styles.cityItem}
        >
          <span className={styles.emoji}>{city.emoji}</span>
          <h3 className={styles.name}>{city.cityName}</h3>
          <time className={styles.date}>{formatDate(city.date)}</time>
        </Link>
      </li>
    </>
  );
};

export default CityItem;
