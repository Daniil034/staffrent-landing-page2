import {Container} from "shared/ui/Container/Container";
import styles from './ContactsSection.module.scss';
import {ContactCard} from "shared/ui/ContactCard/ContactCard";

export function ContactsSection() {
    return (
        <section className={styles.root}>
            <Container>
                <ContactCard/>
            </Container>
        </section>
    );
}