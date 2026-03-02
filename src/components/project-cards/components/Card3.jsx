import styles from './card3.module.css';

export default function Card3() {
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
                <p>This site</p>
                <p>
                    Piqued by its recent tie-up with Cloudflare, I decided to give Astro a try,
                    and am genuinely impressed by its SEO and performance scores in Lighthouse.
                    It is also nice to be able to leverage the strengths of multiple front-end technologies,
                    and this site uses Preact for some components, including the ones you are looking at right now!
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
