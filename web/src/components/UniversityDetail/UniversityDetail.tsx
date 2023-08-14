import Styles from "./UniversityDetail.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UniversityDetail = () => {
  const universitySelected = useSelector(
    (state) => state.universities_selected
  );

  const countryInfo = useSelector((state) => state.country_information);

  useEffect(() => {
    console.log("Universidad seleccionada", universitySelected, countryInfo[0]);
  });

  return (
    <div className={`${Styles.detailCard} mt-5`}>
      <p>{universitySelected.name}</p>
      <br />
      <p className="mt-5">Capital: {countryInfo[0].capital[0]}</p>
      <p className="mt-5">Continente: {countryInfo[0].continents[0]}</p>
      <p className="mt-5">En que lado se conduce: {countryInfo[0].car.side}</p>
      <p className="mt-5">Google Maps: {countryInfo[0].maps.googleMaps}</p>
      <p className="mt-5">Population: {countryInfo[0].population}</p>
      <p className="mt-5">TimeZone: {countryInfo[0].timezones[0]}</p>
      <p className="mt-5">SubRegion: {countryInfo[0].subregion}</p>
      <br />
    </div>
  );
};

export default UniversityDetail;
