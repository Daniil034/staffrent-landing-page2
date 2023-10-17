import {Country} from "shared/types/Country";
import {ReactNode,} from "react";
import {ReviewItem} from "shared/ui/ReviewItem/ReviewItem";
import {Title} from "shared/ui/Title/Title";
import styles from "./CountrySpecificReviewsSection.module.scss";
import {Container} from "shared/ui/Container/Container";
import {useEntitiesContext} from "entitites/useEntitiesContext";

type Props = {
    country: Country
};

export function CountrySpecificReviewsSection(props: Props) {
    let content: ReactNode;
    if (props.country === 'estonia') {
        content = <EstoniaReviews/>
    } else if (props.country === 'latvia') {
        content = <LatviaReviews/>
    } else if (props.country === 'lithuania') {
        content = <LithuaniaReviews/>
    }

    return (
        <section className={styles.root}>
            <Container>
                {content}
            </Container>
        </section>
    )

}

function EstoniaReviews() {
    const entities = useEntitiesContext()

    return (
        <>
            <Title className={styles.title} size='medium'>Отзывы людей, которые уже работают в Эстонии благодаря
                Staffrent</Title>
            <ul className={styles.list}>
                {entities.estonia.reviews.map((review, index) => (
                    <ReviewItem
                        key={index}
                        imgPath={review.imgPath}
                        name={review.name}
                        age={review.age}
                        bio={review.bio}
                    />
                ))}
            </ul>
        </>
    )
}

function LatviaReviews() {
    const entities = useEntitiesContext()

    return (
        <>
            <Title className={styles.title} size='medium'>Отзывы людей, которые уже работают в Латвии благодаря
                Staffrent</Title>
            <ul className={styles.list}>
                {entities.latvia.reviews.map((review, index) => (
                    <ReviewItem
                        key={index}
                        imgPath={review.imgPath}
                        name={review.name}
                        age={review.age}
                        bio={review.bio}
                    />
                ))}
            </ul>
        </>
    )
}

function LithuaniaReviews() {
    const entities = useEntitiesContext()

    return (
        <>
            <Title className={styles.title} size='medium'>Отзывы людей, которые уже работают в Литве благодаря
                Staffrent</Title>
            <ul className={styles.list}>
                {entities.lithuania.reviews.map((review, index) => (
                    <ReviewItem
                        key={index}
                        imgPath={review.imgPath}
                        name={review.name}
                        age={review.age}
                        bio={review.bio}
                    />
                ))}
            </ul>
        </>
    )
}