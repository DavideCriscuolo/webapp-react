import { createContext, useState } from "react";
import Loader from "../components/Loader";

const LoaderContext = createContext(); //creo il context

const LoaderProvider = ({ children }) => {
  //creo il provider che gestice lo stato del context e lo rendo disponibile a tutti i componenti figli
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderContext, LoaderProvider };
