import { CallForm } from '../call-form/call-form';
import styles from './questions.module.css';

function Questions({ question, description }) {
    return (
        <section className={styles.questions}>
            <div className={styles.content}>
                <h2 className={styles.header}>{question}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <CallForm />
        </section>
    );
}

export { Questions };
