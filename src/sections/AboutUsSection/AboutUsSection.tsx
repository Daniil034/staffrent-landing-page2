import {Title} from "shared/ui/Title/Title";
import styles from './AboutUsSection.module.scss';
import {ABOUT_US_ITEMS} from "./config";
import {AboutUsItem} from "./components/AboutUsItem/AboutUsItem";
import {Container} from "shared/ui/Container/Container";


export function AboutUsSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='medium'>О нас</Title>
                <ul className={styles.list}>
                    {ABOUT_US_ITEMS.map((item, index) => (
                        <AboutUsItem key={index} Icon={item.Icon} text={item.text}/>
                    ))}
                </ul>
            </Container>
        </section>
    );
}