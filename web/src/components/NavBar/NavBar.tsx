import Styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../graphics/logo.png";

const NavBar = () => {
  const goRoute = useNavigate();

  return (
    <div className={`${Styles.navbar} h-20 flex items-center  px-20`}>
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img
            src={Logo}
            width="50"
            className='cursor-pointer'
            onClick={() => goRoute("/search")}
            alt="Descripción de la imagen"
          />
        </div>
        <div className="flex space-x-12">
          <div
            className="title-nav cursor-pointer"
            onClick={() => goRoute("/search")}
          >
            Search
          </div>
          <div
            className="title-nav cursor-pointer"
            onClick={() => goRoute("/profile")}
          >
            Profile
          </div>
          <div
            className="title-nav cursor-pointer"
            onClick={() => goRoute("/")}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
