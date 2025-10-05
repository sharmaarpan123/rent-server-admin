import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./ShopOwnerSidebar.module.scss";
import { Button } from "react-bootstrap";
import logo from "../../../Assets/images/logo.png";
import { useTranslation } from "react-i18next";

const ShopOwnerSidebar = ({ sidebar, setSidebar }) => {
  const location = useLocation();
  const pageActive = location.pathname;
  const handleSidebar = () => {
    setSidebar((p) => !p);
  };
  const { t } = useTranslation();
  
  const navItems = [
    {
      path: "/shop-owner/dashboard",
      name: "Dashboard",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      path: "/shop-owner/visitors",
      name: "Visitors",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM12 13C15.866 13 19 16.134 19 20V21H5V20C5 16.134 8.134 13 12 13Z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      path: "/shop-owner/queries",
      name: "Queries",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      path: "/shop-owner/profile",
      name: "Profile",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="currentColor"
          />
        </svg>
      )
    }
  ];

  return (
    <div
      className={`${styles.sidebar} ${
        sidebar && styles.active
      } pt-2 position-fixed`}
    >
      <Button
        onClick={handleSidebar}
        variant="transparent"
        className="position-absolute border-0 p-2 closeBtn d-lg-none"
        style={{ top: 0, right: 0 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="21"
          viewBox="0 0 15 21"
          fill="none"
        >
          <path
            d="M7.245 6.529L10.668 1.3H14.259V1.447L9.303 8.608L14.343 15.895V16H10.71L7.245 10.834L3.78 16H0.147V15.895L5.145 8.608L0.21 1.447V1.3H3.801L7.245 6.529Z"
            fill="white"
          />
        </svg>
      </Button>
      <div className={`${styles.top} top text-center px-3 py-2 rounded`}>
        <div className={`${styles.logo}`}>
          <Link to="/shop-owner/dashboard">
            <img
              src={logo}
              alt=""
              className="w-100 object-fit-contain rounded"
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.linkWrpper} linkWrpper pt-2 px-2`}>
        <ul className="list-unstyled ps-0 mb-0">
          {navItems.map(({ path, name, icon: Icon }, ind) => (
            <li
              key={path}
              className="my-1"
              onClick={() => setSidebar((p) => false)}
            >
              <NavLink
                to={path}
                className={`${styles.link} ${
                  pageActive.includes(path) && styles.active
                } d-flex align-items-center gap-10 text-white`}
              >
                <Icon styles={styles} />
                {t(name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopOwnerSidebar;
