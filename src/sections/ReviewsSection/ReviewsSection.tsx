import {Container} from "shared/ui/Container/Container";
import {Title} from "shared/ui/Title/Title";
import {ReviewItem,} from "shared/ui/ReviewItem/ReviewItem";
import styles from './ReviewsSection.module.scss';
import {useEntitiesContext} from "../../entitites/useEntitiesContext";

export function ReviewsSection() {
    const entities = useEntitiesContext()

    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='medium'>Отзывы наших клиентов</Title>
                <ul className={styles.list}>
                    {entities.mixed.reviews.map((review, index) => (
                        <ReviewItem
                            key={index}
                            imgPath={review.imgPath}
                            name={review.name}
                            age={review.age}
                            bio={review.bio}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
}