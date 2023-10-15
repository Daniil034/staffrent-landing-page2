import {Container} from "shared/ui/Container/Container";
import {Title} from "shared/ui/Title/Title";
import {useEffect, useState} from "react";
import {VacancyItem, VacancyItemProps} from "./components/VacancyItem/VacancyItem";
import loh from 'shared/assets/img/loh.jpg'
import styles from './VacanciesSection.module.scss';
import {useEntitiesContext} from "../../entitites/useEntitiesContext";
import {Country} from "../../shared/types/Country";

type Props = {
    countryName: Country
};

export function VacanciesSection(props: Props) {
    const entities = useEntitiesContext();

    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='large' color='white'>Вакансии</Title>
                <ul className={styles.list}>
                    {entities[props.countryName].vacancies.map(vacancy => (
                        <VacancyItem
                            key={vacancy.id}
                            imgSrc={vacancy.imgSrc}
                            title={vacancy.title}
                            rate={vacancy.rate}
                            id={vacancy.id}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
}