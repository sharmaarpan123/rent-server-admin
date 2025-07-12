import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../component/LangDropDown.module.scss";
import { langOptions } from "../../../utilities/const";
import { useDispatch, useSelector } from "react-redux";
import { updateLang } from "../../../store/actions";
import { useTranslation } from "react-i18next";

const LangDropDown = () => {
  const { currentLang } = useSelector((s) => s.login);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    dispatch(updateLang(lng));
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  return (
    <Dropdown className={`${styles.LangDropDown}`}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {langOptions?.find((item) => item?.value === currentLang)?.label ||
          "en"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langOptions?.map((item) => {
          return (
            <Dropdown.Item onClick={() => handleChangeLanguage(item?.value)}>
              {item?.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default LangDropDown;
