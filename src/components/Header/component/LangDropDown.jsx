import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateLang } from "../../../store/actions";
import styles from "./LangDropDown.module.scss";

const langOptions = [
  { label: "English", value: "en", img: "/images/English.jpeg" },
  { label: "Spanish", value: "es", img: "/images/spanish.jpeg" },
  { label: "French", value: "fr", img: "/images/french.jpeg" },
];
const LangDropDown = () => {
  const { currentLang } = useSelector((s) => s.login);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    dispatch(updateLang(lng));
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const currentSelectLanguage =
    langOptions?.find((item) => item?.value === currentLang) || langOptions[0];

  return (
    <Dropdown className={`${styles.LangDropDown}`}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={currentSelectLanguage?.img} className={`${styles.flagImg}`} />
        {currentSelectLanguage?.label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langOptions?.map((item) => {
          return (
            <Dropdown.Item onClick={() => handleChangeLanguage(item?.value)}>
              <img src={item?.img} className={`${styles.flagImg}`} />{" "}
              {item?.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default LangDropDown;
