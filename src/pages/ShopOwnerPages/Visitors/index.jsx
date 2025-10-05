import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";
import moment from "moment";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import TableActions from "../../../components/Common/TableActions";
import { activeInactiveOptions } from "../../../utilities/const";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Static data for shop visitors
const staticVisitorsData = [
  {
    _id: "1",
    userName: "John Doe",
    email: "john@example.com",
    createdAt: "2024-01-15T10:30:00Z",
    isBlock: false
  },
  {
    _id: "2", 
    userName: "Jane Smith",
    email: "jane@example.com",
    createdAt: "2024-01-14T14:20:00Z",
    isBlock: false
  },
  {
    _id: "3",
    userName: "Mike Johnson",
    email: "mike@example.com", 
    createdAt: "2024-01-13T09:15:00Z",
    isBlock: true
  },
  {
    _id: "4",
    userName: "Sarah Wilson",
    email: "sarah@example.com",
    createdAt: "2024-01-12T16:45:00Z",
    isBlock: false
  },
  {
    _id: "5",
    userName: "David Brown",
    email: "david@example.com",
    createdAt: "2024-01-11T11:30:00Z",
    isBlock: false
  }
];

const ShopOwnerVisitors = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [body, setBody] = useState({
    page: 1,
    limit: 10,
    search: "",
    status: ""
  });
  const [total, setTotal] = useState(staticVisitorsData.length);

  useEffect(() => {
    setLoader(true);
    // Simulate API call
    setTimeout(() => {
      let filteredData = [...staticVisitorsData];
      
      // Apply search filter
      if (body.search) {
        filteredData = filteredData.filter(item => 
          item.userName.toLowerCase().includes(body.search.toLowerCase()) ||
          item.email.toLowerCase().includes(body.search.toLowerCase())
        );
      }

      // Apply status filter
      if (body.status !== "") {
        filteredData = filteredData.filter(item => 
          body.status === "1" ? !item.isBlock : item.isBlock
        );
      }

      setData(filteredData);
      setTotal(filteredData.length);
      setLoader(false);
    }, 500);
  }, [body]);

  const paginationHandler = (page) => {
    setBody(prev => ({ ...prev, page }));
  };

  const searchHandler = (search) => {
    setBody(prev => ({ ...prev, search, page: 1 }));
  };

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
          viewLink={"/shop-owner/visitors/detail/" + item?._id}
        />
      ),
    },
  ];

  return (
    <>
      <section className="shop-owner-visitors py-3 position-relative">
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

export default ShopOwnerVisitors;
