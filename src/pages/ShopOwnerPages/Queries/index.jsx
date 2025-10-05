import { Col, Container, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";
import moment from "moment";
import CustomPagination from "../../../components/Common/CustomPagination";
import Filter from "../../../components/Common/Filter";
import { activeInactiveOptions } from "../../../utilities/const";
import { capitalizedFirstAlphaBet } from "../../../utilities/utilities";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Static data for shop owner queries
const staticQueriesData = [
  {
    _id: "1",
    user: {
      userName: "john_doe"
    },
    email: "john@example.com",
    concern: "Shop maintenance issue",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    _id: "2",
    user: {
      userName: "jane_smith"
    },
    email: "jane@example.com", 
    concern: "Rent payment inquiry",
    createdAt: "2024-01-14T14:20:00Z"
  },
  {
    _id: "3",
    user: {
      userName: "mike_johnson"
    },
    email: "mike@example.com",
    concern: "Shop access problem",
    createdAt: "2024-01-13T09:15:00Z"
  },
  {
    _id: "4",
    user: {
      userName: "sarah_wilson"
    },
    email: "sarah@example.com",
    concern: "Lease renewal question",
    createdAt: "2024-01-12T16:45:00Z"
  },
  {
    _id: "5",
    user: {
      userName: "david_brown"
    },
    email: "david@example.com",
    concern: "Shop renovation request",
    createdAt: "2024-01-11T11:30:00Z"
  }
];

const ShopOwnerQueries = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [body, setBody] = useState({
    page: 1,
    limit: 10,
    search: "",
    status: ""
  });
  const [total, setTotal] = useState(staticQueriesData.length);

  useEffect(() => {
    setLoader(true);
    // Simulate API call
    setTimeout(() => {
      let filteredData = [...staticQueriesData];
      
      // Apply search filter
      if (body.search) {
        filteredData = filteredData.filter(item => 
          item.user.userName.toLowerCase().includes(body.search.toLowerCase()) ||
          item.email.toLowerCase().includes(body.search.toLowerCase()) ||
          item.concern.toLowerCase().includes(body.search.toLowerCase())
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
