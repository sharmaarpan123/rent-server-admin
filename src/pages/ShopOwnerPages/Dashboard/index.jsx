import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AreaChart from "../../../components/Graph/AreaChart";
import Loading from "../../../components/Common/Loading";
import styles from "./Dashboard.module.scss";
import { useTranslation } from "react-i18next";
import { SHOP_OWNER_DASHBOARD } from "../../../services/ApiCalls";
import { catchAsync, checkResponse } from "../../../utilities/utilities";

const ShopOwnerDashboard = () => {
  const [data, setData] = useState({
    storeCount: 0,
    queryCount: 0
  });
  const [loader, setLoader] = useState(false);
  const { t } = useTranslation();

  const getDashboardData = catchAsync(async () => {
    setLoader(true);
    const res = await SHOP_OWNER_DASHBOARD({});
    checkResponse({ 
      res, 
      setData: (responseData) => setData(responseData), 
      setLoader 
    });
  }, setLoader);

  useEffect(() => {
    getDashboardData();
  }, []);

  if (loader) {
    return <Loading />;
  }

  return (
    <section className="shop-owner-dashboard py-4">
      <Container fluid>
        {/* Store Count Card */}
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <div className="dashboard-card">
              <div className="card-header">
                <h5 className="mb-0">Total Stores</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2 className="display-4 text-primary mb-0">{data.storeCount}</h2>
                    <p className="text-muted mb-0">Active Stores</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="dashboard-card">
              <div className="card-header">
                <h5 className="mb-0">Total Queries</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2 className="display-4 text-success mb-0">{data.queryCount}</h2>
                    <p className="text-muted mb-0">Customer Queries</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerDashboard;
