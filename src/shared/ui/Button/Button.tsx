import styles from './Button.module.scss';
import {ComponentProps, ReactNode} from "react";

interface Props extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({children, ...restProps}: Props) {
    return (
        <button className={styles.root} {...restProps}>
            {children}
        </button>
    );
}