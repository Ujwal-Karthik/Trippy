import { useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

export function useGeolocation(defaultPosition?: Coordinates) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<Coordinates | null>(
    defaultPosition || null
  );
  const [error, setError] = useState<null | string>(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        // console.log(position);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
