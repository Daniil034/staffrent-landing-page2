import styles from './Loader.module.scss';

export function Loader() {
    return (
        <div className={styles.root}>
            <div className={styles.loader}/>
        </div>
    );
}