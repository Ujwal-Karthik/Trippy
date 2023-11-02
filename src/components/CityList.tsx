import React from "react";
import styles from "./CityList.module.css";
import { CityInterface } from "../interfaces/CityInterface";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

interface CityListProps {
  cities: CityInterface[];
  isLoading: boolean;
}

const CityList: React.FC<CityListProps> = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="Add a city by clicking on the Map" />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
