import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";

// img
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";
import CustomPagination from "../../../components/Common/CustomPagination";
import TableActions from "../../../components/Common/TableActions";
import noImg from "../../../components/Common/noImg";
import ConfirmationPop from "../../../components/Modals/ConfirmationPop";
import dataHandler from "../../../hooks/dataHandler";
import { BRAND_LIST, BRAND_UPDATE_STATUS } from "../../../services/ApiCalls";
import {
  capitalizedFirstAlphaBet,
  isSuperAdmin,
} from "../../../utilities/utilities";
import Filter from "../../../components/Common/Filter";
import {
  activeInactiveOptions,
  activeInActiveStatusOptions,
  ADMIN_ROLE_TYPE_ENUM,
} from "../../../utilities/const";
import TableToggle from "../../../components/Common/TableToggle";
import { useSelector } from "react-redux";

const Brand = () => {
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
    api: BRAND_LIST,
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
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item.name)}
        </p>
      ),
    },
    {
      head: "Image",
      accessor: "image",
      component: (item, key, arr) => (
        <img
          src={item.image || noImg}
          style={{ width: 100, height: 80, objectFit: "contain" }}
        />
      ),
    },
    {
      head: "Date || Time ",
      accessor: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },
    ...(isSuperAdmin(admin)
      ? [
          {
            head: "Status",
            accessor: "",
            component: (item, index) => (
              <TableToggle
                Options={activeInActiveStatusOptions}
                value={item.isActive ? "1" : "0"}
                classNames={item.isActive ? "bg-success" : "bg-danger"}
                style={{
                  color: item.isActive ? "green" : "red",
                  width: 120,
                }}
                onChange={(e) =>
                  statusChangeHandler(
                    () =>
                      BRAND_UPDATE_STATUS({
                        brandId: item._id,
                        status: e.target.value === "1",
                      }),
                    index,
                    "isActive",
                    !item.isActive
                  )
                }
              />
            ),
          },
        ]
      : []),
    {
      head: "Action",
      accessor: "Action",
      component: (item) => (
        <TableActions
          editUrl={isSuperAdmin(admin) ? `/brand/edit/${item._id}` : null}
          viewLink={`/brand/details/${item._id}`}
        />
      ),
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
                    />
                  </ul>
                </div>
                <div className="right">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap">
                    {admin?.roles?.includes(
                      ADMIN_ROLE_TYPE_ENUM.SUPERADMIN
                    ) && (
                      <li className="">
                        <Link
                          to={"/brand/add"}
                          className="d-flex btn btn-primary align-items-center justify-content-center fw-sbold commonBtn"
                          style={{ height: 40, minWidth: 100, fontSize: 12 }}
                        >
                          Add New
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <TableLayout column={column} data={data} loader={loader} />
              <CustomPagination
                body={body}
                pageChangeHandler={paginationHandler}
                setBody={setBody}
                total={total}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Brand;
