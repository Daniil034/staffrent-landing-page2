import styles from './Button.module.scss';
import {ComponentProps, ReactNode} from "react";
import classnames from "classnames";

interface Props extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({children, className, ...restProps}: Props) {
    return (
        <button className={classnames(styles.root, className)} {...restProps}>
            {children}
        </button>
    );
}