import {Link} from "react-router-dom";
import classnames from "classnames";
import styles from './NavLink.module.scss';

type Props = {
    href: string,
    className?: string,
};

export function NavLink(props: Props) {
    return (
        <Link preventScrollReset={true} className={classnames(styles.root, props.className)} to={props.href}>
            Узнать больше
        </Link>
    );
}