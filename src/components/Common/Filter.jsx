import React from "react";
import { Button, Form } from "react-bootstrap";
import StatusFilter from "./StatusFilter";
import SearchFilter from "./SearchFilter";
import {
  paymentStatusOptions,
  slotCompletedStatusOptions,
} from "../../utilities/const";
import { useTranslation } from "react-i18next";

const Filter = ({
  statusFilterOptionArr,
  setBody,
  body,
  searchHandler,
  ShowPaymentStatus = false,
  ShowSlotStatus = false,
  showSearch = true,
  showStatusFilter = true,
}) => {
  const { t } = useTranslation();
  const clearFilter = () => {
    setBody((p) => ({
      ...p,
      paymentStatus: "",
      isSlotCompleted: "",
      status: "1",
      search: "",
      page: 1,
      offset: 0,
      limit: 10,
    }));
  };
  return (
    <ul className="list-unstyled ps-0 mb-0 d-flex align-items-end gap-10 flex-wrap">
      {showStatusFilter && (
        <li className="d-flex flex-column align-items-center gap-10">
          <label
            htmlFor=""
            className="form-label m-0 fw-sbold text-muted"
            style={{ whiteSpace: "nowrap" }}
          >
            {t("status")}
          </label>
          <StatusFilter
            body={body}
            setBody={setBody}
            statusKey={"status"}
            statusFilterOptionArr={statusFilterOptionArr}
          />
        </li>
      )}

      {showSearch && (
        <li className="">
          <SearchFilter
            body={body}
            setBody={setBody}
            searchHandler={searchHandler}
          />
        </li>
      )}
      <li>
        <Button className="commonBtn" type="button" onClick={clearFilter}>
          {t("clear")}
        </Button>
      </li>
    </ul>
  );
};

export default Filter;
