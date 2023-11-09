import {Container} from "shared/ui/Container/Container";
import {Title} from "shared/ui/Title/Title";
import {VacancyItem} from "./components/VacancyItem/VacancyItem";
import {useEntitiesContext} from "entitites/useEntitiesContext";
import {Country} from "shared/types/Country";
import styles from './VacanciesSection.module.scss';
import {useState} from "react";

type Props = {
    countryName: Country
};

export function VacanciesSection(props: Props) {
    const entities = useEntitiesContext();
    // const [vacanciesShowed, setVacanciesShowed] = useState(6);
    const countryVacancies = entities[props.countryName].vacancies;

    // const handleShowMore = () => {
    //     if (vacanciesShowed + 3 > countryVacancies.length) {
    //         setVacanciesShowed(countryVacancies.length)
    //         return;
    //     }
    //     setVacanciesShowed(prev => prev + 6);
    // }

    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='large' color='white'>Вакансии</Title>
                <ul className={styles.list}>
                    {countryVacancies.slice(0, entities.numOfReviewsShowed).map(vacancy => (
                        <VacancyItem
                            key={vacancy.id}
                            imgSrc={vacancy.imgSrc}
                            title={vacancy.title}
                            rate={vacancy.rate}
                            id={vacancy.id}
                        />
                    ))}
                </ul>
                {entities.numOfReviewsShowed < countryVacancies.length && (
                    <button
                        className={styles.moreVacanciesButton}
                        onClick={entities.showMoreReviews}
                    >
                        Больше вакансий
                    </button>
                )}
                <div className={styles.advantages}>
                    <p><span>Преимущества</span> работы у нас:</p>
                    <ul className={styles.advantagesList}>
                        <li>Необязательно знать иностранный язык</li>
                        <li><span>Авансы</span> каждую неделю</li>
                        <li><span>Рабочая одежда</span></li>
                        <li>Предоставляется <span>жилье</span></li>
                        <li><span>Транспорт</span> с работы</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}