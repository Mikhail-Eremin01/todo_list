import styles from "./Loading.module.scss";

const Loading = function () {
    return (
        <div className={styles.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export { Loading };
