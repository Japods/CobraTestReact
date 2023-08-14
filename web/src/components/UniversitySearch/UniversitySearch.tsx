import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import Styles from "./UniversitySearch.module.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import UniversityItem from "../UniversityItem/UniversityItem";
import React, { useEffect, useState } from "react";
import { searchUniversity } from "../../store/Users/actions";

const UniversitySearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const loadedUniversity = useSelector((state) => state.universities);

  const searchUniversityFunction = () => {
    dispatch(searchUniversity(value));
    console.log("Universidades", loadedUniversity);
  };

  useEffect(() => {
    searchUniversityFunction();
  }, [dispatch]);

  return (
    <div className="core">
      <div className={`${Styles.universitySearch} mt-5 justify-center`}>
        <div className="flex space-x-4">
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Buscar Universidad"
            sx={{
              marginBottom: 5,
              width: 450,
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={searchUniversityFunction}
            sx={{ height: 54 }}
            variant="contained"
          >
            <SearchIcon></SearchIcon>
          </Button>
        </div>
        <div className={Styles.containedResult}>
          {loadedUniversity.length > 0 ? (
            <ul>
              {loadedUniversity.map((element, index) => (
                <React.Fragment key={index}>
                  <UniversityItem
                    element={element}
                    favorite={false}
                  ></UniversityItem>
                </React.Fragment>
              ))}
            </ul>
          ) : (
            <div className={Styles.emptyState}>
              No se han encontrado resultados
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversitySearch;
