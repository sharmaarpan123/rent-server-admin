import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";
import moment from "moment";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import dataHandler from "../../../hooks/dataHandler";
import { SHOP_OWNER_QUERIES_LIST } from "../../../services/ApiCalls";
import { activeInactiveOptions } from "../../../utilities/const";
import { capitalizedFirstAlphaBet } from "../../../utilities/utilities";
import { useTranslation } from "react-i18next";

const ShopOwnerQueries = () => {
  const { t } = useTranslation();
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
    api: SHOP_OWNER_QUERIES_LIST,
    dataToSet: (data) => data?.data?.data,
    extraBody: {
      userId: localStorage.getItem("_id"),
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
      head: t("userName"),
      accessor: "name",
      component: (item, key, arr) => (
        <p className="m-0 themePink fw-sbold">
          {capitalizedFirstAlphaBet(item?.user?.userName)}
        </p>
      ),
    },
    {
      head: t("email"),
      accessor: "email",
      sortKey: "email",
    },
    {
      head: t("concern"),
      accessor: "concern",
      sortKey: "concern",
    },
    {
      head: t("dateTime"),
      accessor: "createdAt",
      sortKey: "createdAt",
      component: (item, key, arr) => (
        <>{moment(item.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>
      ),
    },
  ];

  return (
    <>
      <section className="shop-owner-queries py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="tableFilter d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div className="left">
                  <Filter
                    body={body}
                    searchHandler={searchHandler}
                    setBody={setBody}
                    statusFilterOptionArr={activeInactiveOptions}
                    showStatusFilter={false}
                  />
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

export default ShopOwnerQueries;
