import React, { useTransition } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";

// img
import moment from "moment";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import TableActions from "../../../components/Common/TableActions";
import Toggle from "../../../components/Common/Toggle";
import dataHandler from "../../../hooks/dataHandler";
import {
  BLOCK_UNBLOCK_USER,
  USER_LIST,
  USER_STATUS_CHANGE,
} from "../../../services/ApiCalls";
import {
  activeInactiveOptions,
  ADMIN_ROLE_TYPE_ENUM,
} from "../../../utilities/const";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ManageUser = () => {
  const {
    setBody,
    statusChangeHandler,
    body,
    data,
    loader,
    paginationHandler,
    searchHandler,
    total,
  } = dataHandler({
    api: USER_LIST,
    dataToSet: (data) => data?.data?.userList,
    extraBody: { sort: "createdAt", order: -1 },
  });

  const { t } = useTranslation();

  const column = [
    {
      head: "#",
      accessor: "#",
      component: (item, key) => {
        return <>{body.limit * (body.page - 1) + key + 1}</>;
      },
    },
    {
      head: t("userName"),
      accessor: "name",
      sortKey: "userName",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold text-wrap">{item.userName}</p>
      ),
    },
    { head: t("email"), accessor: "email", sortKey: "email" },

    {
      head: t("dateTime"),
      accessor: "createdAt",
      sortKey: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },

    {
      head: t("status"),
      component: (item) => (
        <p
          className={`mb-0 ${
            item.isBlock ? "bg-danger text-white" : "bg-success text-white"
          } d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item.isBlock ? "Block" : "Active"}
        </p>
      ),
    },

    {
      head: "Action",
      accessor: t("action"),
      component: (item, ind) => (
        <TableActions
          blockUnBlockHandler={() =>
            statusChangeHandler(
              () => BLOCK_UNBLOCK_USER(item?._id),
              ind,
              "isBlock",
              !item?.isBlock
            )
          }
          isBlocked={item?.isBlock}
          viewLink={"/manage-user/detail/" + item?._id}
        />
      ),
    },
  ];

  return (
    <>
      <section className="manageUser py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="tableFilter d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div className="left">
                  <Filter
                    body={body}
                    setBody={setBody}
                    searchHandler={searchHandler}
                    showStatusFilter={false}
                    statusFilterOptionArr={activeInactiveOptions}
                  />
                </div>
                <div className="right">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap">
                    <li className="">
                      <Link
                        to={"/manage-user/add"}
                        className="d-flex btn btn-primary align-items-center justify-content-center fw-sbold commonBtn"
                        style={{ height: 40, minWidth: 100, fontSize: 12 }}
                      >
                        {t("adNewUser")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <TableLayout
                body={body}
                setBody={setBody}
                column={column}
                data={data}
                loader={loader}
              />
              <CustomPagination
                total={total}
                pageChangeHandler={paginationHandler}
                body={body}
                setBody={setBody}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ManageUser;
