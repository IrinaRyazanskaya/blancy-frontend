import styles from "./facts.module.css";

type FactsProps = {
  number: string;
  description: string;
};

const Facts = ({ number, description }: FactsProps) => {
  return (
    <div className={styles.fact}>
      <span className={styles.number}>{number}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export { Facts };
