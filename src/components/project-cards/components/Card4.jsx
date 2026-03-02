import styles from './card4.module.css';

export default function Card4() {
    return (
        <div className={styles.card}>
            <div className={styles["top-row"]}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
            <div className={styles["fake-border-top"]}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
            <div className={styles.content}>
            <p>Workouts API</p>
            <p>Golang, native packages</p>
            <p>
                A monorepo of a simple workout API with sign-up and sign-in,
                as well as CRUD functionality and rigorous separation of concerns.
            </p>
            </div>
            <div className={styles["fake-border-bottom"]}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
            <div className={styles["bottom-row"]}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </div>
    );
}
