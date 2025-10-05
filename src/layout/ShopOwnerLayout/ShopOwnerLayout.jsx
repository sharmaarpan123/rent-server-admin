import { useState } from "react";
import { Outlet } from "react-router-dom";
import ShopOwnerHeader from "../../components/ShopOwnerHeader";
import ShopOwnerSidebar from "../../components/ShopOwnerHeader/sidebar/ShopOwnerSidebar";

// css
import styles from "./ShopOwnerLayout.module.scss";

const ShopOwnerLayout = ({ title }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className={`${styles.mainLayout} d-flex align-items-start`}>
        <ShopOwnerSidebar sidebar={sidebar} setSidebar={setSidebar} />
        <main
          className={`${styles.MainBody} ms-auto MainBody position-relative bg-white`}
        >
          <ShopOwnerHeader
            sidebar={sidebar}
            setSidebar={setSidebar}
            title={title}
          />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ShopOwnerLayout;
