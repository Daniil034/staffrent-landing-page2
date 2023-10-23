import styles from './InstaIframeSection.module.scss';
import {InstagramEmbed} from "react-social-media-embed";

export function InstaIframeSection() {
    return (
        <section className={styles.root}>
            <InstagramEmbed
                url="https://www.instagram.com/reel/Cl6D_oQOFot/?utm_source=ig_embed&amp;utm_campaign=loading"
                retryDisabled={true}
            />
        </section>
    );
}