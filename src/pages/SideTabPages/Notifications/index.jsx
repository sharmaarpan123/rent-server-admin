import { Col, Container, Row } from "react-bootstrap";

// img
import moment from "moment";
import TableLayout from "../../../components/TableLayout";

const Notification = () => {
  const {
    setBody,
    body = { page: 1, limit: 10 },
    data = [
      {
        createdAt: moment().subtract(11, "d"),
        title: "New user registered",
        body: "new registration",
      },
      {
        createdAt: moment().subtract(22, "d"),
        title: "New user shops registered , waiting for the your approval!",
        body: "new registration",
      },

      {
        createdAt: moment().subtract(22, "d"),
        title: "New user registered",
        body: "new registration",
      },

      {
        createdAt: moment().subtract(25, "d"),
        title: "New user registered",
        body: "new registration",
      },

      {
        createdAt: moment().subtract(27, "d"),
        title: "User have raised query",
        body: "new query",
      },

      {
        createdAt: moment().subtract(29, "d"),
        title: "User have raised query",
        body: "new query",
      },
    ],
    loader,
    paginationHandler,
    total,
  } = {};

  const column = [
    {
      head: "#",
      accessor: "#",
      component: (item, key) => {
        return <>{body.limit * (body.page - 1) + key + 1}</>;
      },
    },
    {
      head: "Time",
      component: (item) => {
        return <>{moment(item?.createdAt).format("DD-MM-YYYY  hh:mm:ss A")}</>;
      },
    },
    {
      head: "Title",
      accessor: "body",
    },
    {
      head: "Message",
      accessor: "title",
    },
  ];

  return (
    <>
      <section className="systemAcess py-3 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <TableLayout column={column} data={data} loader={loader} />
              {/* <CustomPagination
                body={body}
                pageChangeHandler={paginationHandler}
                setBody={setBody}
                total={total}
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Notification;
