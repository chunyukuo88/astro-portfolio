import styles from './card2.module.css';

export default function Card2() {
    return (
        <div className={styles.card}>
            <div className={styles["top-row"]}>
                <div className={styles.block}></div>
            </div>
            <div className={styles["fake-border-top"]}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
            <div className={styles.content}>SvelteKit — WOH</div>
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
            </div>
        </div>
    );
}
