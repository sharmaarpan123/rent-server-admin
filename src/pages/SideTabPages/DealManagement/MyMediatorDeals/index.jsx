import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../../components/TableLayout";

// img
import moment from "moment";
import copyIcon from "../../../../Assets/images/copyIcon.png";
import share from "../../../../Assets/images/share.png";
import CustomPagination from "../../../../components/Common/CustomPagination";
import dataHandler from "../../../../hooks/dataHandler";
import { MY_MED_DEALS_AS_AGENCY } from "../../../../services/ApiCalls";
import { activeInactiveOptions } from "../../../../utilities/const";
import {
  capitalizedFirstAlphaBet,
  copyDealClipboard,
  handleShare,
} from "../../../../utilities/utilities";
import Filter from "../Components/Filters";

const MyMedDealsAsAgency = () => {
  const {
    setBody,
    body,
    data,
    loader,
    paginationHandler,
    searchHandler,
    total,
  } = dataHandler({
    api: MY_MED_DEALS_AS_AGENCY,
    dependencies: [
      "selectedPlatformFilter",
      "selectedBrandFilter",
      "mediatorId",
    ],
    extraBody: {
      selectedPlatformFilter: [],
      selectedBrandFilter: [],
    },
  });

  const column = [
    {
      head: "#",
      accessor: "#",
      component: (item, key) => {
        return <>{body.limit * (body.page - 1) + key + 1}</>;
      },
    },
    {
      head: "Mediator  Name",
      accessor: "adminId",
      component: (item, key, arr) => (
        <div style={{ display: "flex", alignItems: "center", minWidth: 200 }}>
          <p className="m-0 themePink fw-sbold">
            {capitalizedFirstAlphaBet(item?.adminId?.name)}(
            {item?.adminId?.userName})
          </p>
        </div>
      ),
    },
    {
      head: "Date || Time ",
      accessor: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },
    {
      head: "Product Name",
      accessor: "productName",
      component: (item, key, arr) => (
        <div style={{ display: "flex", alignItems: "center", minWidth: 200 }}>
          <p className="m-0 themePink fw-sbold">
            {capitalizedFirstAlphaBet(item?.parentDealId?.productName)}
          </p>
          <button
            className="share-button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={() => handleShare(item?._id)}
          >
            <img src={share} alt="Share" style={{ width: 15, height: 15 }} />
          </button>
          <button
            className="share-button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => copyDealClipboard(item?._id)}
          >
            <img src={copyIcon} alt="Share" style={{ width: 15, height: 15 }} />
          </button>
        </div>
      ),
    },

    {
      head: "Brand",
      accessor: "brand",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.parentDealId?.brand?.name)}
        </p>
      ),
    },
    {
      head: "Platform",
      accessor: "platForm",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.parentDealId?.platForm?.name)}
        </p>
      ),
    },
    {
      head: "Deal Type",
      accessor: "dealCategory",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.parentDealId?.dealCategory?.name)}
        </p>
      ),
    },
    {
      head: "Price",
      accessor: "actualPrice",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.parentDealId?.actualPrice)}
        </p>
      ),
    },
    // {
    //   head: "Mediator Less",
    //   accessor: "actualPrice",
    //   component: (item, key, arr) => (
    //     <p className="m-0 themePink fw-sbold">
    //       {capitalizedFirstAlphaBet(item?.parentDealId?.lessAmountToSubAdmin) ||
    //         "-"}
    //     </p>
    //   ),
    // },
    {
      head: "Mediator Commission",
      accessor: "actualPrice",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(
            item?.parentDealId?.commissionValueToSubAdmin
          ) || "-"}
        </p>
      ),
    },
    {
      head: "Refund",
      accessor: "finalCashBackForUser",
      component: (item) =>
        item?.parentDealId?.isCommissionDeal
          ? Number(item?.parentDealId?.actualPrice) +
            Number(item?.parentDealId?.commissionValueToSubAdmin)
          : item?.parentDealId?.actualPrice -
            item?.parentDealId?.lessAmountToSubAdmin,
    },
    // {
    //   head: "Platform Fee",
    //   accessor: "adminCommission",
    // },
    {
      head: "Status",
      accessor: "isDeleted",
      component: (item, index) => (
        <p
          className={`mb-0 ${
            !item.isActive ? "bg-danger text-white" : "bg-success text-white"
          } d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item.isActive ? "Active" : "InActive"}
        </p>
      ),
    },

    {
      head: "Slot",
      accessor: "isSlotCompleted",
      component: (item) => (
        <p
          className={`mb-0 ${
            !item?.parentDealId?.isSlotCompleted
              ? "bg-danger text-white"
              : "bg-success text-white"
          } d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item?.parentDealId?.isSlotCompleted ? "Completed" : "Ongoing"}
        </p>
      ),
    },
  ];

  return (
    <>
      <section className="systemAcess py-3 position-relative">
        <Container>
          <Row>
            {/* <Col lg="12">
              <h4 className="mb-0 py-3 fw-bold themePink text-capitalize">
                Deal Management
              </h4>
            </Col> */}
            <Col lg="12">
              <div className="tableFilter d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div className="left">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap">
                    <Filter
                      body={body}
                      searchHandler={searchHandler}
                      setBody={setBody}
                      statusFilterOptionArr={activeInactiveOptions}
                      ShowPaymentStatus={true}
                      ShowSlotStatus={true}
                      showMediatorFilter={true}
                    />
                  </ul>
                </div>
                <div className="right"></div>
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

export default MyMedDealsAsAgency;
