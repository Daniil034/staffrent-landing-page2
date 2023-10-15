import {Title} from "shared/ui/Title/Title";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";
import styles from './WhyWeSectionItem.module.scss';

export type WhyWeSectionItemProps = {
    title: string,
    body: string,
};

export function WhyWeSectionItem(props: WhyWeSectionItemProps) {
    return (
        <li className={styles.root}>
            <Title className={styles.title}>{props.title}</Title>
            <Paragraph size='small' weight={500} align='center' color='white'>{props.body}</Paragraph>
        </li>
    );
}