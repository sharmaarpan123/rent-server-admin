import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

// css
import styles from "./mainLayout.module.scss";

import Sidebar from "../../components/Header/sidebar/Sidebar";

const MainLayout = ({ title }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className={`${styles.mainLayout} d-flex align-items-start`}>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <main
          className={`${styles.MainBody} ms-auto MainBody position-relative bg-white`}
        >
          <Header sidebar={sidebar} setSidebar={setSidebar} title={title} />
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;
