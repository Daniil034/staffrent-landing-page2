import {ReactNode} from "react";
import classnames from "classnames";
import styles from './Container.module.scss';

type Props = {
    className?: string,
    children: ReactNode,
};

export function Container(props: Props) {
    const {className, children} = props;

    return (
        <div className={classnames(styles.root, className)}>
            {children}
        </div>
    );
}