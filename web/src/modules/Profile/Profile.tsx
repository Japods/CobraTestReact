import UniversityDetail from "../../components/UniversityDetail/UniversityDetail";
import UniversityItem from "../../components/UniversityItem/UniversityItem";
import { useEffect, useState } from "react";
import Styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [rows, setRows] = useState([]);
  const loggedUser = useSelector((state) => state.user_logged);

  useEffect(() => {
    console.log("Usuario logueado", loggedUser);
  });

  return (
    <div className={`${Styles.profileContainer} flex space-x-6`}>
      <div className="box w-1/2">
        <p className="text-3xl font-semibold text-blue-400">My Favorites</p>
        <div className={`${Styles.searchContainer}`}>
          {loggedUser.universities.length > 0 ? (
            <ul>
              {loggedUser.universities.map((element, index) => (
                <UniversityItem
                  element={element}
                  favorite={true}
                ></UniversityItem>
              ))}
            </ul>
          ) : (
            <div className={Styles.emptyState}>
              No hay universidades Favoritas
            </div>
          )}
        </div>
      </div>
      <div className="box w-1/2">
        <p className="text-3xl font-semibold text-blue-400">
          Selected University
        </p>
        <UniversityDetail></UniversityDetail>
      </div>
    </div>
  );
};

export default Profile;
