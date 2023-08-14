import Styles from "./UniversityItem.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GradeIcon from "@mui/icons-material/Grade";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { University } from "../../types/university";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setUniversitieSelected,
  saveUniversity,
  unSaveUniversity,
  searchCountryUniversity,
} from "../../store/Users/actions";

interface propsUniversity {
  element: University;
  favorite: boolean;
}

const UniversityItem = ({ element, favorite }: propsUniversity) => {
  const dispatch = useDispatch();
  const goRoute = useNavigate();

  const goToWeb = (web: string) => {
    window.open(web, "_blank");
  };

  const selectUniversity = (university: University) => {
    if (favorite) {
      dispatch(setUniversitieSelected(university));
      dispatch(searchCountryUniversity(university.country));
      console.log("Seleccionando universidad", university);
    }
  };

  const saveUniversityHandle = (university: University) => {
    console.log("Entrando aquii");
    dispatch(saveUniversity(university));
    goRoute("/profile")
  };

  const unsaveUniversityHandle = (university: University) => {
    console.log("Entrando a UNSAVE");
    dispatch(unSaveUniversity, university);
  };

  return (
    <div className={`${Styles.detailCard} mt-5`}>
      <div
        className="content cursor-pointer"
        onClick={() => selectUniversity(element)}
      >
        <div className="header flex items-center justify-between">
          <div className="infoUni">
            <p>
              <strong>{element.name}</strong> {element.country}
            </p>
            <br />
            Website: {element.web_pages[0]}
          </div>
          <div className="actions flex space-x-4">
            {favorite ? (
              <GradeIcon
                color="primary"
                className="cursor-pointer"
                onClick={() => unsaveUniversityHandle(element)}
              ></GradeIcon>
            ) : (
              <StarBorderIcon
                onClick={() => saveUniversityHandle(element)}
                className="cursor-pointer"
              ></StarBorderIcon>
            )}

            <OpenInNewIcon
              onClick={() => goToWeb(element.web_pages[0])}
              className="cursor-pointer"
            ></OpenInNewIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityItem;
