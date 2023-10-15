import styles from './ReviewItem.module.scss';
import {Title} from "shared/ui/Title/Title";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";

export type ReviewItemProps = {
    imgPath: string,
    name: string,
    age: number,
    bio: string
};

export function ReviewItem(props: ReviewItemProps) {
    const {imgPath, name, age, bio} = props;

    return (
        <div className={styles.root}>
            <div className={styles.img} style={{backgroundImage: `url(${imgPath})`}}/>
            <Title className={styles.name} size='small' color='dark'>{name}</Title>
            <Paragraph className={styles.age} size='small' weight={500} align='center'
                       color='dark'>{age} лет</Paragraph>
            <Paragraph size='small' weight={500} align='center' color='dark'>{bio}</Paragraph>
        </div>
    );
}