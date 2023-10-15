import {useParams} from "react-router-dom";
import {useEntitiesContext} from "entitites/useEntitiesContext";
import {Country} from "shared/types/Country";
import styles from './VacancyPage.module.scss';
import {Container} from "../../shared/ui/Container/Container";
import {Paragraph} from "../../shared/ui/Paragraph/Paragraph";


export function VacancyPage() {
    const {countryName, vacancyId} = useParams();
    const entities = useEntitiesContext();
    const vacancy = entities[countryName as Country].vacancies.find(vacancy => vacancy.id === vacancyId);

    return (
        <>
            <Container>
                <h3 className={styles.title}>{vacancy?.title}</h3>
                <Paragraph
                    className={styles.subtitle}
                    align='left'
                    color='white'
                    size='medium'
                    weight={500}
                >
                    {vacancy?.subtitle}
                </Paragraph>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td>1 hr</td>
                        <td>€{vacancy?.rate}</td>
                        <td>{vacancy?.country}</td>
                    </tr>
                    </tbody>
                </table>
                <Paragraph
                    className={styles.subtitle}
                    align='left'
                    color='white'
                    size='medium'
                    weight={500}
                >
                    {vacancy?.descriptionTitle}
                </Paragraph>
            </Container>
        </>
    );
}