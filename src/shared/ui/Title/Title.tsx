import classnames from 'classnames'
import styles from './Title.module.scss';
import {ReactNode} from "react";

type Size = 'small' | 'medium' | 'large';
type Color = 'white' | 'dark' | 'red';

type Props = {
    className?: string,
    size?: Size;
    color?: Color,
    children: ReactNode
};

export function Title(props: Props) {
    const {size = 'small', className, color = 'white', children} = props;

    const mods = {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.colorWhite]: color === 'white',
        [styles.colorDark]: color === 'dark',
        [styles.colorRed]: color === 'red'
    }

    return (
        <h3 className={classnames(styles.root, mods, className)}>
            {children}
        </h3>
    );
}