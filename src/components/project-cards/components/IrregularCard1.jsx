import styles from './card1.module.css';

export default function Card1() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>Serverless WOH API</div>
            <div className={styles["fake-border"]}>
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
            </div>
        </div>
    );
}
