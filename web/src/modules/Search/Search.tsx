import Styles from "./Search.module.css";
import UniversitySearch from "../../components/UniversitySearch/UniversitySearch";

const Search = () => {
  return (
    <div className={`${Styles.searchContainer} flex space-x-6 justify-center`}>
      <UniversitySearch></UniversitySearch>
    </div>
  );
};

export default Search;
