import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../../../components/TableLayout";

// img
import moment from "moment";
import { Link } from "react-router-dom";
import CustomPagination from "../../../../../components/Common/CustomPagination";
import Filter from "../../../../../components/Common/Filter";
import TableActions from "../../../../../components/Common/TableActions";
import dataHandler from "../../../../../hooks/dataHandler";
import {
  BLOCK_UNBLOCK_USER,
  SHOP_VISITOR_LISTING,
} from "../../../../../services/ApiCalls";
import { activeInactiveOptions } from "../../../../../utilities/const";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ShopVisitorListing = ({ shopId }) => {
  const { t } = useTranslation();
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
    api: SHOP_VISITOR_LISTING,
    dataToSet: (data) => data?.data?.list,
    dependencies: ["shopId"],
    extraBody: { shopId },
  });

  useEffect(() => {
    setBody((p) => ({
      ...p,
      shopId,
    }));
  }, [shopId]);

  console.log(total, "total");
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
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold text-wrap">{item.userName}</p>
      ),
    },
    { head: t("email"), accessor: "email" },
    {
      head: t("dateTime"),
      accessor: "createdAt",
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
      head: t("action"),
      accessor: "Action",
      component: (item, ind) => (
        <TableActions
          // blockUnBlockHandler={() =>
          //   statusChangeHandler(
          //     () => BLOCK_UNBLOCK_USEr(item?._id),
          //     ind,
          //     "isBlock",
          //     !item?.isBlock
          //   )
          // }
          // isBlocked={item?.isBlock}
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

export default ShopVisitorListing;
