import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_COUNTRIES } from "../graphql/queries";
import CountriesList from "../components/CountryList";
import Pagination from "../components/Pagination";

function Countries() {
  const { error, loading, data } = useQuery(LOAD_COUNTRIES);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  useEffect(() => {
    if (data) {
      setCountries(data?.countries);
    }
  }, [data]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {!error && !loading && !!countries.length ? (
        <div>
          <CountriesList countries={currentCountries} />
          <Pagination
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
            totalCountries={countries.length}
            paginate={paginate}
          />
        </div>
      ) : (
        "Loading countries"
      )}
    </div>
  );
}

export default Countries;
