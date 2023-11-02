import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

export const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Context is not defined,used outside Context provider!");
  }
  return context;
};
