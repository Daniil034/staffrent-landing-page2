import {Container} from "shared/ui/Container/Container";
import {Country} from "shared/types/Country";
import {Title} from "shared/ui/Title/Title";
import styles from './CountrySpecificContactsSection.module.scss'
import {ContactCard} from "../../shared/ui/ContactCard/ContactCard";

type Props = {
    country: Country
};

export function CountrySpecificContactsSection(props: Props) {
    const countries: { [key in Country]: string } = {
        estonia: "Эстонии",
        latvia: "Латвии",
        lithuania: "Литве"
    }

    return (
        <section className={styles.root}>
            <Container>
                <Title
                    size='medium'
                    color='white'
                    className={styles.title}
                >
                    Не упустите свой шанс начать новую карьеру
                    в {countries[props.country]}! Отправьте свое
                    резюме сейчас!
                </Title>
                <ContactCard/>
            </Container>
        </section>
    );
}