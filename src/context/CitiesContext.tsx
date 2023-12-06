import React, { useState, useEffect, createContext, ReactNode } from "react";

import { CityInterface } from "../interfaces/CityInterface";

const BASE_URL = "http://localhost:8000";

interface ContextData {
  cities: CityInterface[];
  isLoading: boolean;
  city: CityInterface | null;
  getCity: (id: number) => Promise<void>;
}

interface CitiesProviderProps {
  children: ReactNode;
}

const CitiesContext = createContext<ContextData | undefined>(undefined);

const CitiesProvider: React.FC<CitiesProviderProps> = ({ children }) => {
  const [cities, setCities] = useState<CityInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState<CityInterface | null>(null);
  useEffect(() => {
    const getCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCities();
  }, []);

  const getCity = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      console.log(data);
      if (data) setCity(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <CitiesContext.Provider value={{ cities, isLoading, city, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider, CitiesContext };
