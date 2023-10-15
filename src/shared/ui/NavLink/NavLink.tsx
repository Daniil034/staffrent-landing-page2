import classnames from "classnames";
import styles from './NavLink.module.scss';
import {Link} from "react-router-dom";

type Props = {
    href: string,
    className?: string,
};

export function NavLink(props: Props) {
    return (
        <Link className={classnames(styles.root, props.className)} to={props.href}>
            Узнать больше
        </Link>
    );
}