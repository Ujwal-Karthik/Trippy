import { BrowserRouter, Routes, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
//no typings available, package to convert emojis to Flag in Windows
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

import Form from "./components/Form";

import { CitiesProvider } from "./context/CitiesContext";
polyfillCountryFlagEmojis();

const App = () => {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
