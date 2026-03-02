import styles from './card1.module.css';

export default function Card1() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p>Woobler's Other House - API</p>
                <p>
                    I wrote this Node.js API using the Serverless Framework,
                    deploying to AWS Lambda. As this is an actively maintained service for
                    an app with real users, the repo is private.
                    However, I am happy to curate the code on a case-by-case basis.
                </p>
            </div>
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
