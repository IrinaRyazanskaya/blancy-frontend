import styles from './facts.module.css';

function Facts({ number, description }) {
    return (
        <div className={styles.fact}>
            <span className={styles.number}>{number}</span>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export { Facts };
