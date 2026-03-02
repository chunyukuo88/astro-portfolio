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
            <div className={styles.content}>
            <p>The gochenour CLI</p>
            <p>Node.js, TDD, NPMJS</p>
            <p>
                This pre-AI passion project is a love letter to useful automations and CLIs,
                the things that first got me interested in programming. I created this for teammates to use and to better appreciate CLI design.
            </p>
            </div>
        </div>
    );
}
