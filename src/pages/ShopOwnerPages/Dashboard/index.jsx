import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AreaChart from "../../../components/Graph/AreaChart";
import Loading from "../../../components/Common/Loading";
import styles from "./Dashboard.module.scss";
import { useTranslation } from "react-i18next";

// Static data for shop owner dashboard
const staticData = {
  totalRentedShops: 15,
  visitorsData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Visitors",
        data: [120, 150, 180, 200, 160, 220]
      }
    ]
  }
};

const ShopOwnerDashboard = () => {
  const [data, setData] = useState(staticData);
  const [loader, setLoader] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Simulate API call
    setLoader(true);
    setTimeout(() => {
      setData(staticData);
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return <Loading />;
  }

  return (
    <section className="shop-owner-dashboard py-4">
      <Container fluid>
        {/* Total Rented Shops Card */}
        <Row className="mb-4">
          <Col xs={12}>
            <div className="dashboard-card">
              <div className="card-header">
                <h5 className="mb-0">Total Rented Shops</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2 className="display-4 text-primary mb-0">{data.totalRentedShops}</h2>
                    <p className="text-muted mb-0">Active Rentals</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Visitors Chart */}
        <Row className="mb-4">
          <Col xs={12}>
            <div className="dashboard-card">
              <div className="card-header">
                <h5 className="mb-0">Shop Visitors Over Time</h5>
              </div>
              <div className="card-body">
                <AreaChart data={data.visitorsData} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerDashboard;
