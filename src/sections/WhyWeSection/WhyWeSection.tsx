import styles from './WhyWeSection.module.scss';
import {Container} from "shared/ui/Container/Container";
import {WHY_WE_ITEMS} from "./components/config";
import {WhyWeSectionItem} from "./components/WhyWeSectionItem/WhyWeSectionItem";
import {Title} from "../../shared/ui/Title/Title";

type Props = {};

export function WhyWeSection(props: Props) {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='medium'>Почему мы?</Title>
                <ul className={styles.list}>
                    {WHY_WE_ITEMS.map((item, index) => (
                        <WhyWeSectionItem key={index} title={item.title} body={item.body}/>
                    ))}
                </ul>
            </Container>
        </section>
    );
}