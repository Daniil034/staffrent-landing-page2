import {Title} from "shared/ui/Title/Title";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";
import {NavLink} from "shared/ui/NavLink/NavLink";
import styles from './VacancyItem.module.scss';

export type VacancyItemProps = {
    imgSrc: string,
    title: string,
    rate: number,
    id: string,
};

export function VacancyItem(props: VacancyItemProps) {
    const {imgSrc, title, rate, id} = props;

    return (
        <li className={styles.root}>
            <img className={styles.img} src={imgSrc}/>
            <Title size='small' color='dark'>{title}</Title>
            <Paragraph className={styles.price} align={"center"} color='dark' size='small' weight={400}>€{rate} в
                час</Paragraph>
            <div className={styles.link}>
                <NavLink href={`vacancies/${id}`}/>
            </div>
        </li>
    );
}