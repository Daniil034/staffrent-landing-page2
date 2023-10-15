// import {ReactComponent as NavMap} from "shared/assets/img/navMap.svg";
import {Container} from "shared/ui/Container/Container";
import {Title} from "shared/ui/Title/Title";
import {NavMap} from "./components/NavMap/NavMap";
import styles from './NavigationHeroSection.module.scss';

export function NavigationHeroSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title size='large'>
                    Ваша будущая работа в странах Прибалтики
                </Title>
                <NavMap/>
            </Container>
        </section>
    );
}