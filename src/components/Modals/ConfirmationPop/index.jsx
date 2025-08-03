import { Button, Modal } from "react-bootstrap";

// css
import { useTranslation } from "react-i18next";
import styles from "./ConfirmationPop.module.scss";

// img

const ConfirmationPop = ({
  confirmation,
  setConfirmation,
  confirmHandler,
  type,
}) => {
  const { t } = useTranslation();
  const hideHandler = () => {
    setConfirmation(false);
  };
  const allModels = {
    logout: {
      title: t("logoutTitle"),
      cancelText: t("no"),
      confirmText: t("logout"),
    },
    delete: {
      title: t("deleteTitle"),
      cancelText: t("no"),
      confirmText: t("delete"),
    },
    sure: {
      title: t("sureTitle"),
      cancelText: t("no"),
      confirmText: t("yes"),
    },
  };
  return (
    <>
      <Modal
        show={confirmation}
        className={`${styles.ConfirmationPop} transparentModal`}
        onHide={hideHandler}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className={`${styles.modalBody}`}>
          <div className="px-md-5 text-center mx-auto">
            <h3 className="m-0 fw-bold themeClr">{allModels[type]?.title}</h3>
            <div className="btnWrpper mt-4 d-flex align-items-center justify-content-center gap-10">
              <div className="px-2 w-100">
                <Button
                  onClick={hideHandler}
                  className="fw-sbold d-flex align-items-center justify-content-center commonBtn w-100 GreyBtn"
                >
                  {allModels[type]?.cancelText}
                </Button>
              </div>
              <div className="px-2 w-100">
                <Button
                  onClick={confirmHandler}
                  className={`fw-sbold d-flex align-items-center justify-content-center commonBtn w-100  ${
                    ["delete", "logout"].includes(type) &&
                    ` ${styles.dangerThemeBtn}`
                  }`}
                >
                  {allModels[type]?.confirmText}
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationPop;
