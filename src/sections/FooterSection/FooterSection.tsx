import {Container} from "shared/ui/Container/Container";
import {ReactComponent as StaffrentLogo} from "shared/assets/icons/staffrentLogo.svg";
import styles from './FooterSection.module.scss';


export function FooterSection() {
    return (
        <footer className={styles.root}>
            <Container>
                <div className={styles.top}>
                    <StaffrentLogo className={styles.logo}/>
                    <p>
                        <a href="mailto:info@staffrent.ee" className={styles.link}>info@staffrent.ee</a> / <a
                        href="mailto:offer@staffrent.nl" className={styles.link}>offer@staffrent.nl</a>
                    </p>
                </div>
                <p className={styles.bottom}>
                    © STAFFRENT, 2023
                </p>
            </Container>
        </footer>
    );
}