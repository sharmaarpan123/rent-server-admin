import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";

// img
import moment from "moment";
import { Link } from "react-router-dom";
import noImg from "../../../components/Common/noImg";
import TableActions from "../../../components/Common/TableActions";
import TableToggle from "../../../components/Common/TableToggle";
import ConfirmationPop from "../../../components/Modals/ConfirmationPop";
import dataHandler from "../../../hooks/dataHandler";
import {
  DEAL_CATEGORY_LIST,
  QUERIES_LIST,
  SHOPS_LIST,
  UPDATE_STATUS_DEAL_CATEGORY,
} from "../../../services/ApiCalls";
import {
  activeInactiveOptions,
  activeInActiveStatusOptions,
  ADMIN_ROLE_TYPE_ENUM,
} from "../../../utilities/const";
import {
  capitalizedFirstAlphaBet,
  isSuperAdmin,
} from "../../../utilities/utilities";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import { useSelector } from "react-redux";

const ShopManagement = () => {
  const {
    setBody,
    body,
    data,
    loader,
    deleteModel,
    setDeleteModel,
    paginationHandler,
    searchHandler,
    total,
    deleteHandler,
    statusChangeHandler,
  } = dataHandler({
    api: SHOPS_LIST,
    dataToSet: (data) => data?.data?.shopList,
  });

  const { admin } = useSelector((s) => s.login);

  const column = [
    {
      head: "#",
      accessor: "#",
      component: (item, key) => {
        return <>{body.limit * (body.page - 1) + key + 1}</>;
      },
    },
    {
      head: "Name",
      accessor: "name",
    },

    {
      head: "Status",
      component: (item) => (
        <p
          className={`mb-0  d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item.status || "-"}
        </p>
      ),
    },

    {
      head: "Actions",
      component: (item) => {
        return <TableActions editUrl={"/manage-shops/edit/" + item?._id} />;
      },
    },
  ];

  return (
    <>
      <section className="systemAcess py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="tableFilter d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div className="left">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap">
                    <Filter
                      body={body}
                      searchHandler={searchHandler}
                      setBody={setBody}
                      statusFilterOptionArr={activeInactiveOptions}
                      showStatusFilter={false}
                    />
                  </ul>
                </div>
                <div className="right">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap">
                    <li className="">
                      <Link
                        to={"/manage-shops/add"}
                        className="d-flex btn btn-primary align-items-center justify-content-center fw-sbold commonBtn"
                        style={{ height: 40, minWidth: 100, fontSize: 12 }}
                      >
                        Add New shop
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <TableLayout column={column} data={data} loader={loader} />
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

export default ShopManagement;
