import {ReactNode} from "react";
import classnames from "classnames";
import styles from './Paragraph.module.scss';

type Weight = 400 | 500 | 600;
type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'
type Color = 'white' | 'dark' | 'red'

type Props = {
    className?: string,
    children: ReactNode,
    size?: Size,
    weight?: Weight,
    align?: Align,
    color?: Color
};

export function Paragraph(props: Props) {
    const {size = 'small', weight = 400, color = 'dark', align = 'left', className, children} = props;

    const mods = {
        [styles.fsSmall]: size === 'small',
        [styles.fsMedium]: size === 'medium',
        [styles.fsLarge]: size === 'large',
        [styles.fw400]: weight === 400,
        [styles.fw500]: weight === 500,
        [styles.fw600]: weight === 600,
        [styles.colorWhite]: color === 'white',
        [styles.colorDark]: color === 'dark',
        [styles.colorRed]: color === 'red',
        [styles.alignLeft]: align === 'left',
        [styles.alignCenter]: align === 'center',
        [styles.alignRight]: align === 'right'
    }

    return (
        <p className={classnames(mods, className)}>
            {children}
        </p>
    );
}