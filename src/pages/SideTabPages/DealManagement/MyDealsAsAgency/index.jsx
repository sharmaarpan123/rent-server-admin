import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../../components/TableLayout";

// img
import moment from "moment";
import { Link } from "react-router-dom";
import copyIcon from "../../../../Assets/images/copyIcon.png";
import share from "../../../../Assets/images/share.png";
import CustomPagination from "../../../../components/Common/CustomPagination";
import TableActions from "../../../../components/Common/TableActions";
import Toggle from "../../../../components/Common/Toggle";
import dataHandler from "../../../../hooks/dataHandler";
import { DEAL_UPDATE_STATUS, DEALS_LIST } from "../../../../services/ApiCalls";
import { activeInactiveOptions } from "../../../../utilities/const";
import {
  capitalizedFirstAlphaBet,
  copyDealClipboard,
  handleShare,
} from "../../../../utilities/utilities";
import Filter from "../Components/Filters";

const DealManagement = () => {
  const {
    setBody,
    body,
    data,
    loader,
    paginationHandler,
    searchHandler,
    total,
    statusChangeHandler,
  } = dataHandler({
    api: DEALS_LIST,
    dependencies: ["selectedPlatformFilter", "selectedBrandFilter"],
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
      head: "Date || Time ",
      accessor: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },
    {
      head: "Name",
      accessor: "productName",
      component: (item, key, arr) => (
        <div style={{ display: "flex", alignItems: "center", minWidth: 200 }}>
          <p className="m-0 themePink fw-sbold">
            {capitalizedFirstAlphaBet(item.productName)}
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
          {capitalizedFirstAlphaBet(item?.brand?.name)}
        </p>
      ),
    },
    {
      head: "Platform",
      accessor: "platForm",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.platForm?.name)}
        </p>
      ),
    },
    {
      head: "Deal Type",
      accessor: "dealCategory",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.dealCategory?.name)}
        </p>
      ),
    },
    {
      head: "Price",
      accessor: "actualPrice",
    },
    {
      head: "Less",
      accessor: "lessAmount",
      component: (item) => (
        <>{item?.isCommissionDeal ? "-" : item?.lessAmount}</>
      ),
    },
    {
      head: "Mediator Less",
      accessor: "lessAmountToSubAdmin",
      component: (item) => (
        <>{item?.isCommissionDeal ? "-" : item?.lessAmountToSubAdmin}</>
      ),
    },
    {
      head: "Commission",
      accessor: "commissionValue",
      component: (item) => (
        <>{item?.isCommissionDeal ? item.commissionValue : "-"}</>
      ),
    },
    {
      head: "Mediator Commission",
      accessor: "commissionValueToSubAdmin",
      component: (item) => (
        <>{item?.isCommissionDeal ? item.commissionValueToSubAdmin : "-"}</>
      ),
    },
    {
      head: "Platform Fee",
      accessor: "adminCommission",
    },

    {
      head: "Slot",
      accessor: "isSlotCompleted",
      component: (item) => (
        <p
          className={`mb-0 ${
            !item.isSlotCompleted
              ? "bg-danger text-white"
              : "bg-success text-white"
          } d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item.isSlotCompleted ? "Completed" : "Ongoing"}
        </p>
      ),
    },
    {
      head: "Status",
      accessor: "",
      component: (item, index) => (
        <Toggle
          isChecked={item?.isActive}
          onChange={(e) =>
            statusChangeHandler(
              () =>
                DEAL_UPDATE_STATUS({
                  dealId: item._id,
                  status: e.target.checked,
                }),
              index,
              "isActive",
              !item.isActive
            )
          }
        />
      ),
    },
    {
      head: "Action",
      accessor: "Action",
      component: (item) => (
        <TableActions
          editUrl={`/deal/edit/${item._id}`}
          viewLink={`/deal/details/${item._id}`}
        
        />
      ),
    },
  ];

  return (
    <>
      <section className="systemAcess py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="px-0 ">
              <div className="tableFilter d-flex flex-column gap-10 mb-1">
                {/* <div className="">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-end gap-10 flex-wrap">
                    
                  </ul>
                </div> */}
                <div className="">
                  {/* <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10 flex-wrap"> */}
                  <Filter
                    body={body}
                    searchHandler={searchHandler}
                    setBody={setBody}
                    statusFilterOptionArr={activeInactiveOptions}
                    ShowPaymentStatus={true}
                    ShowSlotStatus={true}
                  />
                  {/* </ul> */}
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

export default DealManagement;
