import moment from "moment";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import TableActions from "../../../components/Common/TableActions";
import TableLayout from "../../../components/TableLayout";
import dataHandler from "../../../hooks/dataHandler";
import { SHOP_OWNER_SHOP_LIST } from "../../../services/ApiCalls";
import { activeInactiveOptions } from "../../../utilities/const";

const ShopOwnerShops = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state?.login?.admin);

  const {
    setBody,
    body,
    data,
    loader,
    paginationHandler,
    searchHandler,
    total,
  } = dataHandler({
    api: SHOP_OWNER_SHOP_LIST,
    dataToSet: (data) => data?.data?.shopList,
    extraBody: { sort: "createdAt", order: -1, userId: user?._id },
    dependencies: ["userId"],
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
      head: t("shopName"),
      accessor: "name",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold text-wrap">{item.name}</p>
      ),
    },
    {
      head: t("status"),
      accessor: "status",
      component: (item) => (
        <p
          className={`mb-0 ${
            item.status === "rented"
              ? "bg-success text-white"
              : "bg-warning text-white"
          } d-flex justify-content-start pb-0 rounded px-2 `}
          style={{
            width: "fit-content",
          }}
        >
          {item.status === "rented" ? t("rented") : t("available")}
        </p>
      ),
    },
    // {
    //   head: "Rent User",
    //   accessor: "rentUser",
    //   component: (item) => (
    //     <span className="text-muted">
    //       {item.rentUser ? item.rentUser.userName || "Rented" : "Not Rented"}
    //     </span>
    //   ),
    // },
    {
      head: t("createdDate"),
      accessor: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },
    // {
    //   head: "Action",
    //   accessor: "Action",
    //   component: (item, ind) => (
    //     <TableActions viewLink={"/shop-owner/shops/detail/" + item?._id} />
    //   ),
    // },
  ];

  return (
    <>
      <section className="shop-owner-shops py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="tableFilter d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div className="left">
                  <Filter
                    body={body}
                    setBody={setBody}
                    searchHandler={searchHandler}
                    showStatusFilter={true}
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

export default ShopOwnerShops;
