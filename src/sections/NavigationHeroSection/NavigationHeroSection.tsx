import {Container} from "shared/ui/Container/Container";
import {Title} from "shared/ui/Title/Title";
import {NavMap} from "./components/NavMap/NavMap";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";
import classnames from "classnames";
import styles from './NavigationHeroSection.module.scss';

export function NavigationHeroSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='large'>
                    Ваша будущая работа в странах Прибалтики
                </Title>
                <Paragraph
                    className={styles.description}
                    color='white'
                    size='medium'
                    weight={400}
                >
                    Наши профессионалы выберут качественно и быстро оформят вам легальное трудоустройство
                </Paragraph>
                <NavMap/>
            </Container>
        </section>
    );
}