import styles from './card5.module.css';

export default function Card5() {
    return (
        <div className={styles.card}>
            <div className={styles["top-row"]}>
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
            <div className={styles.content}>NODE gochenour CLI</div>
        </div>
    );
}
