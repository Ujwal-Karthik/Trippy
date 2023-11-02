import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../hooks/useCities";
import { CityInterface } from "../interfaces/CityInterface";
import Button from "./Button";
import Spinner from "./Spinner";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { city, getCity, isLoading } = useCities();
  const navigate = useNavigate();
  useEffect(() => {
    getCity(Number(id));
  }, [id]);
  if (city !== null) {
    const { date, emoji, cityName, notes } = city as CityInterface;
    if (isLoading) {
      return <Spinner />;
    }
    return (
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{emoji}</span> {cityName}
          </h3>
        </div>

        <div className={styles.row}>
          <h6>You went to {cityName} on</h6>
          <p>{formatDate(date || null)}</p>
        </div>

        {notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{notes}</p>
          </div>
        )}

        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <Button
            type="back"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
  return <div>City Not Found</div>;
}

export default City;
