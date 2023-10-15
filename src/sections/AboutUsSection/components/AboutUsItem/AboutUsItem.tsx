import styles from './AboutUsItem.module.scss';
import {Paragraph} from "shared/ui/Paragraph/Paragraph";

export type AboutUsItemProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    text: string
};

export function AboutUsItem(props: AboutUsItemProps) {
    return (
        <li className={styles.root}>
            <props.Icon/>
            <Paragraph align='center' color='white'>
                {props.text}
            </Paragraph>
        </li>
    );
}