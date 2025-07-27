import styles from "./common.module.scss";

const Loading = ({ fullSize }) => {
  return (
    <div
      className={`${styles.loader} ${fullSize ? `${styles.loaderFul}` : ""}`}
      style={{
        ...(fullSize
          ? { width: "100%", height: "100%" }
          : { width: 40, height: 40 }),
      }}
    ></div>
  );
};

export default Loading;
