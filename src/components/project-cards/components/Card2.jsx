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
            <div className={styles.content}>
                <p>Woobler's Other House - SvelteKit</p>
                <p>This is the most recent iteration of a family photo album, and I update it weekly.
                    Both the code and the site are publicly available. Private images (for family and
                    friends) are available via a query parameter. The idea is a site that appears to
                    degrade as you use it.
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
